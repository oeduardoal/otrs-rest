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
        console.log(this._opts);
    }

    getTicket(id) {
        console.log(id)
    }
}

module.exports = {
    OTRSApi
}