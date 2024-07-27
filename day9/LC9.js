// Q.2620 Counter
var createCounter = function(n) {
    return function() {
        return n++;
    };
};

//Q. 2667 Hello World Fn
var createHelloWorld = function() {
    
    return function(...args) {
        return "Hello world";
    }
};
