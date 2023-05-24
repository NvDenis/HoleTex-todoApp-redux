
// const initState = {
//     search: '',
//     status: 'All',
//     priorities: []

// }

// const FiltersReducer = (state = initState, action) => {
//     switch (action.type) {
//         case 'filters/searchFilterChange':
//             return {
//                 ...state,
//                 search: action.payload
//             }
//         case 'filters/statusFilterChange':
//             return {
//                 ...state,
//                 status: action.payload
//             }
//         case 'filters/prioritiesFilterChange':
//             return {
//                 ...state,
//                 priorities: action.payload
//             }
//         default:
//             return state;
//     }
// }

// export default FiltersReducer

import { createSlice } from "@reduxjs/toolkit";

export const filtersSilce = createSlice({
    name: 'filters',
    initialState: {
        search: '',
        status: 'All',
        priorities: []
    },
    reducers: {
        searchFilterChange: (state, action) => {
            state.search =  action.payload
        },  
        statusFilterChange: (state, action) => {
            state.status = action.payload
        },
        prioritiesFilterChange: (state, action) => {
            state.priorities = action.payload
        }
    }

}) 