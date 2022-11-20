
// when using listed exports, you create your functions
// and variables just as you always do.
function sayHi() {
    console.log('hi')
}

function sayBye() {
    console.log('bye');
}

// this is the list of exports.
// to export anything, just make that whatever you want to
// export is declared, then type as below, the declared name
// of your function or variable.
export {sayHi, sayBye};