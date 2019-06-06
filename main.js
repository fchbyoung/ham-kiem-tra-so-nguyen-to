let count = 0;
for(let  i = 2; count < 999; i++){
    if(isPrime(i)){
        count++;
        document.write(i + ",");
    }
}

function isPrime(number){
    for(let i = 2; i < 999; i++){
        if(number % i === 0){
            return true;
        }
    }
    return false;
}

