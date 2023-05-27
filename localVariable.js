function showMessage() {
    let message = "Hello, I'm JavaScript !"; // local variable
  
    alert( message );
  }
  
  showMessage(); // Hello, I'm JavaScript!
  
  alert( message ); // <-- Error! The variable is local to the function

  ///////////////////////////
  //using a function in another function
  function foo(b) {
    const a = 13;
    return a + b + 12;
  }
  
  function bar(x) {
    const y = 3;
    return foo(x * y);
  }
  
  console.log(bar(7))