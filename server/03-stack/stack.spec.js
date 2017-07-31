

const makeStack = () => {
  let queue = 0;
  const MaxStackSize = 5;
  let values = [];

  const isEmpty = () => queue === 0;
  const size = () => queue;
  const push = (v) => {
    if (queue === MaxStackSize ) throw new Error('the maximum size of the stack is ' + MaxStackSize);
    queue++;
    values.push(v) ;
  };
  const pop = () => {
    if (queue === 0 ) throw new Error('Can not pop when the stack is empty');
    queue--;
    return values.pop();
  }
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
    // as a team, the decision to set the limit to 5
    for (let i = 0; i < 5; i++) {
      stack.push();
    }

    // (() => {
    //   stack.push();
    // }).should.throw('the maximum size of the stack is ' + 5);

    const overFlowFunction = () => {
      stack.push();
    };
    overFlowFunction.should.throw('the maximum size of the stack is 5');
    //  the following doesn't work since it throws error before getting to 'should'
    // stack.push().should.throw('the maximum size of the stack is ' + MaxStackSize);
    //   the following works
    // stack.push.should.throw('the maximum size of the stack is ' + MaxStackSize);

  });


  it('under-flows', () => {

    const underFlowFunction = () => {
      stack.pop();
    };
    underFlowFunction.should.throw('Can not pop when the stack is empty');
  });

  it('pops the same one pushed', () => {
    stack.push('A')
    stack.pop().should.equal('A');

  });

  it('pops the same two pushed', () => {
    stack.push('A');
    stack.push('B');
    stack.pop().should.equal('B');
    stack.pop().should.equal('A');
  });

  it('accepts only positive capacity');
});
