/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    // Infinity allows for all real numbers, whether negative or positive
    let first = Infinity;
    let second = Infinity;

    for (let i = 0; i < nums.length; i++) {

        // The first value in an array will always be less than infinity
        if (nums[i] <= first) {
            // Reassigns infinity to first element
            first = nums[i];
            // The second value must first be greater than first value before reassignment
        } else if (nums[i] > first && nums[i] <= second) {
            second = nums[i];
        } else {
            // The value is greater than first and second, the triplet has been found
            return true;
        }
    }

    return false;
}

/*
  * The confusing part about this solution is that, at the end of iteration
  * First is equal to 5 instead of 10. It is confusing at first, however, it
  * is easily explained. The variables first and second are used specifically
  * to detect the existence of a possible triplet. The fact that second was 
  * reassigned to twelve points to the fact that, during an earlier point in 
  * the iteration, a number greater than first was found, and at a later index.
  * It thus implies the existence of a number that is smaller than second, earlier
  * though 5 is the last value read to be smaller than second. 
  * Finally, we come to 13 which only must be greater than second. There is no need 
  * to check whether the final index is greater than both second and first, because
  * the second value was already found to be greater than first, therefore only
  * one check really needs to take place: that the current iterating value is greater
  * than the second value.
  * 
  * We ask the question each iteration: is this value lower than first?
  * It is? Then reassign the lower value to the new lower value.
  * So long as a number greater than first exists later in the array
  * We can compare to find that number is greater than first, since it is greater and later
  * we can reassign second, knowing that there was previously a value lower than second. 
  * No matter what, at this point, we know there is a value lower and earlier than second. 
  * Thus, if there comes a value greater than first and greater than second. The triplet is found.
  * The current value that is greater than both, occurs later, and we return true
*/
console.log(increasingTriplet([20, 100, 10, 12, 5, 13]))