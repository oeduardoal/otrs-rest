'use strict'

const OTRSApi   = require('./lib/api')

/**
 * OTRS RESTful
 */
class OTRS{
    /**
     *
     * @param {Object} opts
     */
    constructor(opts = {}){
        
        this._opts          = opts;
        this._url           = opts.url;
        this._user          = opts.user;
        this._password      = opts.password;
        this._webservice    = opts.webservice;
        
    }

    show() {
        console.log(this._opts)
    }
}

module.exports = {
    OTRS
}