const middle = require('../middle')
const assertArraysEqual = require ('../assertArraysEqual')
const { assert } = require('chai')



describe("middle",()=>{
    it("return 2,3 for [1,2,3,4,5]",()=>{
assert.deepEqual(middle([1,2,3,4,]),[2,3])
    });
    it("returns [3] for [1,2,3,4,5]",()=>{
assert.deepEqual(middle([1,2,3,4,5])[3])
    });
    it("returns [] for [1,2]",()=>{
        assert.deepEqual(middle([1,2]),[])
    })
})

// assertArraysEqual(middle([1, 2, 3, 4]),[2,3])
// assertArraysEqual(middle([1, 2, 3, 4, 5]),[3]) 
// assertArraysEqual(middle([1, 2]),[]) 