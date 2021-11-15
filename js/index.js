
$(document).ready(function(){



    $('#main_button').click(function(){

        val = $('#main_input').val();


        //check to see if string is valid

        val = val.toLowerCase();

        valArray = val.split(" ");

        console.log(valArray)
        isValid = checkValid(valArray)

        console.log('Valid Expression?: ' + isValid)

       

        //search for each case in the string

        isP = val.includes('p');
        isQ = val.includes('q');
        isR = val.includes('r');
        
        
        isNot = val.includes('!');
        isAnd = val.includes('&&');
        isOr = val.includes('||');
        isImply = val.includes('->');
        isBi = val.includes('<=>');

        
        console.log('p : ' + isP + ', q: ' + isQ + ', r: ' + isR)
        console.log('Not: ' + isNot + ', And: ' + isAnd + ', Or: ' + isOr + ', Implies: ' + isImply + ', Bi-Conditional: ' + isBi)

        //get all positions in the string

        const position = JSON.stringify(checkPos(valArray))

        posJson  = JSON.parse(position)

        console.log("All Positions: " + posJson)



        //get main vairables (p,q,r)

        const mainVar = JSON.stringify(checkVar(valArray))

        varJson = JSON.parse(mainVar)

        console.log("Main Variable Positions: " + varJson)



        //get operators in string (!, &&, ||, ->, <=>)

        const operators = JSON.stringify(checkOps(valArray))

        opsJson = JSON.parse(operators)

        console.log("Operator Positions: " + opsJson)
        



        //TO DO account for multiple spaces between operators/variables

        
        
        // TO DO break each string into parts to analyze

        // TO DO loop through eachn case for every part of the string

        // TO DO see if each part is true or false

        // TO DO combine different parts to make whole expression

        // TO DO display result and truth table
        
    });

    
    
});





