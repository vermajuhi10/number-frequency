"use strict";
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.countNumberFrequency = countNumberFrequency;
var inputNumbers = [1, 4, 1, 5, 8, 1, 3, 5, 1, 4, 1, 3, 7, 2];
//This code counts the frequency of each number in an array
var frequency = countNumberFrequency(inputNumbers);
// Output the frequency map
console.log.apply(console, __spreadArray(["Input Numbers:"], inputNumbers, false));
console.log("==== Output =====");
console.log("Frequency of each number:");
console.log.apply(console, frequency.frequencies);
console.log("Numbers:");
console.log.apply(console, frequency.numbers);
//Frequency graph output
printStarGraph(frequency.frequencies, frequency.numbers);
//this function counts the frequency of each number in an array
//and ensures that all numbers in the range from the minimum to the maximum
//are represented in the output, even if their frequency is zero.
function countNumberFrequency(numbers) {
    var frequencyMap = {};
    for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
        var number = numbers_1[_i];
        //Step 1: Check if the number already exists in the frequency map
        //If it does, increment its count; otherwise, initialize it to 1.
        if (frequencyMap[number]) {
            frequencyMap[number]++;
        }
        else {
            frequencyMap[number] = 1;
        }
        // Step 2: Ensure full range (fill missing numbers with 0)
        // Find the minimum and maximum numbers in the array
        var min = Math.min.apply(Math, numbers);
        var max = Math.max.apply(Math, numbers);
        // Fill in the frequency map for all numbers in the range
        for (var i = min; i <= max; i++) {
            if (!frequencyMap[i]) {
                frequencyMap[i] = 0;
            }
        }
    }
    //console.log("Frequency Map:", frequencyMap);
    // Step 3: Convert the frequency map to arrays for output
    // Create two arrays: one for numbers and one for their frequencies
    var numberArray = [];
    var frequencyArray = [];
    // Populate the arrays with the keys and values from the frequency map
    // This ensures that the order of numbers corresponds to their frequencies.
    // The numbers will be in ascending order because we filled the map from min to max.
    // The frequency array will have the same order as the number array.
    for (var number in frequencyMap) {
        numberArray.push(Number(number));
        frequencyArray.push(frequencyMap[number]);
    }
    return { frequencies: frequencyArray, numbers: numberArray };
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
function printStarGraph(frequencies, numbers) {
    //Find the maximum frequency to determine the height of the graph
    var max = Math.max.apply(Math, frequencies);
    console.log("==== Graph of Frequencies: ====");
    //Create a horizontal line of numbers at the bottom
    for (var row = max; row > 0; row--) {
        var line = "";
        for (var _i = 0, frequencies_1 = frequencies; _i < frequencies_1.length; _i++) {
            var freq = frequencies_1[_i];
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
//# sourceMappingURL=index.js.map