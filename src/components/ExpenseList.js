import React,{useContext} from "react";
import ExpenseItem from "./ExpenseItem";
import { AppContext } from "../context/AppContext";
import App from "../App";


const ExpenseList =()=> {
    const {expenses}= useContext(AppContext);
    
    
    return(
        <ul>
            {
                expenses.map(((expense)=>(
                    <ExpenseItem 
                        id={expense.id}
                        name={expense.name}
                        cost={expense.cost}
                    />
                )))
            }
        </ul>
    );
}

export default ExpenseList;