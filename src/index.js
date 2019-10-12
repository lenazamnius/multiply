module.exports = function multiply(first, second) {

  return ((first.length <= 9) & (second.length <= 9)) 
          ? (Number(first) * Number(second)).toString()
          : BigInt(BigInt(first) * BigInt(second)).toString();
}

