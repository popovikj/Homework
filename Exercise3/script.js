function atm(num1, num2=2000) {
    result= num2-num1;
    if (num1 > num2 ){
    console.log("Not enough money")
    } else if ( num1 <= num2){
        console.log( "Money left on card:" + result + " " + ("Withdrawn money:" + (num2 - result)))
    }

    return result;
}



let cash = atm(1273)
// console.log(cash)
