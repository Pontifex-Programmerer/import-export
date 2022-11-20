
/**
 * 
 * @param {String} title a title to display in the log
 */
export function logHeading(title){
    if(typeof title !== 'string'){
        throw new Error('parameter used is not of type string')
    } else {
        console.log(`--------------${title}--------------`);
    }
}
/**
 * 
 * @param {Array} array 
 */
export function logArrayByLine(array){
    if(Array.isArray()){
        array.forEach(element => {
            console.log(``)
        });
    } else {
        throw new Error('parameter used is not of type Array');
    }
}

export function endOfTexT(){
    console.log(`------------------------------------`);
}

export function uselessFunction(){
    const i = 20-1;
}