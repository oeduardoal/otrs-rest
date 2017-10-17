'use strict'
const req       = require("request");

const OTRSApiConfigs    = require('./config');

/**
 * OTRS RESTful API
 */
class OTRSApi{
    /**
     *
     * @param {Object} opts
     */
    constructor(opts){
        this._opts = opts;
    }
    
    /**
     * 
     * @param {string} method
     * @param {object} params
     * @returns {Promise<Object>}
     */
    call(method, params) {
        return new Promise((resolve, reject) => {
            req(params,
            (err,response,body) =>{
                body = JSON.parse(body);
                if (!err && response.statusCode == 200 && body) {
                    resolve(body)
                    return
                }
    
                if (err && err.code) {
                    this._logger.error({'Network error:': err, 'request': request })
                    this._retryRequest(request, resolve, reject)
    
                    return
                }
    
                if (body && body.error_code) {
                    const error = TelegramApiError.fromResponse(body)
    
                    if (error.code == 500) {
                        this._logger.warn({ 'Got Internal server error from Telegram. Body:': body })
                        this._retryRequest(request, resolve, reject)
    
                        return
                    }
    
                    reject(error)
                    this._logger.warn({ 'Api error: Body:': body })
    
                    return
                }
    
                if (err.message === 'Unexpected token < in JSON at position 0') {
                    this._logger.error({
                        'api request error: Telegram returned some html instead of json. Body:': body,
                        'Error:': err
                    })
                    this._retryRequest(request, resolve, reject)
    
                    return
                }
    
                this._logger.error({'api request error: Body:': body, 'Error:': err })
                reject(err)
            })
            
        })
    }

    getTicket(id) {
        
        let _config = new OTRSApiConfigs.OTRSApiConfigs(this._opts);
        let params = _config.ConfigGetTicket(id);
        console.log(this)
        return this.call('get',params);

    }
}

module.exports = {
    OTRSApi
}