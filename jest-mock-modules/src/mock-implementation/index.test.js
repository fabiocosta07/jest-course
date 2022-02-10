jest.mock('./index')
import foo from './index'

const mockFn = jest.fn(() => 'default')


describe('test mock implementation', () =>{

    beforeEach(() => {        
        jest.clearAllMocks()
    })

    test('mock implementation', () => {
        foo.mockImplementation(() => 42);
        expect(foo()).toBe(42)
    })
    test('mock implementation once', () => {
        foo.mockImplementationOnce(() => true);
        foo.mockImplementationOnce(() => false);
        expect(foo()).toBe(true)
        expect(foo()).toBe(false)
    })

    test('test mockFn()',() =>{
        mockFn.mockImplementationOnce(() => 'first call')
        mockFn.mockImplementationOnce(() => 'second call')

        expect(mockFn()).toBe('first call')
        expect(mockFn()).toBe('second call')
        expect(mockFn()).toBe('default')
        expect(mockFn()).toBe('default')
    })

    test('test mockReturnThis()', () => {
        const myObj = {
            myMethod: jest.fn().mockReturnThis(),
          };  
          
        const otherObj = {
            myMethod: jest.fn(function () {
                return this;
            }),
        };
        expect(myObj.myMethod()).toBe(myObj)
        expect(otherObj.myMethod()).toBe(otherObj)
    })

    test('mock name', () => {
        const myMockFn = jest
        .fn()
        .mockReturnValue('default')
        .mockImplementation(scalar => 42 + scalar)
        .mockName('add42');        
    })

})
