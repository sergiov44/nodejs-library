// Pattern 4

/* exports.add = (a, b) => {
  return a + b
}

exports.substract = (a, b) => {
  return a - b
} */


// Pattern 3 - Recommended

module.exports.add = (a, b) => {
  return a + b
}

module.exports.substract = (a, b) => {
  return a - b
}


// Pattern 2

/* const add = (a, b) => {
  return a + b
}

const substract = (a, b) => {
  return a - b
}

module.exports = {
  add,                // add: add,
  substract,          // substract: substract
} */


// Pattern 1

/* module.exports = (a, b) => {
  return a + b
} */

