var sum_to_n_a = function(n) {
    // your code here
    var num = 1;
    var output = 0;
    while (num != n+1) {
        output+=num;
        num++;
    }
    return output;
};

var sum_to_n_b = function(n) {
    // your code here
    var output = 0;
    for (let i = 1; i <= n; i++) {
        output+=i;
    }
    return output;
};

var sum_to_n_c = function(n) {
    // your code here
    var output = n;
    while (n != 0) {
        n = n-1;
        output+=n;
    }
    return output;
};

console.log(sum_to_n_a(5));
console.log(sum_to_n_b(5));
console.log(sum_to_n_c(5));