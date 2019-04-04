describe('merge sort', () => {
  it('has a split function', () => {
    expect(typeof split).toEqual('function');
  });

  it('returns the input if it\'s a one element array', () => {
    expect(split([1])).toEqual([1]);
  })

  it('split function splits arrays in two', () => {
    expect(split([1, 2])).toEqual([[1], [2]]);
  });
  it('handles arrays of odd lengths', () => {
    expect(split([1, 2, 3])).toEqual([[1], [2, 3]]);
  });
});


