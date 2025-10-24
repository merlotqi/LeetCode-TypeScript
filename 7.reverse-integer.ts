/*
 * @lc app=leetcode id=7 lang=typescript
 *
 * [7] Reverse Integer
 */

// @lc code=start
function reverse(x: number): number {
    const INT_MAX = Math.pow(2, 31 - 1);
    const INT_MIN = -Math.pow(2, 31);

    let reversed = 0;
    const isNegative = x < 0;
    let num = Math.abs(x);

    while (num > 0) {
        const digit = num % 10;

        if (reversed > Math.floor((INT_MAX - digit) / 10)) {
            return 0;
        }

        reversed = reversed * 10 + digit;
        num = Math.floor(num / 10);
    }

    return isNegative ? -reversed : reversed;

};
// @lc code=end

