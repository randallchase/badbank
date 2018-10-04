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

// setup data store
db.defaults({accounts: []}).write();
// YOUR CODE


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

app.get('/accounts/create/:name/:email/:password', function (req, res) {

    var newAccount = {'name'        : req.params.name,
                      'email'       : req.params.email,
                      'balance'     : 0,
                      'password'    : req.params.password,
                      'transactions': ['Account Created']};

    db.get('accounts').push(newAccount).write();
    console.log(db.get('accounts').value());
    res.send(db.get('accounts').value());
    // YOUR CODE
    // Create account route
    // return success or failure string
});

app.get('/accounts/login/:email/:password', function (req, res) {

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