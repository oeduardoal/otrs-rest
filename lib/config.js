class OTRSApiConfigs{
    constructor(opts){
        this._opts          = opts;
        this._url           = opts.url;
        this._user          = opts.user;
        this._password      = opts.password;
        this._webservice    = opts.webservice;
    }

   ConfigNewTicket(){
        return {
            method: 'POST',
            uri: `${this._url}/nph-genericinterface.pl/Webservice/${this._webservice}/Ticket?UserLogin=${this._user}&Password=${this._password}`,
            headers: {
                'Content-Type': 'application/json'
            }
        }
    }
   ConfigGetTicket(id){
        return {
            method: 'GET',
            uri: `${this._url}/nph-genericinterface.pl/Webservice/${this._webservice}/Ticket/${id}?UserLogin=${this._user}&Password=${this._password}`,
        }
    }
    
}

module.exports = {
    OTRSApiConfigs
}