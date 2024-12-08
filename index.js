// 1. Declare customerName in the global scope
var customerName = 'bob';

// 2. Define upperCaseCustomerName
function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

// 3. Define setBestCustomer
function setBestCustomer() {
  bestCustomer = 'not bob';
}

// 4. Define overwriteBestCustomer
function overwriteBestCustomer() {
  bestCustomer = 'maybe bob';
}

// 5. Define changeLeastFavoriteCustomer
const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  leastFavoriteCustomer = 'nobody'; // Will throw an error
}

