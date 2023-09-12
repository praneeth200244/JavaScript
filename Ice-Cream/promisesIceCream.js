let isShopOpen = true;

let order = (time, work) => {

    return new Promise((resolve, reject)=>{
        if (isShopOpen) {
            setTimeout(()=>{
                resolve(work())
            },time)
        } else {
            reject(console.log("The shop has been closed....!"))
            // reject(new Error("The shop has been closed....!")) Use in browser
        }
    })
}

order(0, ()=>{
    console.log("The customer has visited the shop");
})
.then(()=>{
    return order(0,()=>{
        console.log("Customer is choosing his favorite ice cream")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("The customer has ordered 150 butter scotch")
    })
})
.then(()=>{
    return order(5000,()=>{
        console.log("The production has been started")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("All ingredients are being collected")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Toasting the Pecans")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Preparing the Pecan Butter")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Preparing the Ice Cream Base")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Whisking Sugar and Egg Yolks")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Tempering the Eggs")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Combining Mixtures")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Cooking the Custard")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Straining the Custard")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Adding Flavor and Pecan Butter")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Chilling the Mixture")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Churning the Ice Cream")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Adding Chopped Pecans")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("Transfering and Freezing")
    })
})
.then(()=>{
    return order(2000,()=>{
        console.log("The order has been served")
    })
})
.catch(()=>{ 
    console.log("Order unsuccessful.....")
})
.finally(()=>{
    console.log("Shop is closed at the end of the day...!")
})