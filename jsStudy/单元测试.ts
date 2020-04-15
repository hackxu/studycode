import quickSort from "./quickSort"
import assert from 'assert';
describe("#quickSort.ts", () => {
  describe("#quickSort()", () => {
    it('quickSort() should return []', () => {
      assert.strictEqual(quickSort([2, 3, 5, 7, 1, 3, 4]), [1, 2, 3, 3, 4, 5, 7])
    })
  })
})      

