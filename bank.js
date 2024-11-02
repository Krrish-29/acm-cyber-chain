let checkbalance=(x=false,user)=>{
    if(x==false){
        return user[1];
    }
    else if(x==true){
        console.log(`The balance of the ${user[0]}'s account is ${user[1]}.\n`);
        return user[1];
    }
}
let withdraw=(amount,user)=>{
    if(amount>(user[1])){
        console.log("Error withdrawal amount is more than balance.");
        checkbalance(true,user);
    }
    else{  
        user[1]-=amount;
        console.log(`Transcation of ${amount} is successful`);
        checkbalance(true,user);
    }
}
let deposit=(amount,user)=>{
    user[1]+=amount;
    console.log(`Transcation of ${amount} is successful`);
    checkbalance(true,user);
}
user =[["krrish",1000],["sarthak",2000]];
withdraw(1100,user[0]);
checkbalance(true,user[1]);
deposit(900,user[1]);