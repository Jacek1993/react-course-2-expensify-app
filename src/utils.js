console.log('utils.js is running');


const square=(x)=>x*x;
//do exporta wkladamy tylko referencje do obiektow a nie key-value pair

const add=(a,b)=>a+b;
const subtract=(a,b)=>a-b;

//nie mozna tak bo bedzie blad
// export default const subtract=(a,b)=>a-b;

//ale mozna tak to zrobic
//export default (a,b)=>a-b;

export {square, add, subtract as default};


//mozna tez napisac:
// export add=(a,b)=>a+b;





//exports  default export -named exports

