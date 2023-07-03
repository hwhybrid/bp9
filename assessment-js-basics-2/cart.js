///////////////////////////////////////////////
///////////////////CART.JS/////////////////////
///////////////////////////////////////////////
/*
    In this file, you'll be writing code to
    calculate order totals. You'll also be 
    creating customer objects.  
*/

//////////////////PROBLEM 1////////////////////
/*  
    Below is a cart array that has food objects
    inside. 

    Write a callback below that uses the reduce
    array method to calculate the sum of all
    the food. 
*/

const cart = [
    {
        name: "pizza",
        price: 9.99,
    },
    {
        name: "pasta",
        price: 8.99,
    },
    {
        name: "salad",
        price: 7.99,
    },
];

//CODE HERE

const summedPrice = cart.reduce(
    (accumulator, food) => accumulator + food.price,
    0
);

//////////////////PROBLEM 2////////////////////
/*  
    Write a function called `calcFinalPrice` that
    can take in `cartTotal`,`couponValue`,
    and `tax` arguments. 

    Inside the function, calculate the tax 
    on the cartTotal and add it in. Subtract
    the value of the coupon. Return the final
    number. 

    Note: the numbers passed in for `tax` will be
    decimals, for example: .06 for a 6% tax.
*/

//CODE HERE

const calcFinalPrice = (cartTotal, couponValue, tax) => {
    const taxTotal = cartTotal * tax;
    const finalPrice = cartTotal + taxTotal - couponValue;
    return finalPrice;
};

//////////////////PROBLEM 3////////////////////
/*  
    In this problem, you'll create a model for 
    a customer object as well as an example
    object. 

    Plan out a customer object for the cart page.
    Think about the information that a 
    restaurant would need about its customers.

    In the TEXT ANSWER area below, describe the
    properties that your customer object will have
    and why you chose those properties.

    Explain what data types each property should be
    and why you chose those data types. 

    Your object should have at least 4 properties. 
*/

/*
    TEXT ANSWER HERE
firstName: This is the customer's first name of data type String. 

lastName: This is the customer's last name of data type String. 

email: This represents the customer's email address. 
It can be a string data type to store the email in text format.

phone: This is the customer's phone number and is set to a String type.
I would refactor this to a number type and use regex to ensure it is correctly formatted.

city: This property represents the customer's city and takes the String datatype.
*/

/*
    Now, create a customer object following your own
    guidelines.
*/

//CODE HERE

const customer = {
    firstName: "Carla",
    lastName: "Carlson",
    email: "c.carlsone@email.com",
    phone: "123-456-7890",
    city: "New York",
};
