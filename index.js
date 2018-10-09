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

function logTransaction (dbase, email, action, amount) {

    function postTime() {
    var date = new Date();
    var timestamp = date.toISOString();
    return timestamp
    };

    var transaction  = {'action'     : action,
                        'amount'     : Number(amount),
                        'timestamp'  : postTime()}
    dbase.get('accounts')
        .find({email: email})
        .get('transactions')
        .push(transaction)
        .write();

}

function checkAccounts (emailIn) {
    return db.get('accounts').find({email:emailIn}).value() === undefined
};


app.get('/accounts/create/:name/:email/:password', function (req, res) {
    var newAccount = {'name'        : req.params.name,
                      'email'       : req.params.email,
                      'balance'     : Number(0),
                      'password'    : req.params.password,
                      'transactions': []};
    if (checkAccounts(newAccount.email)) {
        db.get('accounts').push(newAccount).write();
        logTransaction(db, newAccount.email, 'create', 0);
        console.log(db.get('accounts').value());
        res.send('Success! Account Created.');
    } else {
        console.log('Account exists');
        res.send('Account already exists. Please login or try a different email.')
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
    if (account !== undefined) {
        logTransaction(db, loginAcct.email, 'login', Number(0));
        console.log(db.get('accounts').value());
        res.send('Login Complete')
    } else {
        res.send('This username/password combo does not exist. Please try again.');
    }

    // YOUR CODE
    // Login user - confirm credentials
    // If success, return account object    
    // If fail, return null
});

app.get('/accounts/deposit/:email/:amount', function (req, res) {
    var dep = {'email'  : req.params.email,
               'amount' : Number(req.params.amount)};
    var account =  db.get('accounts').find({email: dep.email}).value();

    if (account !== undefined) {
        //expect type issues with this.
        db.get('accounts').find({email: dep.email}).update('balance', n => n + dep.amount).write();
        logTransaction(db, dep.email, 'deposit', dep.amount);
        res.send("$" + dep.amount + " deposited into your account.");
    } else {
        res.send('This account does not exist. Please try again.');
    }
    // YOUR CODE
    // Deposit amount for email
    // return success or failure string
});

app.get('/accounts/withdraw/:email/:amount', function (req, res) {
    var withdrawal = {'email'  : req.params.email,
                      'amount' : Number(req.params.amount)};
    var account =  db.get('accounts').find({email: withdrawal.email}).value();

    if (account !== undefined) {
        //expect type issues with this.
        db.get('accounts').find({email: withdrawal.email}).update('balance', n => n - withdrawal.amount).write();
        logTransaction(db, withdrawal.email, 'withdraw', withdrawal.amount);
        res.send("$" + withdrawal.amount + " withdrawn from your account.");
    } else {
        res.send('This account does not exist. Please try again.');
    }
    // YOUR CODE
    // Withdraw amount for email
    // return success or failure string
});

app.get('/accounts/transactions/:email', function (req, res) {
    var account = db.get('accounts').find({email: req.params.email});

    if (account !== undefined) {
        logTransaction(db, req.params.email, 'audit', Number(0));
        res.send("Transactions: <br> " +  JSON.stringify(account.get('transactions').value()));
    } else {
        res.send("This account does not exist. Please Try again.")
    }
    // YOUR CODE
    // Return all transactions for account
});

app.get('/accounts/get/:email', function (req, res) {
    var account = db.get('accounts').find({email: req.params.email});

    if (account !== undefined) {
        logTransaction(db, req.params.email, 'balance view', Number(0));
        res.send("You currently have a balance of $" +  account.get('balance').value() + ".");
    } else {
        res.send("This account does not exist. Please Try again.");
    }
    // YOUR CODE
    // Return account based on email
});


app.get('/accounts/all', function (req, res) {
    var accounts = db.get('accounts').value();
    var accountText = "";
    var i;
    for (i = 0; i < accounts.length; i++) {
        accountText += JSON.stringify(accounts[i]) + "<br>";
    }
    res.send(accountText);
    // YOUR CODE
    // Return data for all accounts

});


app.listen(80, function(){
    console.log('Running on port: 80')
});