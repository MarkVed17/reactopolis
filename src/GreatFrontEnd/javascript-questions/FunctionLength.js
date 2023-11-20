/**
 * @param {Function} fn
 * @return {number}
 */

function functionLength(fn) {
    return fn.length;
  }
  
  function foo() {}
  function bar(a) {}
  function baz(a, b) {}
  
  functionLength(foo); // 0
  functionLength(bar); // 1
  functionLength(baz); // 2