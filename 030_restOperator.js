// function sum(...nums) {
//     console.log(nums)

//     let sum = 0;
//     for (let i=0; i<nums.length; i++) {
//         sum += nums[i];
//     }
//     return sum
// }

function sum (...nums) {
    console.log(nums)
    return nums.reduce((total,element) => (total + element))
}
console.log("Sum =" ,sum (1,2,3,4,5,6,7,8,9,0),"\n\n");

function sports(winner,runnersUp,...participants) {
    console.log(`Winner: ${winner}`)
    console.log(`Runners up: ${runnersUp}`)
    console.log(`Participants: ${participants}`)
}

sports("Aravind Bolar","Devdas Kapikad","Bhojaraj Vamanjoor",'Naveen D Padil','Arpith Indravadan')