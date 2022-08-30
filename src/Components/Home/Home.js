import React, { useState } from 'react';
import Todos from './Todos/Todos';
import NewTodo from '../Home/NewTodo/NewTodo'

export default function Home() {

    const [todos,setTodos] = useState({});
    return (
        <div>
            <Todos />
            <NewTodo />
        </div>
  )
}
