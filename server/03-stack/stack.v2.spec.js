const makeStack = (cap = 3) => {
  if (cap <= 0 ) throw new Error('the capacity should be positive');
  let capacity = cap;
  let internalStack = [];
  const size = () => internalStack.length;
  const isEmpty = () => size() === 0;
  const push = (v) => {
    if (size() === capacity) throw new Error('the maximum size of the stack is ' + capacity);
    internalStack.push(v);
  };
  const pop = () => {
    if (size() === 0) throw new Error('can not pop on an empty stack');
    return internalStack.pop();
  };
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

describe.only('the stack', () => {
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
    // assumption: capacity is set to be 3
    stack.push();
    stack.push();
    stack.push();

    const overFlowFunction = () => {
      stack.push();
    };
    overFlowFunction.should.throw('the maximum size of the stack is 3');


  });

  it('under-flows', () => {
    const underFlowFunction = () => {
      stack.pop();
    };
    underFlowFunction.should.throw('can not pop on an empty stack');
  });

  it('pops the same one pushed', () => {
    stack.push('A');
    stack.pop().should.equal('A');
  });

  it('pops the same two pushed', () => {
    stack.push('A');
    stack.push('B');
    stack.pop().should.equal('B');
    stack.pop().should.equal('A');

  });

  it('accepts only positive capacity', () => {

    // const wrongCapacityFunction0 = () => {
    //   stack = makeStack(0);
    // };
    // wrongCapacityFunction0.should.throw('the capacity should be positive');
    //
    // const wrongCapacityFunctionNeg = () => {
    //   stack = makeStack(-1);
    // };

    const wrongCapacityFunction = (cap) => {
      return () => { stack = makeStack(cap); };
    };

    wrongCapacityFunction(0).should.throw('the capacity should be positive');
    // stack = makeStack(1);
  });

});
