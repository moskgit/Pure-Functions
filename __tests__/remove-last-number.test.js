const removeLastNumber = require("../pure.js");

describe("removeLastNumber", ()=>{
  test("should return an empty array when passed an empty array.", () => {
    //arrange
    const input = [];
    const expected = [];

    //act
    const actual = removeLastNumber(input);
    
    //assert
    expect(actual).toEqual(expected);
  });

  test("should return an empty array if passed one value in an array.", ()=>{
    //arrange
    const input = [1];
    const expected = [];

    //act
    const actual = removeLastNumber(input);

    //assert
    expect(input).not.toEqual(expected);
  });

  test("should return an array with last element removed.", ()=>{
    //arrange
    const input = [1,2,4];
    const expected = [1,2];

    //act
    const actual = removeLastNumber(input);

    //assert
    expect(input).not.toEqual(expected);
  })
})