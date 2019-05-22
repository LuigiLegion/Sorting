

describe('Bubble Sort', function () {
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough(); // replace existing `tootsiepop['lick']` method
  });


  it('handles an empty array', function () {
    expect(bubbleSort([])).toEqual([]);
  });

  it('returns original array if it is in order', function () {
    let arr = [1, 2, 3, 4, 5]
    expect(String(bubbleSort(arr))).toEqual(String(arr))
    expect(window.swap.calls.count()).toEqual(0);
  })

  it('returns sorted array if original array is unsorted', function () {
    let arr = [2, 3, 4, 5, 1]
    expect(String(bubbleSort(arr))).toEqual(String([1, 2, 3, 4, 5]))
    expect(window.swap.calls.count()).toEqual(4);


  })
});
