import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import 'normalize.css/normalize.css'        //normalize.css ten drugi czlon pochodzi z zaleznosci jest tam zdefinowany trzeba go zimportowac
import './styles/styles.scss';
import AppRouter from './routers/AppRouter';
import AppRouter1 from "./routers/AppRouter1";
import configureStore from './store/configureStore';
import {addExpense} from './actions/expenses';
import {setTextFilter} from "./actions/filters";
import getVisibleExpenses from './selectors/expenses';

//BrowserRouter tworzy nowy Router
//Router zmienia strony

// /create dotyczy strony create
//addExpenses -> Water bill
//addExpenses -> Gas bill
//setTextFilter -> bill
//getVisibleExpenses -> print visibles ones to the screen


const store=configureStore();

store.dispatch(addExpense({description: 'Water bill', amount: 1000}));
store.dispatch(addExpense({description: 'Rent', amount: 1000950}));
store.dispatch(addExpense(({description: 'Gas bill', createdAt:1000})));
// store.dispatch(setTextFilter('bill'));

// setTimeout(()=>{
//     store.dispatch(setTextFilter('bill'));
// },3000);

const state=store.getState();
const visibleExpenses=getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);
console.log(store.getState());

const jsx=(
    <Provider store={store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));