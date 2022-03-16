function getName(){
    return "Kellson Souza";
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);
