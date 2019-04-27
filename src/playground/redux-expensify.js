import {createStore, combineReducers} from 'redux';
import uuid from 'uuid';

//types of reducers
//ADD_EXPENSE

const addExpense=(
    {description='',
        note='',
        amount=0,
        createdAt=0}={})=>({
    type: 'ADD_EXPENSE',
    expense:{
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    }
});


//REMOVE_EXPENSE

const removeExpense=({id})=>({
    type: 'REMOVE_EXPENSE',
    expense:{
        id
    }
});


//EDIT_EXPENSE

const editExpense=(id, updates)=>({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

//SET_TEXT_FILTER

const setTextFilter=(text='')=>({
    type: 'SET_TEXT_FILTER',
    text
});

//SORT_BY_DATE

const sortByDate=()=>({
    type: 'SORT_BY_DATE',
    sort: 'date'
});

//SORT_BY_AMOUNT

const sortByAmount=()=>({
    type: 'SORT_BY_AMOUNT',
    sort: 'amount'
});

//SET_START_DATE

const setStartDate=(startDate=undefined)=>({                            //undefined jest domyslnie
    type: 'SET_START_DATE',
    startDate: startDate
});
//SET_END_DATE

const setEndDate=(endDate=undefined)=>({
    type: 'SET_END_DATE',
    endDate
});

//eXPENSESreDUCER

const expensesReducerDefaultState=[];


const expensesReducer=(state=expensesReducerDefaultState, action)=>{

    switch(action.type){

        case 'ADD_EXPENSE':
           // return state.concat(action.expense);                                               //push zmienia stan tablicy concat nie zmienia zwraca nowa tablice
            return [
                ...state,
                action.expense
            ];
        case 'REMOVE_EXPENSE':
            return state.filter(({id})=>id!==action.expense.id);
        case 'EDIT_EXPENSE':
            return state.map((expense)=>{
                if(expense.id===action.id){
                    return {
                        ...expense,                                             //nadpisz wlasciwosci espense tymi znajdujacymi sie w action.updates
                        ...action.updates
                    };
                }else{
                    return expense;
                }
            });
        default:
            return state;
    }

};


//filter reducer
//text => '', sortBy=>date, startDate=> undefined endDate=>undefined

const filterReducerDefaultState={
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
};

const filterReducer=(state=filterReducerDefaultState, action)=>{
    switch(action.type){

        case 'SET_TEXT_FILTER':
            return {
                ...state,
               text: action.text
            };

        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: action.sort
            };

        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: action.sort
            };

        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            };
        case 'SET_END_DATE':
            return {
                ...state,
                endDate:action.endDate
            };
        default:
            return state;
    }
};
//get visible expenses
//endDateMatch i startDateMatch sa timestampami
//January 1st 1970 (unix epoch)

const getVisibleExpenses=(expenses, {text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense)=>{
        const startDateMatch=typeof startDate!=='number' || expense.createdAt >=startDate;
        const endDateMath=typeof endDate!=='number' || expense.createdAt<=endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

        //figure out if expenses.description as the text variable string inside of it
        //includes

        return startDateMatch && endDateMath && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt <b.createAt ? 1:-1;
        }else if(sortBy==='amount'){
            return a.amount < b.amount ? 1: -1;
        }
    })
};



//store creation

const store=createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducer

    })
);

store.subscribe(()=>{
    const state=store.getState();
    const visibleExpenses=getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne=store.dispatch(addExpense({description: 'Rent', amount: 100, createdAt:-21000}));
const expenseTwo=store.dispatch(addExpense({description: 'Coffee', amount: 150, createdAt:-1000}));
//
// console.log(expenseOne);
//
// store.dispatch(removeExpense({id: expenseOne.expense.id}));
//
// console.log(store.getState());
//
// store.dispatch(editExpense(expenseTwo.expense.id, {amount:500}));
//
// store.dispatch(sortByAmount());                 //amount
// store.dispatch(sortByDate());                   //date
//
// store.dispatch(setStartDate(125));              //startDAte 125
// store.dispatch(setStartDate());                 //startDate undefined
// store.dispatch(setStartDate(1250));             //startDate 1250



// store.dispatch(setTextFilter('ffe'));


const demoState = {
    expenses: [{
        id: 'pjahsd',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount',           //date or amount
        startDate: undefined,
        endDate: undefined
    }
};















//OBJECT SPREAD OPERATOR

// const user={
//     name: 'Jane',
//     age: 24
// };
// console.log({
//     age:40,
//     ...user,
//     location: 'Philadelphia'
// });