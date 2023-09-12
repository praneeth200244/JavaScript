let promise = (value) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log(value);
            resolve(value);
        }, 4000);
    });
};

(async () => {
    let a = await promise(1);
    let b = await promise(2);
    let c = await promise(3);
    console.log(a, b, c);
})();


