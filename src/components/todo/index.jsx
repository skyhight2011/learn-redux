import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { todoApp, toggleTodo, TOGGLE_TODO } from '../../redux/actions';
import TodoList from './todoList';
import { useSelector } from 'react-redux';
import Filter from './filter';

function TodoApp() {
	const dispatch = useDispatch();
	const [todoName, setTodoName] = useState('');
	const data = useSelector((state) => state.todoReducer.todoList);
	console.log(data);
	const handleInputChange = (e) => {
		setTodoName(e.target.value);
	};
	const handleClick = () => {
		dispatch(todoApp({ id: uuidv4(), name: todoName, status: true }));
		setTodoName('');
	};
	const onHobbyClick = (id) => {
		dispatch(toggleTodo(id));
	};
	const filter = {};
	return (
		<div>
			<input value={todoName} onChange={handleInputChange} />
			<button onClick={() => handleClick()}>add to do</button>
			<TodoList data={data} onHobbyClick={onHobbyClick} />
			<Filter filter={filter} />
		</div>
	);
}

export default TodoApp;
