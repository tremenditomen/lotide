const tail = require('../tail')
const assertEqual = require('../assertEqual')
const assert = require("chai").assert

// const words = ["Yo Yo", "Lighthouse", "Labs"];
// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 2); // original array should still have 3 elements!

describe("tail",()=>{
it ("returns '3' for [1,2,3]", ()=>{
    assert.deepEqual(tail([1,2,3]), [2,3])
})
it ("returns '5' for ['5'] ", ()=>{
    assert.deepEqual(tail([5]), []);
});

});