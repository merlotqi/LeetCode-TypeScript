/*
 * @lc app=leetcode id=17 lang=typescript
 *
 * [17] Letter Combinations of a Phone Number
 */

// @lc code=start
function letterCombinations(digits: string): string[] {
    if(digits.length == 0) return [];

    const phoneMap: { [key: string]: string } = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    let result: string[] = [''];

    for(let digit of digits) {
        const numResult: string[] = [];
        const letters = phoneMap[digit];
        for(const combination of result)
        {
            for(const letter of letters)
            {
                numResult.push(combination + letter);
            }
        }

        result = numResult;
    }
    return result;
    
};
// @lc code=end

