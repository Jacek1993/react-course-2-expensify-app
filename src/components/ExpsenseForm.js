import React from 'react';
import moment from 'moment';
import {SingleDatePicker} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

// const date=new Date();

// MOMENT JEST DUZO PROSTSZY DO OBSLUGI NIZ DATE

const now=moment();
console.log(now.format('MMM Do, YYYY'));


//setup note state
//setup onChange and value for textarea
//aby edytowac obiekty czyli nadpisywac te dane ktore sa zdefiniowane w poprzednim obiekcie musimy zdeviniowac  state w konstrukorze

export default class ExpenseForm extends React.Component{

    constructor(props){
        super(props);

        this.state={
            description: props.expense? props.expense.description: '',
            note: props.expense? props.expense.note: '',
            amount: props.expense? (props.expense.amount/100).toString(): 0,
            createdAt: props.expense? moment(props.expense.createdAt): moment(),
            calendarFocused: false,
            error: ''
        };

    }

    //nie obslugujemy danych z formularza tutaj tylko przesylamy je do AddExpensePage oraz EditExpensePage
    // state={
    //     description: '',
    //     note:'',
    //     amount: 0,
    //     createdAt: moment(),
    //     calendarFocused: false,
    //     error: ''
    // };


    onDescriptionChange=(e)=>{
        const description=e.target.value;
        this.setState(()=>({description}))
    };
    onNoteChange=(e)=>{
        //to jest to samo co w onDescriptionChange
        e.persist();
        this.setState(()=>({note: e.target.value}));
    };

    onAmountChange=(e)=>{
        const amount=e.target.value;
        if(!amount || amount.match(/^\d+(\.\d{0,2})?$/)) {
            this.setState(() => ({amount}));
        }
    };

    onDateChange=(createdAt)=>{
        if(createdAt){
            this.setState(()=>({createdAt: createdAt}));
        }

    };

    onFocusChange=({focused})=>{
        this.setState(()=>({calendarFocused: focused}))
    };

    onSubmit=(e)=>{
        e.preventDefault();

        //Walidacja stanu formularza jesli description i  amount nie istnieje
        if(!this.state.description || !this.state.amount){
            //set error state equal to 'Please provide description and amount'
            this.setState(()=>({error: 'Please provide description and amount'}));
        }else{
            this.setState(()=>({error: ''}));
            //clear the error
            console.log('submitted');
            //amount to string
            //createdAt to moment object trzeba go skonwertowac do timeStamp
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount)*100,
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            })
        }
    };

    render(){
        return (
            <div>
                <form onSubmit={this.onSubmit}>
                    {this.state.error && <p>{this.state.error}</p>}
                    <input type="text" placeholder="Description" autoFocus value={this.state.description} onChange={this.onDescriptionChange}/>
                    <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange}/>
                    <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={()=>false}
                    />
                    <textarea placeholder="Add a note for your expense" value={this.state.note} onChange={this.onNoteChange}/>

                    <button >Add Expense</button>
                </form>
            </div>
        )
    }
}