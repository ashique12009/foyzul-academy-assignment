// Question:
// 1. Calculate total orders amount: 2577
// 2. Calculate total paid amount: 2527
// 3. Calculate total due amount: 50
// 4. Calculate total orders count: 3
// 5. Calculate averge order amount: 859
// 6. Calculate item wise total sale Rice: 50, Shirt: 2500, Bread: 15, Coffee: 12

const order1 = {
    customer: {
        name: 'Ashique',
        phone: '01670000000'
    },
    cart: [
        {
            product: 'Rice',
            quantity: 10,
            unitPrice: 5,
            totalPrice: 50
        },
        {
            product: 'Shirt',
            quantity: 2,
            unitPrice: 500,
            totalPrice: 1000
        }
    ],
    total: 1050,
    paid: 1000,
    due: 50
};

const order2 = {
    customer: {
        name: 'Alice',
        phone: '020000000'
    },
    cart: [
        {
            product: 'Bread',
            quantity: 5,
            unitPrice: 3,
            totalPrice: 15
        },
        {
            product: 'Shirt',
            quantity: 3,
            unitPrice: 500,
            totalPrice: 1500
        }
    ],
    total: 1515,
    paid: 1515,
    due: 0
};

const order3 = {
    customer: {
        name: 'McGill',
        phone: '030000000'
    },
    cart: [
        {
            product: 'Coffee',
            quantity: 6,
            unitPrice: 2,
            totalPrice: 12
        }
    ],
    total: 12,
    paid: 12,
    due: 0
};

const orders = [order1, order2, order3];

const orderTotal = orders.reduce((accumulator, currentValue, currentIndex, sourceArray) => {
    return accumulator + currentValue.total;
}, 0);

// Orders total amount
console.log('Orders Total Amount', orderTotal); // 2577

// Orders paid amount
const orderTotalPaid = orders.reduce((accumulator, currentValue, currentIndex, sourceArray) => {
    return accumulator + currentValue.paid;
}, 0);

console.log('Orders Total Paid', orderTotalPaid); // 2527

// Orders due amount
const orderTotalDue = orders.reduce((accumulator, currentValue, currentIndex, sourceArray) => {
    return accumulator + currentValue.due;
}, 0);

console.log('Orders Total Paid', orderTotalDue); // 50

// Total order(s)
console.log('Total order(s)', orders.length);

// Average order amount
const averageOrderAmount = orders.reduce((accumulator, currentValue, currentIndex, sourceArray) => {
    return accumulator + currentValue.total;
}, 0);

console.log('Average order amount', averageOrderAmount / orders.length); // 859

// Calculation of item wise total
let itemnWiseTotal = '';
let cartItemObjectCollector = [];

orders.map((order) => {
    order.cart.map((cartObj) => {
        cartItemObjectCollector.push(cartObj); 
    });
});

let itemnWiseTotalArray = cartItemObjectCollector.reduce(function(accumulator, cur) {
    let x = cur.product,
        found = accumulator.find(function (elem) {
            return elem.product == x;
        });
    if (found) 
        found.totalPrice += cur.totalPrice;
    else 
        accumulator.push(cur);
    return accumulator;
}, []);

itemnWiseTotalArray.map((item) => {
    itemnWiseTotal += item.product + ': ' + item.totalPrice + ' ';
});

console.log('Item wise total', itemnWiseTotal);

// Question:
// 1. Calculate total orders amount: 2577
// 2. Calculate total paid amount: 2527
// 3. Calculate total due amount: 50
// 4. Calculate total orders count: 3
// 5. Calculate averge order amount: 859
// 6. Calculate item wise total sale Rice: 50, Shirt: 2500, Bread: 15, Coffee: 12