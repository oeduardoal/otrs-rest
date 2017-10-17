'use strict'

/**
 * OTRS RESTful API
 */
class OTRSApi{
    /**
     *
     * @param {Object} opts
     */
    constructor(opts = {}){
        
        this._opts          = opts;
        
    }

    show() {
        console.log(this._opts)
    }
}

module.exports = {
    OTRS
}