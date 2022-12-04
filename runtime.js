const perf = require('execution-time')();


function doublerAppend(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.push(num);
    }

}


function doublerInsert(nums){

    let new_nums = [];

    for (let i=0; i<nums.length; i++){
        let num = nums[i] * 2;
        new_nums.unshift(num);
    }

}


function getSizedArray(size){
    let array = [];
    for (let i=0; i<size; i++){
        array.push(i);
    }
    return array
}


const tinyArray = getSizedArray(10);
const smallArray = getSizedArray(100);
const mediumArray = getSizedArray(1000);
const largeArray = getSizedArray(10000);
const extraLargeArray = getSizedArray(100000);



// How long does it take to double every number in a given 
// array? 

// Try it with first function
perf.start();                     // Starts timer
doublerAppend(largeArray);
let resultsAppend = perf.stop();  // Stops timer and save time results


// Try it with second function
perf.start();
doublerInsert(largeArray);
let resultsInsert = perf.stop();


console.log('Results for the largeArray');
console.log("insert", resultsInsert.preciseWords);
console.log("append", resultsAppend.preciseWords);


// Notes for Runtime analysis
// extraLargeArray results
// insert: 2.2273804 s
// append: 4.6823 ms

//Results for the tinyArray
// insert 80.9 μs
// append 285.2 μs

//Results for the smallArray
// insert 208.8 μs
// append 233.2 μs

//Results for the mediumArray
// insert 499.8 μs
// append 268.7 μs

//Results for the largeArray
// insert 17.1588 ms
// append 1.1418 ms

// The pattern I see is that from tiny and small array, the insert is faster, but once it gets to the medium, large, and extraLarge arrays, 
// the append is faster. The  extraLargeArray really shows a big difference between the times since append is 4.68 ms and insert is 2.22 seconds!
//Even though at a tinyArray and smallArray were small differences, the bigger the array is when you see the difference between .unshift and .push
// Push is faster because it does not have to check every element in the array. It only adds the element.
// Unshift has to loop through the array and push every element over one and add it in, which is why it is slower. The bigger the array, the longer it takes since it is going through each element (or number in this case).

//