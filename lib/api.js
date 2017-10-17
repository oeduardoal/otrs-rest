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
                if (!err && response.statusCode == 200 && body && (!body.Error)) {
                    resolve(body)
                    return
                }
    
                if (err && err.code) {
                    reject("Error: ", err.code)
                    return
                }
    
                if (body && body.Error) {
                    reject(body)
                    return
                }
    
                if (err.message === 'Unexpected token < in JSON at position 0') {
                    reject("Error: ", err.message)
                    return
                }
    
                reject(err)
            })
            
        })
    }

    /**
     *
     * @param {Number} id
     * @returns {Promise<Object>}
     */
    getTicket(id) {
        
        let _config = new OTRSApiConfigs.OTRSApiConfigs(this._opts);
        
        let params = _config.ConfigGetTicket(id);

        return this.call('get',params);

    }
}

module.exports = {
    OTRSApi
}