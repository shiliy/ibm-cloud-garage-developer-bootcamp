const makeStack = () => {
  let queue = 0;

  const isEmpty = () => queue === 0;
  const size = () => queue;
  const push = () => {
    if (queue === 5) throw new Error('the maximum size of the stack is 5');
    queue++;
  }
  const pop = () => queue--;
  return {
    isEmpty,
    size,
    push,
    pop
  };
};

let stack;

beforeEach(() => {
  stack = makeStack();
});

describe.only('the stack spec', () => {

  it('starts empty', () => {
    stack.isEmpty().should.be.true();
  });

  it('starts with stack size 0', () => {
    stack.size().should.equal(0);
  });

  it('is not be empty when pushed', () => {
    stack.push();
    stack.isEmpty().should.be.false();
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
    stack.push();
    stack.pop();
    stack.size().should.equal(0);
  });

  // as a team, the decision to set the limit to 5
  it('overflows', () => {
    stack.push();
    stack.push();
    stack.push();
    stack.push();
    stack.push();
    (() => {
      stack.push();
    }).should.throw('the maximum size of the stack is 5');




  });

  it('under-flows');
  it('pops the same one pushed');
  it('pops the same two pushed');
  it('accepts only positive capacity');
});
