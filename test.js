const API = require('./index.js');

const OTRS = API.OTRS;

let app = new OTRS({
    url : "http://192.168.10.2/otrs",
    user    : "root@localhost",
    password: "1001",
    webservice: "Rest"
})

// app.api.getTicket(708)
// .then(Ticket => {
//     console.log("Resolve",Ticket)
// })
// .catch(Err => {
//     console.log("Reject",Err)
// })
app.api.newTicket()
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})