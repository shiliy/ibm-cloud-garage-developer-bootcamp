// let stack = {
//  isEmpty: () => true,
//  size: 0,
//  push: () => {}
//};
const makeStack = () => {
  let length = 0;
  return {
    isEmpty: () => length === 0,
    push: () => length++,
    pop: () => length--,
    size: () => length
  };
};

let stack;

describe.only('the stack spec', () => {

  beforeEach(() => {
    stack = makeStack();
  });

  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });

  it('starts with stack size 0', () => {
    stack.size().should.equal(0);
  });

  it('is not be empty when pushed', () => {
    stack.push();
    stack.isEmpty().should.false();
  });

  it('leaves stack size 1 when pushed', () => {
    stack.push();
    stack.size().should.equal(1);
  });

  it('leaves stack empty when pushed and popped', () => {
    stack.push();
    stack.pop();
    stack.isEmpty().should.be.true();
  });

  it('leaves stack size 0 when pushed and popped', () => {

  });

  it('overflows');

  it('under-flows');

  it('pops the same one pushed');

  it('pops the same two pushed');

  it('accepts only positive capacity');

});
