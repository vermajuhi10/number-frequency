"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var index_1 = require("../src/index");
describe('countNumberFrequency', function () {
    /*it('counts frequencies and fills missing numbers with zero', () => {
        const input = [1, 4, 1, 5, 8, 1, 3, 5, 1, 4, 1, 3, 7, 2];
        const result = countNumberFrequency(input);
        // Numbers should be from 1 to 8
        expect(result.numbers.sort((a, b) => a - b)).toEqual([1,2,3,4,5,6,7,8]);
        // Frequencies should match the input
        // 1:5, 2:1, 3:2, 4:2, 5:2, 6:0, 7:1, 8:1
        expect(result.frequencies).toEqual([
            5, // 1
            1, // 2
            2, // 3
            2, // 4
            2, // 5
            0, // 6
            1, // 7
            1  // 8
        ]);
    });

   /* it('handles empty array', () => {
        const result = countNumberFrequency([]);
        expect(result.numbers).toEqual([]);
        expect(result.frequencies).toEqual([]);
    });

    it('handles array with one number', () => {
        const result = countNumberFrequency([5]);
        expect(result.numbers).toEqual([5]);
        expect(result.frequencies).toEqual([1]);
    });

    it('handles array with consecutive numbers', () => {
        const result = countNumberFrequency([2, 3, 4]);
        expect(result.numbers.sort((a, b) => a - b)).toEqual([2, 3, 4]);
        expect(result.frequencies).toEqual([1, 1, 1]);
    });

    it('handles array with gaps in numbers', () => {
        const result = countNumberFrequency([1, 3, 5]);
        // Should fill 2 and 4 with zero
        expect(result.numbers.sort((a, b) => a - b)).toEqual([1,2,3,4,5]);
        expect(result.frequencies).toEqual([1,0,1,0,1]);
    });

    it('handles repeated numbers only', () => {
        const result = countNumberFrequency([7, 7, 7]);
        expect(result.numbers).toEqual([7]);
        expect(result.frequencies).toEqual([3]);
    });*/
    it('handles unsorted input and returns sorted numbers', function () {
        var result = (0, index_1.countNumberFrequency)([5, 2, 4, 2]);
        expect(result.numbers.sort(function (a, b) { return a - b; })).toEqual([2, 3, 4, 5]);
        expect(result.frequencies).toEqual([2, 0, 1, 1]);
    });
    it('handles large range with missing numbers', function () {
        var result = (0, index_1.countNumberFrequency)([1, 10]);
        expect(result.numbers.sort(function (a, b) { return a - b; })).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
        expect(result.frequencies).toEqual([1, 0, 0, 0, 0, 0, 0, 0, 0, 1]);
    });
});
//# sourceMappingURL=index.test.js.map