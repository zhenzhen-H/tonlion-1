const a = (a,b)=>{a+b};

class Fn{
    constructor(){
        console.log(1);
    }
    show(){
        alert("i am show")
    }
}

const b = {
    a:1
}
const c = {
    b:1
}

const d = Object.assign(b,c)