// Reducer для работы со списком ремонтных работ

import { ActionTypes } from './actions';
import DATA from '../data/repairWorks.json';

// Тип для одной записи работ
interface RecordType {
    id: string;
    name: string;
    cost: number;
}

// Интерфейс удаления работы
interface RemoveAction {
    type: ActionTypes.REMOVE_DATA_RECORD;
    payload: string;
}

// Интерфейс добавления и изменения работы
interface AddSetAction {
    type: ActionTypes.ADD_DATA_RECORD | ActionTypes.SET_DATA_RECORD;
    payload: RecordType;
}

type RecordAction = RemoveAction | AddSetAction;

// Общий интерфейс списка данных
interface DataState {
    data: Array<RecordType>;
}

// Первоначальное состояние данных
const initialState: DataState = {
    data: DATA,
};

const dataReducer = (state: DataState = initialState, action: RecordAction) => {
    switch (action.type) {
        
        // Изменение данных
        case ActionTypes.SET_DATA_RECORD: 
            return {
                ...state,
                data: state.data.map(item => item.id === action.payload.id ? action.payload : item),
            }

        // Добавление данных
        case ActionTypes.ADD_DATA_RECORD: 
            return {
                ...state,
                data: [ 
                    ...state.data, 
                    action.payload,
                ],
            }

        // Удаление данных
        case ActionTypes.REMOVE_DATA_RECORD: 
            return {
                ...state,
                data: state.data.filter((item) => item.id !== action.payload),
            }
        
        default:
            return state;
    }
};

export default dataReducer;
