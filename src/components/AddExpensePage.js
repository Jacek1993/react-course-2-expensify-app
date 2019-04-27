import React from "react";
import {connect} from 'react-redux';
import ExpenseForm from './ExpsenseForm';
import {addExpense} from "../actions/expenses";
/*expense jest to obiekt podawany z ExpenseForm */
//props.history.push('/') kidy modyfikujemy propsy wtedy przekierowujemy sie do / page CZYLI JEST TO PRZEKIEROWANIE NA STRONE Z WYDATKAMI
const AddExpensePage = (props) => (
    <div>
       <h1>Add Expense</h1>
        <ExpenseForm
        onSubmit={(expense)=>{
            props.dispatch(addExpense(expense));
            props.history.push('/')
        }}

        />
    </div>
);
export default connect()(AddExpensePage)