/*
 * Create the function factorial here
 */
function factorial(n){
     
    let factor = 1;
    for(let i = n; i>0; i--){
        factor = factor * i;
    }
    return factor;
}