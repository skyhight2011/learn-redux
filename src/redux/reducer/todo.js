import * as Todo from '../actions';

const initialState = { todoList: [] };

export default function todoReducer(state = initialState, action) {
	switch (action.type) {
		case Todo.ADD_TODO:
			return {
				...state,
				todoList: [...state.todoList, action.payload],
			};
		case Todo.TOGGLE_TODO:
			return {
				...state,
				todoList: state.todoList.map((todo) => (todo.id === action.payload ? { ...todo, status: !todo.status } : todo)),
			};
		default:
			return state;
	}
}
