const API = require('./index.js');

const OTRS = API.OTRS;

let a = new OTRS({
    url : "url",
    user    : "user",
    password: "password",
    webservice: "webservice"
})

console.log(a.api);