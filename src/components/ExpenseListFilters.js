import React from 'react';
import {connect} from 'react-redux';
import {setTextFilter, sortByAmount, sortByDate, setStartDate, setEndDate} from "../actions/filters";
import {DateRangePicker} from 'react-dates';


class ExpenseListFilters extends React.Component{

    state={
      calendarFocused: null
    };

    onDatesChange=({startDate, endDate})=>{
        this.props.dispatch(setStartDate(startDate));
        this.props.dispatch(setEndDate(endDate));
    };

    onFocusChange=(calendarFocused)=>{
        this.setState(()=>({calendarFocused}));
    };

    render(){
        return (<div>
            <input type="text" value={this.props.filters.text} onChange={(e)=>{
                this.props.dispatch(setTextFilter(e.target.value));
                console.log(e.target.value)
            }}/>
            <select value={this.props.filters.sortBy} onChange={(e)=>{
                if(e.target.value==='date'){
                    this.props.dispatch(sortByDate(e.target.value))
                }
                else if(e.target.value==='amount'){
                    this.props.dispatch(sortByAmount(e.target.value))
                }
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            <DateRangePicker
            startDate={this.props.filters.startDate}
            endDate={this.props.filters.endDate}
            onDatesChange={this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange={this.onFocusChange}
            showClearDates={true}
            numberOfMoths={1}
            isOutsideRange={()=>false}
            />
        </div>);
    }
}










//controlled input react documentation
// const ExpenseListFilter=(props)=>(
//   <div>
//       <input type="text" value={props.filters.text} onChange={(e)=>{
//           props.dispatch(setTextFilter(e.target.value))
//           console.log(e.target.value)
//       }}/>
//       <select value={props.filters.sortBy} onChange={(e)=>{
//           if(e.target.value==='date'){
//               props.dispatch(sortByDate(e.target.value))
//           }
//           else if(e.target.value==='amount'){
//               props.dispatch(sortByAmount(e.target.value))
//           }
//       }}>
//           <option value="date">Date</option>
//           <option value="amount">Amount</option>
//       </select>
//   </div>
// );                                              //e.target is a input

//set up value and onChange for select
//

const mapStateToProps=(state)=>{
    return {
        filters: state.filters
    }
}

export default connect(mapStateToProps)(ExpenseListFilters);