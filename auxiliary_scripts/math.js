function add(...numbers){
    let result = 0;
    numbers.forEach(n => {
        result += n;
    });
    return result;
}

function subtract(...numbers){
    let result = 0;
    numbers.forEach(n => {
        result -= n;
    });  
    return result;
}

export default {add, subtract};