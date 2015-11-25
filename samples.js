"use strict";

var assert = require('assertsharp').default;

describe("Enumerables", () => {
  let arr = [1, 2, 3];

  it("Aggregate", () => {
    let actual = arr.reduce((a, b) => a + b);
    assert.AreEqual(6, actual);
  });

  it("All", () => {
    let actual = arr.every(a => a < 10000);
    assert.IsTrue(actual);
  });

  it("Any", () => {
    let actual = arr.some(a => a > 1);
    assert.IsTrue(actual);
  });

  it("Concat", () => {
    let actual = arr.concat([4, 5, 6]);
    assert.AreSequenceEqual([1, 2, 3, 4, 5, 6], actual);
  });

  it("ForEach", () => {
    let actual = 1;
    arr.forEach(a => actual *= a);
    assert.AreEqual(6, actual);
  });

  it("IndexOf", () => {
    let actual = arr.indexOf(2)
    assert.AreEqual(1, actual);
  });

  it("LastIndexOf", () => {
    let actual = [1, 2, 1].lastIndexOf(1)
    assert.AreEqual(2, actual);
  });

  it("OrderBy", () => {
    let actual = [1, 3, 2];
    actual.sort((a, b) => a - b);
    assert.AreSequenceEqual([1, 2, 3], actual);
  });

  it("OrderByDescending", () => {
    let actual = [1, 2, 3];
    actual.sort((a, b) => b - a);
    assert.AreSequenceEqual([3, 2, 1], actual);
  });

  it("Reverse", () => {
    let actual = [1, 2, 3];
    actual.reverse();
    assert.AreSequenceEqual([3, 2, 1], actual);
  });

  it("String.Join", () => {
    let actual = arr.join('-');
    assert.AreSequenceEqual('1-2-3', actual);
  });

  it("Select", () => {
    let actual = arr.map((a, i) => {
      return a * i;
    });
    assert.AreSequenceEqual([0, 2, 6], actual);
  });

  it("Skip", () => {
    let actual = arr.slice(1);
    assert.AreSequenceEqual([2, 3], actual);
  });

  it("Take", () => {
    let actual = arr.slice(0, 2);
    assert.AreSequenceEqual([1, 2], actual);
  });

  it("Where", () => {
    let actual = arr.filter(a => a > 1);
    assert.AreSequenceEqual([2, 3], actual);
  });
});