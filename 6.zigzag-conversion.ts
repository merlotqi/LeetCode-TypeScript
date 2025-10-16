/*
 * @lc app=leetcode id=6 lang=typescript
 *
 * [6] Zigzag Conversion
 */

// @lc code=start
function convert(s: string, numRows: number): string {
    if (numRows === 1 || s.length <= numRows) return s;

    const rows = new Array<string>(numRows).fill("");
    let curRow = 0;
    let goingDown = false;

    for (const c of s) {
        rows[curRow] += c;
        if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1;
    }

    return rows.join("");
};
// @lc code=end

