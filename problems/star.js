/*
    input : 3 
    output :
        *
       * * 

*/

const ast = (size) => {
    let asterisk = '';
    let spaces = '';
    let decrease = size - 1;
    for(let i = 1 ; i <= size ; i++){
        for(let x = decrease; x > 0; x-- ){
            spaces += ' ';
        }
        asterisk += '* ';
        console.log(spaces,asterisk)
        spaces = '';
        decrease--;
    }
}

ast(4)


