
//eliminates extra spaces a user may have entered
function checkSpace(val){

    

    for(let i=0; i<val.length; i++){

        

            if(!val[i]){
                
                val.splice(i, 1)
                checkSpace(val)
                    
            }

        
        

        
    }
    
    return val 

}




//checks to see if all characters in expression are valid
function checkValid(val){

    console.log('Value Array: ' + val);

    console.log('Expression Length: ' + val.length)

    terms = ['p', 'q', 'r', '!', '&&', '||', '->', '<=>']

    for(let i=0; i<val.length; i++){

        if(!terms.includes(val[i])){

            return false;
                
        }

        
    }
    
    return true;


}




//finds the position of each term in the expression
function checkPos(val){

    terms = ['p', 'q', 'r', '!', '&&', '||', '->', '<=>']

    posArr = []

    for(let i=0; i<val.length; i++){

        for(let j=0; j<terms.length; j++)
            if (terms[j] == val[i]){

                posArr.push(i + " : " + terms[j])
            }

    }


    return posArr 



}


function checkVar(val){

    terms = ['p', 'q', 'r']

    posArr = []

    for(let i=0; i<val.length; i++){

        for(let j=0; j<terms.length; j++)
            if (terms[j] == val[i]){

                posArr.push(i + " : " + terms[j])
            }

    }


    return posArr 

}


function checkOps(val){

    terms = ['!', '&&', '||', '->', '<=>']

    posArr = []
    
    for(let i=0; i<val.length; i++){

        for(let j=0; j<terms.length; j++)
            if (terms[j] == val[i]){

                posArr.push(i + " : " + terms[j])
            }

    }


    return posArr 

}


