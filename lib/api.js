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
            
            resolve("ok")

            // req.method({
            //     params
            // },
            // (err,res,body) =>{
            // })

            
        })
    }

    getTicket(id) {
        
        let params = new OTRSApiConfigs.OTRSApiConfigs(this._opts.opts);
        console.log(params.ConfigGetTicket(id))
        return this.call('get',params);

    }
}

module.exports = {
    OTRSApi
}