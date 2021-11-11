
$(document).ready(function(){



    $('#main_button').click(function(){

        val = $('#main_input').val();

        val = val.toLowerCase();

        valArray = val.split(" ");

        console.log(valArray)
        isValid = checkValid(valArray)

        console.log('Valid Expression?: ' + isValid)

        //TO DO check to see if string is valid

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

        // TO DO search for each case in in the string

        // TO DO break each string into parts to analyze

        // TO DO see if each part is true or false

        // TO DO combine different parts to make whole expression

        // TO DO display result and truth table
        
    });

    
    
});


function checkValid(val){

    console.log('Value Array: ' + val);

    console.log('Expression Length: ' + val.length)

    terms = ['p', 'q', 'r', '!', '&&', '||', '->', '<=>']

    for(i=0; i<val.length; i++){

        if(!terms.includes(val[i])){

            return false;
                
        }

        
    }
    
    return true;


}