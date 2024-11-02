items=["medicine","cosmetic","electronics","food"];
let tax_calculator=(item,amount)=>{
    let tax=0;
    if(item==items[0]){
        tax=0.10;
        console.log(`${tax*100}% tax is imposed on ${item} of price ${amount}.\n Net price is: ${amount*(1+tax)}`);
    }
    else if(item==items[1]){
        tax=0.20;
        console.log(`${tax*100}% tax is imposed on ${item} of price ${amount}.\n Net price is: ${amount*(1+tax)}`);
    }
    else if(item==items[2]){
        tax=0.30;
        console.log(`${tax*100}% tax is imposed on ${item} of price ${amount}.\n Net price is: ${amount*(1+tax)}`);
    }
    else if(item==items[3]){
        tax=0.40;
        console.log(`${tax*100}% tax is imposed on ${item} of price ${amount}.\n Net price is: ${amount*(1+tax)}`);
    }
    else{
        tax=0.50;
        console.log(`${tax*100}% tax is imposed on ${item} of price ${amount}.\n Net price is: ${amount*(1+tax)}`);
    }
}
tax_calculator("medicine",1000);
tax_calculator("electronics",7000);
tax_calculator("food",900);
tax_calculator("cosmetic",500);
tax_calculator("Car",10000);