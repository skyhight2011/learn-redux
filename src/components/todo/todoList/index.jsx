import './style.css';
import clsx from 'clsx';

function TodoList({ data, onHobbyClick }) {
	const toggleStatus = (id) => {
		if (!onHobbyClick) return;
		onHobbyClick(id);
	};
	return (
		<div>
			<ul>
				{data?.map((todo) => (
					<li key={todo.id} className={clsx({ completed: todo.status })} onClick={() => toggleStatus(todo.id)}>
						{todo.name}
					</li>
				))}
			</ul>
		</div>
	);
}

export default TodoList;
