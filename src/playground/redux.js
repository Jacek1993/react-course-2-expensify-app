import {createStore} from 'redux';

//action generators function that return action object
const data={a:1, b:12};
// const add=(data)=>{
//     return data.a+data.b;
// };

// const add=({a,b})=>{
//     return a+b;
// };

const add=({a,b},c)=>{
    return a+b+c;
};
console.log(add({a:1, b:12}, 100));






const incrementCount=({incrementBy=1}={})=>{
    return {
        type: 'INCREMENT',
        incrementBy
    };
};

const decrementCount=({decrementBy=1}={})=>({
    type: 'DECREMENT',
    decrementBy
});

const setCount=({set =101}={})=>({
    type: 'SET',
    set
});

const resetCount=()=>({
    type: 'RESET'
});

//action object
// store.dispatch({
//     type: 'INCREMENT',
//     incrementBy: 5
// });
//REducers
//1 Reducer are pure functions
let a=10;
const add=(b)=>a+b;             //not pure function
const addPure=(a,b)=>a+b;       //pure function
let result;
const addNotPure=(a,b)=>result=a+b;

//2)never change state or action

const countReducer=((state={count:0}, action)=>{

    switch (action.type) {

        case 'INCREMENT':
            return {
                count: state.count+action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count-action.decrementBy
            };
        case 'RESET':
            return {
                count :0
            };

        case 'SET':
            return{
                count: action.count
            };
        default:
            return state;
    }

});


const store=createStore(countReducer);

// console.log(store.getState());
const unsubscribe=store.subscribe(()=>{                                                               //jest wywoływana za każdym razem gdy zmienia sie store
    console.log(store.getState());
});
//Actions -than the object that gets sent to the store

//walk, stop_walking, sit, work, stop, stop_working
//i'd like to increment the count
                                                         //wysyłamy do stora za pomoca disptach'a

//unsubscribe();                                      //unsubscrie()
store.dispatch(incrementCount({incrementBy: 5}));


store.dispatch(decrementCount());

store.dispatch(decrementCount({decrementBy: 10}));


store.dispatch(decrementCount());

store.dispatch(setCount());







//i'd like to reset the count to zero

