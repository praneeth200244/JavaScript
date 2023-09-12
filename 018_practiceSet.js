// Problem-1
const canDrive = ((age) => {
    return age >= 18 ? false : true;
  })
  let runAgain = true;
  
  do {
    let n = Number.parseInt(prompt("Enter your age: ","18"));
    if (n < 0) {
      console.error("Invalid age....!");
      break;
    }
    if (canDrive(n)) {
      alert("You cannot drive a vehicle")
    } else {
      alert("You can drive vehicle if you have the driving liscense")
    }
    runAgain = confirm("Do you want to check again??","No")
  }while(runAgain);
  
  // Problem-2
  let number = Number.parseInt(prompt("Enter any number: ","18"));
  if (number > 4) {
    location.href = "https://www.google.com"
  } else {
    alert("You stay in the same page....")
  }
  
  // Problem-3
  let color = prompt("Enter the color: ","white");
  document.body.style.background = color
  
  