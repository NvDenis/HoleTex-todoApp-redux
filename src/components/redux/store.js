// import { createStore } from 'redux'
// import rootReducer from './reducer';
// import { composeWithDevTools } from 'redux-devtools-extension';

// const composeEnhancers = composeWithDevTools();

// const store = createStore(rootReducer, composeEnhancers);

// export default store;

import { configureStore } from '@reduxjs/toolkit'
import { filtersSilce } from '../Filters/FiltersSlice'
import { todoListSlice } from '../TodoList/TodoListSlice'

export const store = configureStore({
    reducer: {
        filters: filtersSilce.reducer,
        todoList: todoListSlice.reducer
    },
})

export default store