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
            
            req.method({
                params
            },
            (err,res,body) =>{
                resolve(body)
            })
            
        })
    }

    getTicket(id) {
        
        let _config = new OTRSApiConfigs.OTRSApiConfigs(this._opts.opts);

        let params = _config.ConfigGetTicket(id);

        return this.call('get',params);

    }
}

module.exports = {
    OTRSApi
}