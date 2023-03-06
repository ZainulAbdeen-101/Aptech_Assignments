let email = prompt("plz enter your email");

if (email === "abc@gmail.com") {
  let pass = Number(prompt("plz enter your password"));

  if (typeof pass == "number") {
    let entry = true;
    ;
    if (entry == true) {
      let NUM = Math.floor(Math.random() * 4 + 100);
      alert(NUM);

      let match = Number(prompt("Enter the number"));

      if (match === NUM) {
        console.log("Sign In successful");
      } else {
        alert("enter the correct number!");
      }
    }
  }
} else {
  alert("enter correct email");
}
