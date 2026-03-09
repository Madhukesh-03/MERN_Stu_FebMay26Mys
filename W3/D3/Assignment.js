// Assignment 1
function tagPassword(password) {
    if (typeof password !== "string") {
        return "INVALID";
    }

    let hasLetter = false;
    let hasNumber = false;

    for (let i = 0; i < password.length; i++) {
        let ch = password[i];

        if ((ch >= 'A' && ch <= 'Z') || (ch >= 'a' && ch <= 'z')) {
            hasLetter = true;
        }
        if (ch >= '0' && ch <= '9') {
            hasNumber = true;
        }
    }
    if (password.length < 8) {
        return "WEAK";
    }

    if (password.length >= 12 && hasLetter && hasNumber) {
        return "STRONG";
    }

    if (password.length >= 8 && hasLetter && hasNumber) {
        return "MEDIUM";
    }

    return "WEAK";
}


console.log(tagPassword("abc"));           // WEAK
console.log(tagPassword("abc12345"));      // MEDIUM
console.log(tagPassword("abc123456789"));  // STRONG
console.log(tagPassword(12345678));        // INVALID


//Assignment 2
function invoice(gstRate = 0.18, ...items) {
  let subtotal = 0;

  for (let i = 0; i < items.length; i++) {
    let item = items[i];

    if (item.name === "STOP") {
      break;
    }
}
}

 //Assignment 4
// Function Expression
const getRoute = function(role, isLoggedIn) {
    
    //  Check if user is logged in
    if (!isLoggedIn) {
        return "/login";
    } 
    else {
        //  Using switch for role routing
        switch(role) {
            case "admin":
                return "/admin";
            
            case "student":
                return "/student";
            
            case "college":
                return "/college";
            
            case "proctor":
                return "/proctor";
            
            default:
                return "/denied";
        }
    }
};

let role = "student";
let isLoggedIn = true;
let result = getRoute(role, isLoggedIn);

console.log("Role:", role);
console.log("Is Logged In:", isLoggedIn);
console.log("Route:", result);

//Assignment 5

// Creating wallet object
const wallet = {
    owner: "Ashwini",
    balance: 300,
    lastTransaction: null,

    deposit: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid deposit amount");
            return;
        }

        this.balance += amount;

        this.lastTransaction = {
            type: "DEPOSIT",
            amount: amount,
            balanceAfter: this.balance
        };
    },

    withdraw: function(amount) {
        if (typeof amount !== "number" || amount <= 0) {
            console.log("Invalid withdraw amount");
            return;
        }

        if (amount > this.balance) {
            console.log("Insufficient balance");
            return;
        }

        this.balance -= amount;

        this.lastTransaction = {
            type: "WITHDRAW",
            amount: amount,
            balanceAfter: this.balance
        };
    }
};

wallet.deposit(200);
wallet.withdraw(150);

console.log(wallet);