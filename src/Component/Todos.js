import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAllTodos } from './Services/Actions/TodosActions';

const Todos = () => {
    const {isLoading, todos, error} = useSelector((state) => state)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getAllTodos());}, [])
    return (
        <div>
            <h2> todos </h2>
            {
                isLoading && <h3 >Loading...</h3>
            }
            {
                error && <h3 > {error.message}</h3>
            }
            <section>
                {
                    todos && todos.map((todo) => {
                        const  {id , title} = todo;
                        return (
                            <div key = {id}>
                            <h3>{id}</h3>
                         <h3> {title}</h3>
                            </div>
                        )
                       
                    })
                }
            </section>
        </div>
    );
};

export default Todos;