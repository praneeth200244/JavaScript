let order = (call_back) => {
    console.log("Customer is choosing his favorite ice cream");
    call_back();
}

let production = () => {
    setTimeout(()=>{
        console.log("The customer has ordered 150 butter scotch ")
        
        setTimeout(()=>{
            console.log("The production has been started")

            setTimeout(()=>{
                console.log("All ingredients are being collected")

                setTimeout(()=>{
                    console.log("Toasting the Pecans")

                    setTimeout(()=>{
                        console.log("Preparing the Pecan Butter")

                        setTimeout(()=>{
                            console.log("Preparing the Ice Cream Base");

                            setTimeout(()=>{
                                console.log("Whisking Sugar and Egg Yolks")

                                setTimeout(()=>{
                                    console.log("Tempering the Eggs")

                                    setTimeout(()=>{
                                        console.log("Combining Mixtures")

                                        setTimeout(()=>{
                                            console.log("Cooking the Custard")

                                            setTimeout(()=>{
                                                console.log("Straining the Custard")

                                                setTimeout(()=>{
                                                    console.log("Adding Flavor and Pecan Butter")

                                                    setTimeout(()=>{
                                                        console.log("Chilling the Mixture")

                                                        setTimeout(()=>{
                                                            console.log("Churning the Ice Cream")

                                                            setTimeout(()=>{
                                                                console.log("Adding Chopped Pecans")

                                                                setTimeout(()=>{
                                                                    console.log("Transfering and Freezing")

                                                                    setTimeout(()=>{
                                                                        console.log("The order has been served")
                                                                    },5000)
                                                                },2000)
                                                            },2000)
                                                        },2000)
                                                    },2000)
                                                },2000)
                                            },2000)
                                        },2000)
                                    },2000)
                                },2000)
                            },2000)
                        },2000)
                    }, 2000)
                },2000)
            },2000)
        },0);
    },2000);
}

setTimeout(()=>{
    console.log("The customer has visited the shop");
    order(production);
},0);
