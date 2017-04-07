/* jshint esversion: 6 */

var recursiveFactorial = (num) => {

//base case
//if 1 or less than 1, just return 1 and wind back
//negative numbers won't work, I could specify case for 0 and 1, but its longer but I recall the time spent typing this
//have been used to implement it.
if(num<2){
  return 1;
}

//wooo! first time used --variable ... variable-- won't work
var factorial = num*recursiveFactorial(--num);


console.log("fact",factorial);
return factorial;


};

module.exports = recursiveFactorial;