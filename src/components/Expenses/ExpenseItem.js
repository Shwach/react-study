import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';

function ExpenseItem(props) {
    //리액트와 상관없는 순수 자바스크립트 (동적 표현을 위한 상수 선언)
    //{}안에 변수명을 넣는다
    //Date형식은 .toISOString()를 뒤에 붙여야 한다.

    //props : 컴포넌트를 재사용하기 위한 
    //App.js에 정의된 배열을 출력
    
    /*const expenseDate = new Date(2021,2, 28); 
    const expenseTitle = 'Car Insurance';
    const expenseAmount = 294.67;*/

    return (
        <Card className="expense-item">
            {/*<div>{props.date.toISOString()}</div>*/}

            <ExpenseDate date={props.date}></ExpenseDate>

            <div className = "expense-item__description">
                <h2>{props.title}</h2> 
                <div className = "expense-item__price">${props.amount}</div>
            </div>
        </Card>
    );
}

export default ExpenseItem;