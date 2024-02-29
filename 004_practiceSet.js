let a = "Aravind"
console.log(typeof a, "---->", a);

let b = 6;
console.log(typeof (a+b));

a += b;
console.log(typeof a, "---->", a, "\n");


const a1 = {
  name: "Aravind Bolar",
  section: 'C',
  isPrincipal: false,
  branch : 'CSE'
}
console.log(a1);

// a1 = 100;

a1['friend'] = "Shubham";  
a1['name'] = "Bhojaraj Vamanjoor" ; 
console.log(a1,"\n");

const dict = {
  appreciate: "recognize the full worth of.",
  ataraxia: "a state of freedom from emotional disturbance and anxiety",
  yakka: "work, especially hard work."
}
console.log(dict);
console.log(dict['yakka']);
console.log(dict.yakka);