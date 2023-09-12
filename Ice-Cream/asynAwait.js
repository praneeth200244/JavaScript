let isShopOpen = true;
// let isShopOpen = false;

let timeSlot = (ms) => {
    return new Promise((resolve,reject)=>{
        if (isShopOpen) {
            setTimeout(resolve, ms);
        } else {
            reject(console.log("The shop has been closed"))
        }
    })
}

async function kitchen (){
    try {
        await timeSlot(0);
        console.log("The customer has visited the shop")

        await timeSlot(0);
        console.log("Customer is choosing his favorite ice cream")

        await timeSlot(2000);
        console.log("The customer has ordered 150 butter scotch")

        await timeSlot(5000);
        console.log("The production has been started")

        await timeSlot(2000);
        console.log("All ingredients are being collected")

        await timeSlot(2000);
        console.log("Toasting the Pecans")

        await timeSlot(2000);
        console.log("Preparing the Ice Cream Base")

        await timeSlot(2000);
        console.log("Whisking Sugar and Egg Yolks")

        await timeSlot(2000);
        console.log("Tempering the Eggs")

        await timeSlot(2000);
        console.log("Combining Mixtures")

        await timeSlot(2000);
        console.log("Cooking the Custard")

        await timeSlot(2000);
        console.log("Straining the Custard")

        await timeSlot(2000);
        console.log("Adding Flavor and Pecan Butter")

        await timeSlot(2000);
        console.log("Chilling the Mixture")

        await timeSlot(2000);
        console.log("Churning the Ice Cream")

        await timeSlot(2000);
        console.log("Adding Chopped Pecans")

        await timeSlot(2000);
        console.log("Transfering and Freezing")

        await timeSlot(2000);
        console.log("The order has been served")
    }
    catch(error) {
        console.log("Order unsuccessful.....", error)
    }
    finally{
        console.log("Shop is closed at the end of the day...!")
    }
}

kitchen();
