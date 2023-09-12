// Reducer для фильтра ремонтных работ

import { ActionTypes } from './actions';

// Интерфейс для установки фильтра работ
interface FilterAction {
    type: ActionTypes.SET_FILTER_VALUE;
    payload: string;
}

// Интерфейс состояния фильтра
interface FilterState {
    value: string;
}

// Начальнное состояние фильтра
const initialState: FilterState = {
    value: '',
};

const filterReducer = (state: FilterState = initialState, action: FilterAction) => {
    switch (action.type) {
        // Установка фильтра
        case ActionTypes.SET_FILTER_VALUE: 
            return {
                ...state,
                value: action.payload,
            }
        default:
            return state;
    }
};

export default filterReducer;
