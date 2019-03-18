// PLEASE DON'T change function name
module.exports = 
function makeExchange(currency) {
    let obj = {"H":0,"Q":0,"D":0,"N":0,"P":0};
  
    if(currency>10000){
        obj.error ="You are rich, my friend! We don't have so much coins for exchange"
     }
    else {for( ;currency>0;){
    
        if(currency>= 50){
            currency=currency-50;
            obj.H+=1;
            continue;
        }
        else if(currency>= 25){
            currency=currency-25;
            obj.Q+=1;
            continue;
        }
        else if(currency>= 10){
            currency=currency-10;
            obj.D+=1;
            continue;
        }
        else if(currency>= 5){
            currency=currency-5;
            obj.N+=1;
            continue;
        }
        else if(currency>= 1){
            currency=currency-1;
            obj.P+=1;
            continue;
        }
        }}

        for(key in obj){
            if(obj[key]==0){
                delete obj[key];
            }
        }
        return obj;
    }



