
const inputNumbers = [1, 4, 1, 5, 8, 1, 3, 5, 1, 4, 1, 3, 7, 2];

//This code counts the frequency of each number in an array
const frequency = countNumberFrequency(inputNumbers);

// Output the frequency map
console.log("Input Numbers:", ...inputNumbers);
console.log("==== Output =====");

console.log("Frequency of each number:");
console.log(...frequency.frequencies); 
console.log("Numbers:");
console.log(...frequency.numbers); 

//Frequency graph output
printStarGraph(frequency.frequencies, frequency.numbers);


//this function counts the frequency of each number in an array
//and ensures that all numbers in the range from the minimum to the maximum
//are represented in the output, even if their frequency is zero.

function countNumberFrequency(numbers: number[]): {  frequencies: number[] ,numbers: number[] } {
    
    const frequencyMap: { [key: number]: number } = {};

    for (const number of numbers) {

        //Step 1: Check if the number already exists in the frequency map
        //If it does, increment its count; otherwise, initialize it to 1.
        if (frequencyMap[number]) {
            frequencyMap[number]++;
        } else {
            frequencyMap[number] = 1;
        }

    // Step 2: Ensure full range (fill missing numbers with 0)
    // Find the minimum and maximum numbers in the array
        const min = Math.min(...numbers);
        const max = Math.max(...numbers);

    // Fill in the frequency map for all numbers in the range
    for (let i = min; i <= max; i++) {
        if (!frequencyMap[i]) {
            frequencyMap[i] = 0;
        }
    }
}
    //console.log("Frequency Map:", frequencyMap);

    // Step 3: Convert the frequency map to arrays for output
    // Create two arrays: one for numbers and one for their frequencies
    const numberArray: number[] = [];
    const frequencyArray: number[] = [];

    // Populate the arrays with the keys and values from the frequency map
    // This ensures that the order of numbers corresponds to their frequencies.
    // The numbers will be in ascending order because we filled the map from min to max.
    // The frequency array will have the same order as the number array.

    for (const number in frequencyMap) {
        numberArray.push(Number(number));
        frequencyArray.push(frequencyMap[number]);
    }
    
    return { frequencies: frequencyArray ,numbers: numberArray };
}

//Instead of printing the number of appearances, draw a graph with stars.
//*                            
//*                         
//*                         
//*           *     *     *    
//*     *     *     *     *           *     *
//1     2     3     4     5     6     7     8

// This function prints a star graph based on the frequencies of numbers
// It creates a vertical bar graph where each star represents the frequency of a number.

function printStarGraph(frequencies: number[], numbers: number[]) {

    //Find the maximum frequency to determine the height of the graph
    const max = Math.max(...frequencies);

    console.log("==== Graph of Frequencies: ====");

    //Create a horizontal line of numbers at the bottom
    for (let row = max; row > 0; row--) {
        let line = "";

        for (let freq of frequencies) {
            // If the frequency is greater than or equal to the current row, print a star
            // Otherwise, print a space.
            line += freq >= row ? "*\t" : " \t";
        }
        // Print the line for the current row
        console.log(line.trim());
    }
    // Print the numbers at the bottom
    console.log(numbers.join("\t"));
}

// Export the functions for use in other modules or tests
export {countNumberFrequency };