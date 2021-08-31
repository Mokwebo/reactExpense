import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css';
import Card from '../UI/Card';
import React, {useState}from 'react'

const ExpenseItem = (props) =>{
    const [title, setTitle] = useState(props.title);
 
    const clickHandler = () => {
        setTitle('updated');
    }

    return (
        <li>
        <Card className="expense-item">
        <ExpenseDate date={props.date}></ExpenseDate>
            <div className="expense-item_description">
                <h2>{title}</h2>
                <div className="expense-item_price">R{props.amount}</div>
            </div>
            {/* <button onClick={clickHandler}>Change title</button> */}
        </Card>
        </li>
    )
}

export default ExpenseItem;