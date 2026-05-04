import nums from "../data.js"

const largeData = nums
/**
 * @param {number[]} nums
 * @return {number[]}
 * Given an integer array nums, return an array answer
 * such that answer[i] is equal to the product of all
 * the elements of nums except nums[i]. The product of
 * any prefix or suffix of nums is guaranteed to fit in
 * a 32-bit integer. You must write an algorithm that runs
 * in O(n) time and without using the division operation.
*/

// Attempt one: Runs in O(n^2)
var productExceptSelf = function (nums) {
    // Input: Array of Integers
    // 1. Initialize a new array to contain the product of input array elements
    const productArray = [];


    // 2. Iterate through the input array
    for (let i = 0; i < nums.length; i++) {

        let product = 1;

        for (let j = 0; j < nums.length; j++) {
            if (i === j && j === nums.length - 1) {
                // Nums at index i is the same as Nums at index j. This number should not be included in the multiplication

                console.log(`\n\tEnding iteration`)

                break;
            }
            if (i === j) {
                // Nums at index i is the same as Nums at index j. This number should not be included in the multiplication

                console.log(`\tSkipping multiplication: ${product.toLocaleString("en-US")} * ${nums[j]}`)
                j++
            }
            //    1. Multiply all elements in the array, except for the current index at i
            console.log(`\tMultiplying. ${product.toLocaleString("en-US")} * ${nums[j]}`)

            product *= nums[j]

            console.log(`\tResult. ${product.toLocaleString("en-US")}`)
        }

        //    2. Store the product of the multiplication of array elements minus current index at in empty array
        productArray.push(product.toLocaleString("en-US"))

        console.log(`\tPushing ${product.toLocaleString("en-US")}`)

        let currentAdditions = " "
        for(let i = 0; i < productArray.length; i++) {
            if(i === productArray.length - 1) {
                currentAdditions += `\n\t${i}: ${productArray[i]}\n`
                break;
            }
            currentAdditions += `\n\t${i}: ${productArray[i]}`
        }
        console.log("\nCurrent Product Array Additions: ", currentAdditions)
    }
    // 3. When iteration is complete, return the array of product integers. 

    return productArray
    // Output: Array of Integers
};


var optimizedProductExceptSelf = function (nums) {
    const n = nums.length
    const output = new Array(n).fill(1)

    let prefix = 1;
    for (let i = 0; i < n; i++) {
        output[i] = prefix;
        prefix *= nums[i];
    }

    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        output[i] *= suffix;
        suffix *= nums[i]
    }

    return output
}

console.log(optimizedProductExceptSelf(largeData))