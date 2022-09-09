function checkScope() {
  let i = 'function scope';
  if (true) {
    let i = 'block scope';
    // console.log(i);
  }
  console.log(i);
  return i;
}
checkScope();