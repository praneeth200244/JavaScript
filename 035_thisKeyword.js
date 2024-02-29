const hen = {
    name : 'Helen',
    eggCount : 0,
    layAnEgg () {
        this.eggCount++;
        console.log(`This hen has laid ${this.eggCount} egg(s)\n`);
        return "EGG\n";
    }
}

console.log(hen.layAnEgg()) //Refers to hen object

const m2 = hen.layAnEgg
m2() //Refers to window object