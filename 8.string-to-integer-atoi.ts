/*
 * @lc app=leetcode id=8 lang=typescript
 *
 * [8] String to Integer (atoi)
 */

// @lc code=start
function myAtoi(s: string): number {
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    let index = 0;
    let sign = 1;
    const n = s.length;
    let result = 0;

    while (index < n && s[index] === ' ') {
        index++;
    }

    if(index < n && (s[index] === '+' || s[index] === '-')) {
        sign = s[index] === '-' ? -1 : 1;
        index++;
    }

    if(index < n && isDigit(s[index])) {
        const digit = parseInt(s[index]);

        if(result > Math.floor(INT_MAX - digit) / 10) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        result = result * 10 + digit;
        index++;
    }

    return result * sign;
};


function isDigit(char : string) : boolean {
    return char >= '0' && char <= '9';
}

// @lc code=end

