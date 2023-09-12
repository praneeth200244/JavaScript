const myObject = new XMLHttpRequest();

myObject.onload = function(){
    console.log("Content loaded successfully")
    console.log(this)

    setTimeout(()=>{
        console.log("Task-2 after successful completion of task-1")
    }, 1000)
}

myObject.onerror = function(){
    console.log("Couldn't load the content successfully")
    console.log(this)
}

myObject.open('GET', 'https://icanhazdadjoke.com', true);
myObject.setRequestHeader('Accept', 'application/json'); 
myObject.send();
