
// const initState = [
//     { id: 1, name: 'learn Java', completed: false, priority: 'Medium' },
//     { id: 2, name: 'learn React', completed: true, priority: 'High' },
//     { id: 3, name: 'learn NodeJS', completed: false, priority: 'Low' },
// ]

// const todoListReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'todoList/addTodo':
//             return [...state, action.payload]
//         case 'todoList/toggleStatus':
//             return state.map(todo => todo.id === action.payload ? {...todo, completed: !todo.completed} : todo);
//         default:
//             return state;
//     }
// }

// export default todoListReducer

import { createSlice } from "@reduxjs/toolkit";

export const todoListSlice = createSlice({
    name: 'todoList',
    initialState: [
        { id: 1, name: 'learn Java', completed: false, priority: 'Medium' },
        { id: 2, name: 'learn React', completed: true, priority: 'High' },
        { id: 3, name: 'learn NodeJS', completed: false, priority: 'Low' },
    ],
    reducers: {
        addTodo: (state, action) => {
            state.push(action.payload);
        },
        toggleStatus: (state, action) => {
            const currentTodo = state.find(todo => todo.id === action.payload);
            currentTodo.completed = !currentTodo.completed;
        }
    }
})