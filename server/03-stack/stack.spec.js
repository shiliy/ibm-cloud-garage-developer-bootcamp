let stack = {
  isEmpty: () => true,
  size: 0
};

describe.only('the stack spec', () => {
  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });

  it('starts with stack size 0', () => {
    stack.size.should.equal(0);
  });

  it('is not be empty when pushed');
  it('leaves stack size 1 when pushed');
  it('leaves stack empty when pushed and popped');
  it('leaves stack sie 0 when pushed and popped');
  it('overflows');
  it('under-flows');
  it('pops the same one pushed');
  it('pops the same two pushed');
  it('accepts only positive capacity');
});
