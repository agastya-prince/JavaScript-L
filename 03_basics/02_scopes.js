let a = 100
if (true) {
    let a = 10
    const b = 20
    var c = 30

    console.log("Inner : ", a); // a = 10, local scope
}
console.log(a); a = 100 // global scope
console.log(b); // b also not available
console.log(c); // 30 printed

function one(){
    const username = "agastya"

    function two(){
        const website = "youtube"
        console.log(username);
    }
    console.log(website);

    two();
}
one();

if (true) {
    const username = "agastya"
    if (username === "agastya") {
        const website = "youtube"
        console.log(username + website);
    }
    //console.log(website) -> not in scope
}
// console.log(username) -> not in scope

// +++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++

addOne(5); // this can be called even before function
function addOne(num) {
    return num+1;
}

const addTwo = function(num){
    return num+2;
}
addTwo(5); // this cannot be called before
