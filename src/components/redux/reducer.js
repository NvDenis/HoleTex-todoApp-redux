import { combineReducers } from "redux"
import FiltersReducer from "../Filters/FiltersSlice"
import todoListReducer from "../TodoList/TodoListSlice"

const rootReducer = combineReducers({
    filters: FiltersReducer,
    todoList: todoListReducer
})

export default rootReducer