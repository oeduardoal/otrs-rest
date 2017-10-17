const API = require('./index.js');

const OTRS = API.OTRS;

let app = new OTRS({
    url : "192.168.10.2",
    user    : "root@localhost",
    password: "1001",
    webservice: "Rest"
})
app.api.getTicket(123)
.then(Ticket => {
    console.log(Ticket)
})
.catch(Err => {
    console.log(Err)
})
