// setup server
// YOUR CODE

var express = require('express');
var app     = express();
var low     = require('lowdb');
var fs      = require('lowdb/adapters/FileSync');
var adapter = new fs('db.json');
var db      = low(adapter);

// setup directory used to serve static files
// YOUR CODE
app.use(express.static('public'));

// allow Cross-Origin Resource Sharing (CORS)
var cors = require('cors');
app.use(cors());

// setup data store
db.defaults({accounts: []}).write();
// YOUR CODE
app.get('/data', function(req, res){

    res.send(db.get('accounts').value());

});

// required data store structure
// YOUR CODE
/*
{ 
    accounts:[
        {name        : '',
         email       : '',
         balance     : 0,
         password    : '',
         transactions: []}
    ] 
}
*/
function postTime() {
    var date = new Date();
    var timestamp = date.toISOString();
    return timestamp
};

function checkAccounts (emailIn) {
    return db.get('accounts').find({email:emailIn}).value() === undefined
};

app.get('/accounts/create/:name/:email/:password', function (req, res) {
    var newAccount = {'name'        : req.params.name,
                      'email'       : req.params.email,
                      'balance'     : 0,
                      'password'    : req.params.password,
                      'transactions': [{'action'    : 'create',
                                        'amount'    : '0',
                                        'timestamp' : postTime()}]};
    if (checkAccounts(newAccount.email)) {
        db.get('accounts').push(newAccount).write();
        console.log(db.get('accounts').value());
        res.send(db.get('accounts').value());
    } else {
        console.log('Account exists')
        res.send('Account already exists')
    }

    // YOUR CODE
    // Create account route
    // return success or failure string
});

app.get('/accounts/login/:email/:password', function (req, res) {
    var loginAcct = {'email'   : req.params.email,
                     'password': req.params.password}
    var account = db.get('accounts').find({email   : loginAcct.email,
                                           password: loginAcct.password}).value();
    if (account === undefined) {
        res.send('This username/password combo does not exist. Please try again.');
    } else {
        var loginTransaction = {'action'    : 'login',
                                'amount'    : 0,
                                'timestamp' : postTime()};
        db.get('accounts').find({email   : loginAcct.email,
                                 password: loginAcct.password}).get('transactions').push(loginTransaction).write();
        res.send(account);
    }

    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null
});

app.get('/accounts/get/:email', function (req, res) {

    // YOUR CODE
    // Return account based on email
});

app.get('/accounts/deposit/:email/:amount', function (req, res) {

    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
});

app.get('/accounts/withdraw/:email/:amount', function (req, res) {

    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
});

app.get('/accounts/transactions/:email', function (req, res) {

    // YOUR CODE
    // Return all transactions for account
});

app.get('/accounts/all', function (req, res) {

    // YOUR CODE
    // Return data for all accounts
});

app.listen(3000, function(){
    console.log('Running on port: 3000')
});