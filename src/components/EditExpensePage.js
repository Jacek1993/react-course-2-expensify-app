import React from "react";
import {connect} from 'react-redux';
import ExpenseForm from './ExpsenseForm';
import {editExpense, removeExpense} from "../actions/expenses";

//to edit compoennt we have to get to store redux method connect
//podajemy expense w dol do ExpenseForm by mozna bylo edytowac dane z obiektu
//dispatch the action to edit the expense
//redirect to the dashboard page

const EditExpensePage = (props) =>{
    console.log(props);
    return  (
        <div>
            <ExpenseForm
                expense={props.expense}
                onSubmit={(expense)=>{
                    props.dispatch(editExpense(props.expense.id, expense));
                    props.history.push('/');
            }}/>

            <button onClick={()=>{
                props.dispatch(removeExpense({id: props.expense.id}));
                props.history.push('/');

            }}>Remove</button>
        </div>
    );
};


//ta funkcja jest wykonywana w onSubmit dlatego też editExpense w dispatch ma dwa argumenty
const mapStateToProps=(state, props)=>{
    return {
        expense: state.expenses.find((expense)=> expense.id===props.match.params.id)
    };
};

export default connect(mapStateToProps)(EditExpensePage);