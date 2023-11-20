/**
 * @param {number} initialValue
 * @return {Function}
 */

function makeCounter(initialValue = 0) {
    let counter = initialValue;
  
    return () => counter++;
  }
  
  const counter = makeCounter();
  counter(); // 0
  counter(); // 1
  counter(); // 2
  
  
  const counter2 = makeCounter(5);
  counter2(); // 5
  counter2(); // 6
  counter2(); // 7
  