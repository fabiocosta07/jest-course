import { forEach, funCallSomeFunction } from "./index";


describe("function foreach", () => {
  const mockCallback = jest.fn(x => 42 + x);

  beforeAll(() => { 
    forEach([0, 1], mockCallback);   
  })   

  it("Using a mock function", () => {

    // The mock function is called twice
    expect(mockCallback.mock.calls.length).toBe(2);

    // The first argument of the first call to the function was 0
    expect(mockCallback.mock.calls[0][0]).toBe(0);

    // The first argument of the second call to the function was 1
    expect(mockCallback.mock.calls[1][0]).toBe(1);

    // The return value of the first call to the function was 42
    expect(mockCallback.mock.results[0].value).toBe(42);    
  });
});

describe("function someMockFunction", () => {
  const someMockFunction = jest.fn((x,y) => 'return value');
  beforeAll(() => { 
    funCallSomeFunction('first arg', 'second arg', someMockFunction);
  })   

  it("Using a mock function 2", () => {
    // The function was called exactly once
    expect(someMockFunction.mock.calls.length).toBe(1);

    // The first arg of the first call to the function was 'first arg'
    expect(someMockFunction.mock.calls[0][0]).toBe('first arg');

    // The second arg of the first call to the function was 'second arg'
    expect(someMockFunction.mock.calls[0][1]).toBe('second arg');

    // The return value of the first call to the function was 'return value'
    expect(someMockFunction.mock.results[0].value).toBe('return value');

    // // // The first argument of the last call to the function was 'test'
    // expect(someMockFunction.mock.lastCall[0]).toBe('test');        
  })
});

describe("func contructors", () => {
  const MockContructorFuncTest = jest.fn(function() {
    this.name = "test";
    return{
        name:"test",
        bark:function(){
            return "bla";
        }
    }
  })  
  beforeAll(() => {    
    const mockTest = new MockContructorFuncTest()
    const mockTest2 = new MockContructorFuncTest()

  });  
  it("Using a mock function 3", () =>{
    // This function was instantiated exactly twice
    expect(MockContructorFuncTest.mock.instances.length).toBe(2);

    // // The object returned by the first instantiation of this function
    // // had a `name` property whose value was set to 'test'
    expect(MockContructorFuncTest.mock.instances[0].name).toEqual('test');
  })
});

describe("the mock property", () => {
  const myMock = jest.fn();

  const a = new myMock();
  const b = {};
  const bound = myMock.bind(b);

  beforeAll(() => {    
    bound();    
  });  
  it("test func context (this)", () =>{
    expect(myMock.mock.instances[0]).toBe(a)
    expect(myMock.mock.instances[1]).toBe(b)
  })
});


describe("mock return values", () => {
  const myMock = jest.fn();

  beforeAll(() => {    
    myMock.mockReturnValueOnce(10).mockReturnValueOnce('x').mockReturnValue(true);
    myMock()
    myMock()
    myMock()
    myMock()
    myMock()
  });  
  it("test func context (this)", () => {
    expect(myMock.mock.results[0].value).toBe(10)
    expect(myMock.mock.results[1].value).toBe('x')
    expect(myMock.mock.results[2].value).toBe(true)
    expect(myMock.mock.results[3].value).toBe(true)
    expect(myMock.mock.results[4].value).toBe(true)
  })
});