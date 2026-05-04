/*
 * Complete the 'countResponseTimeRegressions' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY responseTimes as parameter.
 */

function countResponseTimeRegressions(responseTimes) {
    // Input: An array of integers
    // Requirement 1. First element should always be skipped. 
    //                There is no way to get an average of previous elements on the first iteration
    // Return an Integer, a count of elements that are greater than the average of previous elements   

    // Declare reassignable variable to increment based on meeting function requirements
    let elementsGreaterThanPreviousElementsAverage = 0;

    // Should I recalculate the average of previous elements per iteration
    // Or, should I update a value per iteration resulting in the current average of previous elements?
    // Or, should I keep a total running sum of all previous elements, then find the average per iteration?
    // For performance, the latter option seems more reasonable.

    let sumOfPreviousElements = 0;

    let numberOfPreviousElements = 0;

    // Iterate through the array of integers.
    // If i = 0, early return, but update the sum of previous elements.
    // All other indices
    //      1. What is the current value at index?
    //      2. Calculate the average of previous elements
    //      3. Is the current value at index greater than the calculated average of previous elements?
    //          Yes, increment elementsGreaterThanPreviousElementsAverage variable, add current value to sumOfPreviousElements
    //          No, do not increment counter, only add current value to sumOfPreviousElements
    //      4. When iteration is complete, return integer counter

    for (let i = 0; i < responseTimes.length; i++) {
        if (i === 0) {
            sumOfPreviousElements += responseTimes[i];
            numberOfPreviousElements++            
            console.log(
                `
                ${responseTimes[i]} is the first element given in the array of integers.
                The sum of elements has been updated. New value: ${sumOfPreviousElements}
                `
            )

            i++
        }

        let average = sumOfPreviousElements / numberOfPreviousElements

        if (responseTimes[i] > average) {
            elementsGreaterThanPreviousElementsAverage++
            sumOfPreviousElements += responseTimes[i]
            numberOfPreviousElements++

            console.log(
                `
                ${responseTimes[i]} is greater than ${average}.
                Count of Elements Greater than Previous Elements' Average Updated: ${elementsGreaterThanPreviousElementsAverage}.
                The sum of elements has been updated. New value: ${sumOfPreviousElements}
                Remaining Iterations: ${(responseTimes.length - 1) - i}
                `
            )
        }

        else {
            sumOfPreviousElements += responseTimes[i]
            numberOfPreviousElements++

            console.log(
                `
                ${responseTimes[i]} is not greater than ${average}
                The sum of elements has been updated. New value: ${sumOfPreviousElements}
                Remaining Iterations: ${(responseTimes.length - 1) - i}
                `
            )
        }
    }

    return elementsGreaterThanPreviousElementsAverage
}

const responseTimesArray = [87, 546, 145, 56, 147, 235, 45];

console.log(countResponseTimeRegressions(responseTimesArray))