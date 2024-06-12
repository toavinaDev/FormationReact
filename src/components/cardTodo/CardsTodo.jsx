import React, { useEffect, useState } from 'react';
import './CardsTodo.css';
import AddTodo from '../AddTodo/AddTodo';

// mere fille
// lifting stateup

const CardsTodo = ({ todos }) => {

    let externTodos = todos;
    const [todosParent, setTodos] = useState(externTodos)


    useEffect(() => {
        document.title = `Todos: ${todosParent.length}`;
    }, [todosParent]); // dep 



    return (
        <div className='cardTodo'>
            <h2 >CardTodo</h2>
            <hr />
            <AddTodo giveTodosParent={setTodos}></AddTodo>
            <div className="cards-container">
                <div className="cards-container">
                    {todosParent.map((todo, index) => (
                        <div key={index} className="card">
                            <h3>{todo.title}</h3>
                            <p>{todo.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CardsTodo;
