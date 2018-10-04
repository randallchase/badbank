
function create() {
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
            }
            else{
                console.log(res);
                status.innerHTML = JSON.stringify(res.body);
            }

        });
    // -------------------------------------
    //  YOUR CODE
    //  Create user account on server
    // -------------------------------------    
}

function login() {
    // -------------------------------------
    //  YOUR CODE
    //  Confirm credentials on server
    // -------------------------------------
}

function deposit() {
    // -------------------------------------
    //  YOUR CODE
    //  Deposit funds user funds on server
    // -------------------------------------
}

function withdraw() {
    // -------------------------------------
    //  YOUR CODE
    //  Withdraw funds user funds on server
    // -------------------------------------
}

function transactions() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all user transactions
    // -------------------------------------
}

function balance() {
    // -------------------------------------
    //  YOUR CODE
    //  Get user balance
    // -------------------------------------
}

function allData() {
    // -------------------------------------
    //  YOUR CODE
    //  Get all data
    // -------------------------------------
}

