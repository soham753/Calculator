function getPast() {
  return document.querySelector("#past_value").innerText;
}
function printPast(num) {
  document.querySelector("#past_value").innerText = num;
}
function getOutput() {
  return document.querySelector("#output_value").innerText
}
function printOutput(num) {
  document.querySelector("#output_value").innerText = num.toLocaleString('en-IN')
}
function stringToNumber(num) {
  return Number(num.replace(/,/g, ""));
}
let number = document.querySelectorAll(".number");
number.forEach(function (l) {
  l.addEventListener("click", function () {
  let a = l.innerText;
    let output = stringToNumber(getOutput());
    console.log(output)
    if(output==0){
      output=''
    }
    if (output != NaN) {
      output = output + a;
      console.log(output)
      printOutput(Number(output))}
    
  });
});
let operator = document.querySelectorAll(".operator");
operator.forEach(function (l) {
  l.addEventListener("click", function () {
    if(l.innerText == "AC"){
      printPast('')
      printOutput('')
    }
    else if(l.innerText == "CE"){
      let output=stringToNumber(getOutput()).toString()
      output = output.substr(0,output.length-1)
      output=Number(output)
      printOutput(output)
    }
    else{
      let output=getOutput();
      let past=getPast();
      
      if (output!= ""){
        output=stringToNumber(output)
        past=past+output
        if(l.innerText=="="){
          let result = eval(past); //The eval() method evaluates or executes an argument.
          printOutput(result)
          printPast("")
        }
        else{
          past = past+l.innerText
          printPast(past)
          printOutput("")
        }
      }

    }
  });
});

 