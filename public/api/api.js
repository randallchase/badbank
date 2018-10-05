/* functionality to validate whether the account exists.
------------------
function checkAccounts (emailIn) {
    return db.get('accounts').find({email:emailIn}).value() === undefined
};
*/

function create() {
    var status = document.getElementById('collapse-collapsed');
    var obj = {
        name    : document.getElementById("addUserName").value,
        email   : document.getElementById("addEmail").value,
        password: document.getElementById("addPassword").value};

    var url = "/accounts/create/" + obj.name + "/" + obj.email + "/" + obj.password;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                status.innerHTML = res.text;
            }
            else{
                console.log(res);
                status.innerHTML = res.text;

            }

    });

    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------    
}

function login() {
    var status = document.getElementById('collapse-collapsed');
    var obj = {
        email   : document.getElementById("inputEmail").value,
        password: document.getElementById("inputPassword").value};
    var url = "/accounts/login/" + obj.email + "/" +obj.password;


    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                status.innerHTML = res.text;
            }
            else{
                console.log(res);
                status.innerHTML = res.text;

            }
        });
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
}

function deposit() {
    var status = document.getElementById('collapse-collapsed');
    var obj = {
        email   : document.getElementById("depEmail").value,
        amount: document.getElementById("depAmount").value};
    var url = "/accounts/deposit/" + obj.email + "/" + obj.amount;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                status.innerHTML = res.text;
            }
            else{
                console.log(res);
                status.innerHTML = res.text;

            }
        });
    // -------------------------------------
    //  YOUR CODE
    //  Deposit funds user funds on server
    // -------------------------------------
}

function withdraw() {
    var status = document.getElementById('collapse-collapsed');
    var obj = {
        email   : document.getElementById("withEmail").value,
        amount: document.getElementById("withAmount").value};
    var url = "/accounts/withdraw/" + obj.email + "/" + obj.amount;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                status.innerHTML = res.text;
            }
            else{
                console.log(res);
                status.innerHTML = res.text;

            }
        });
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
}

function transactions() {
    var status = document.getElementById('collapse-collapsed');
    var obj = {email : document.getElementById("transEmail").value}
    var url = "/accounts/transactions/" + obj.email;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                status.innerHTML = res.text;
            }
            else{
                console.log(res);
                status.innerHTML = res.text;

            }
        });
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
}

function balance() {
    var status = document.getElementById('collapse-collapsed');
    var obj = {email : document.getElementById("balEmail").value}
    var url = "/accounts/get/" + obj.email;

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                status.innerHTML = res.text;
            }
            else{
                console.log(res);
                status.innerHTML = res.text;

            }
        });
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance
    // -------------------------------------
}

function allData() {
    var status = document.getElementById('data-out');

    var url = "/accounts/all/";

    superagent
        .get(url)
        .end(function(err, res){
            if(err){
                console.log(err);
                status.innerHTML = res.text;
            }
            else{
                console.log(res);
                status.innerHTML = res.text;

            }
        });
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------
}

