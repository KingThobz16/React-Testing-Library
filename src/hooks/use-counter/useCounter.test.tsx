import { renderHook} from "@testing-library/react";
import { useCounter } from "./useCounter";
import { act } from "@testing-library/react";

describe('useCounter', () => { 
    test('initial count of 0 is rendered', () => { 
        // render hook will wrap the hook in a function componenet
        // invoke the hook and return an object from which we can destructure a property
        // call results
        const {result} = renderHook(useCounter);
        // Result.current will contain all the return values of the custom hook
        // and we check if the count return result is 0
        expect(result.current.count).toBe(0);
     })

    //  To insure the hook accepts and renders the same initial count
    test('should accept and render the same initial count', () => { 
        // pass in a prop to use counter with second option
        const {result} = renderHook(useCounter, {
            initialProps: {
                initialCount: 10
            }
        })
        expect(result.current.count).toBe(10)
     })

    //  To insure the hook increment function works
    test('should increment the count', () => { 
        // pass in a prop to use counter with second option
        const {result} = renderHook(useCounter)
        // we call increment using act - https://reactjs.org/docs/test-utils.html#act
        // insures state changes have been applied to the dom before running essertions/expect code
        act(() => result.current.increment());
        // we check if count incremented from 0 to 1
        expect(result.current.count).toBe(1)
     })

    //  To insure the hook decrement function works
    test('should decrement the count', () => { 
        // pass in a prop to use counter with second option
        const {result} = renderHook(useCounter)
        // we call decrement using act - https://reactjs.org/docs/test-utils.html#act
        // insures state changes have been applied to the dom before running essertions/expect code
        act(() => result.current.decrement());
        // we check if count decremented from 0 to 1
        expect(result.current.count).toBe(-1)
     })


 })