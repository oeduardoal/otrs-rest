const API = require('./index.js');

const OTRS = API.OTRS;

let a = new OTRS({
    url : "ipAddress",
    user    : "userOTRS",
    password: "passwordOTRS",
    webservice: "Rest"
})