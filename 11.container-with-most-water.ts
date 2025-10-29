/*
 * @lc app=leetcode id=11 lang=typescript
 *
 * [11] Container With Most Water
 */

// @lc code=start
function maxArea(height: number[]): number {
    let left = 0;
    let right = height.length - 1;
    let maxArea = 0;

    while (left < right) {
        const leftHeight = height[left];
        const rightHeight = height[right];
        const area = Math.min(leftHeight, rightHeight) * (right - left);

        maxArea = Math.max(maxArea, area);

        if (leftHeight < rightHeight) {
            left++;
        }
        else {
            right--;
        }
    }
    return maxArea;
};
// @lc code=end

