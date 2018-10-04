var ui = {};

ui.navigation = `

<nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
    <a class="navbar-brand" href="#">RadBank</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExampleDefault" aria-controls="navbarsExampleDefault" aria-label="Toggle Navigation">
        <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarsExampleDefault">
        <ol class="navbar-nav mr-auto">
            <li class="nav-item active">
                <a class="nav-link" href="#" onclick="defaultModule()">Home</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="loadCreateAccount()">Create Account</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="loadLogin()">Login</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="loadDeposit()">Deposit</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="loadWithdraw()">Withdraw</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="loadTransactions()">Transactions</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="loadBalance()">Show Balance</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#" onclick="loadAllData()">Show all data</a>
            </li>
        </ol>
    </div>
</nav>
    `;

ui.createAccount = `
<div class="card text-white bg-primary mb-3" style="max-width: 18rem;">
  <div class="card-header">Create Account</div>
  <div class="card-body">
    <input type="input" id="addUserName" placeholder="Name"><br><br>
    <input type="input" id="addEmail" placeholder="E-Mail Address"><br><br>
    <input type="password" id="addPassword" placeholder="Password"><br><br>
    <input type="password" id="checkPassword" placeholder="Confirm Password"><br><br>
    <button type="button" class="btn btn-info" onclick="addAccount()">Create</button>
  </div>
</div>
    <!-- ------------- YOUR CODE: Create Account UI ------------- --> 
`;

ui.login = `
<div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Secondary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    <!-- ------------- YOUR CODE: Login UI ------------- --> 
`;

ui.deposit = `
<div class="card text-white bg-success mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Secondary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    <!-- ------------- YOUR CODE: Deposit UI ------------- --> 
`;

ui.withdraw = `
<div class="card text-white bg-danger mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Secondary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    <!-- ------------- YOUR CODE: Withdraw UI ------------- --> 
`;

ui.transactions = `
<div class="card text-white bg-warning mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Secondary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    <!-- ------------- YOUR CODE: Transactions UI ------------- --> 
`;

ui.balance = `
<div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Secondary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    <!-- ------------- YOUR CODE: Balance UI ------------- --> 
`;

ui.default = `
<div class="card bg-light mb-3" style="max-width: 18rem;">
  <div class="card-header">RadBank Landing Module</div>
  <div class="card-body">
    <h5 class="card-title">Welcome to the Bank</h5>
    <p class="card-text">You can move around using the navigation menu.</p>
  </div>
</div>
    <!-- ------------- YOUR CODE: Default UI ------------- --> 
`;

ui.allData = `
<div class="card text-white bg-dark mb-3" style="max-width: 18rem;">
  <div class="card-header">Header</div>
  <div class="card-body">
    <h5 class="card-title">Secondary card title</h5>
    <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    <!-- ------------- YOUR CODE: All Data UI ------------- --> 
`;

var target     = document.getElementById('target');
var navigation = document.getElementById('navigation');
navigation.innerHTML += ui.navigation;



var loadCreateAccount = function(){
    target.innerHTML = ui.createAccount;
};

var loadLogin = function(){
    target.innerHTML = ui.login;
};

var loadDeposit = function(){
    target.innerHTML = ui.deposit;
};

var loadWithdraw = function(){
    target.innerHTML = ui.withdraw;
};

var loadTransactions = function(){
    target.innerHTML = ui.transactions;
};

var loadBalance = function(){
    target.innerHTML = ui.balance;
};

var defaultModule = function(){
    target.innerHTML = ui.default;
};

var loadAllData = function(){
    target.innerHTML = ui.allData;
};

defaultModule();
