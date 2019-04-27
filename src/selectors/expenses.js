import moment from "moment";

export default (expenses, {text, sortBy, startDate, endDate})=>{
    return expenses.filter((expense)=>{
        //api gdy startDate jest timeStamp a nie data
        // const startDateMatch=typeof startDate!=='number' || expense.createdAt >=startDate;
        // const endDateMath=typeof endDate!=='number' || expense.createdAt<=endDate;
        // const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

        //figure out if expenses.description as the text variable string inside of it
        //includes

        //here we going to use moment api
        const createAtMoment =moment(expense.createdAt);
        const startDateMatch = startDate?  startDate.isSameOrBefore(createAtMoment, 'day'): true;
        const endDateMatch=endDate? endDate.isSameOrAfter(createAtMoment, 'day'): true;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());

        return startDateMatch && endDateMatch && textMatch;
    }).sort((a,b)=>{
        if(sortBy==='date'){
            return a.createdAt <b.createAt ? 1:-1;
        }else if(sortBy==='amount'){
            return a.amount < b.amount ? 1: -1;
        }
    })
};