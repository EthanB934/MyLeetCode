/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    const singleArray = []

    for(let i = 0; i < nums1.length; i++) {
        singleArray.push(nums1[i])
    }
    for(let i = 0; i < nums2.length; i++) {
        singleArray.push(nums2[i])
    }

    const sortedArray = singleArray.sort((a, b) => a - b)

    if(sortedArray.length % 2 === 1) {
        const medianIndex = Math.floor(sortedArray.length / 2)
        const median = sortedArray[medianIndex]
        return median
    }
    if(sortedArray.length % 2 === 0) {
        const medianIndex = sortedArray.length / 2
        const medianValue1 = sortedArray[medianIndex]
        const medianValue2 = sortedArray[medianIndex - 1]
        const median = (medianValue1 + medianValue2) / 2
        return median 
    }
};

console.log(findMedianSortedArrays([53, 53, 53], [0, 0, -1]))
/*
The arrays are already sorted from least to greatest. 
What I need to do is to determine the median of both arrays
This will include joining both arrays together for one array
Then, retrieving the middlemost value.
If the length of the array is odd, the middlemost value ought to be the median
In the case that the length of an array is even, I need to be able to retrieve the
two middlemost values and determine the median through dividing those two numbers
*/