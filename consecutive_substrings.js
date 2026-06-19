function consecutiveSubstrings(string) {
  // type your code here
  const result = []

  // If string is empty, return[]
  if(string.length === 0) return result

  // Loop through each starting point (anchor)
  for(let i = 0; i < string.length; i++) {

    // loop through each possible ending points
    for(let j = i + 1; j <= string.length; j++) {
      result.push(string.slice(i, j))
    }
  }
  return result
}


if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: ['a', 'ab', 'abc', 'b', 'bc', 'c']");
  console.log("=>", consecutiveSubstrings('abc'));

  console.log("");

  console.log("Expecting: ['a']");
  console.log("=>", consecutiveSubstrings('a'));
}

module.exports = consecutiveSubstrings;


