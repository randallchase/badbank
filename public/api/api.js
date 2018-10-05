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
    // superagent auth
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

