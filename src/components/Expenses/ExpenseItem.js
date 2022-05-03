
import ExpenseDate  from './ExpenseDate';
import './ExpenseItem.css';
import Card  from '../UI/Card';
import React,{ useState } from 'react';

function ExpenseItem(props){
    // const expensedate = new Date(2022, 2, 28);
    // const expenseTitle = ' Car insurance';
    // const expenseAmount = 34;

    // document.getElementById('root').addEventListener()

    const[title, setTitle] = useState(props.title);

    // let title = props.title;
    const clickHandler = () =>{
        setTitle('Updated!!!');
         console.log('Clicked!!!!');
    }
    return (
        <li>
        <Card className="expense-item">
            {/* <div>{props.date.toISOString()}</div> */}
           <ExpenseDate date= {props.date}/>
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/*     <button onClick={clickHandler}>Change Title</button> */}
        </Card>
        </li>
    );
}

export default ExpenseItem;