'use strict'

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

    getTicket(id) {
        console.log(id)
    }
}

module.exports = {
    OTRSApi
}