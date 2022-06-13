export const ADD_TODO = 'TODO_APP/ADD_TODO';
export const TOGGLE_TODO = 'TODO_APP/TOGGLE_TODO';

export function todoApp(data) {
	return {
		type: ADD_TODO,
		payload: data,
	};
}

export function toggleTodo(id) {
	return {
		type: TOGGLE_TODO,
		payload: id,
	};
}

export const VisibilityFilters = {
	SHOW_ALL: 'SHOW_ALL',
	SHOW_COMPLETED: 'SHOW_COMPLETED',
	SHOW_ACTIVE: 'SHOW_ACTIVE',
};
