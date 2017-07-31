// as a team, the decision to set the limit to 5, stored in LIMIT
const MaxStackSize = 5;

const makeStack = () => {
  let queue = 0;

  const isEmpty = () => queue === 0;
  const size = () => queue;
  const push = () => {
    if (queue === MaxStackSize ) throw new Error('the maximum size of the stack is ' + MaxStackSize);
    queue++;
  };
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

  it('overflows', () => {
    for (let i = 0; i < MaxStackSize; i++) {
      stack.push();
    }

    // (() => {
    //   stack.push();
    // }).should.throw('the maximum size of the stack is ' + LIMIT);

    const overFlowFunction = () => {
      stack.push();
    };
    overFlowFunction.should.throw('the maximum size of the stack is ' + MaxStackSize);
    //  the following doesn't work since it throws error before getting to 'should'
    // stack.push().should.throw('the maximum size of the stack is ' + MaxStackSize);
    //   the following works
    // stack.push.should.throw('the maximum size of the stack is ' + MaxStackSize);

  });

  it('under-flows', () => {

  });

  it('pops the same one pushed');
  it('pops the same two pushed');
  it('accepts only positive capacity');
});
