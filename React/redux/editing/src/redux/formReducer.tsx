// Reducer для фильтра ремонтных работ

import { ActionTypes } from './actions';
import { nanoid } from 'nanoid';

// Интерфейс изменения ввода формы данных
interface TypeFormAction {
    type: ActionTypes.SET_FORM_RECORD | ActionTypes.SET_FORM_NEW_RECORD;
    payload: FormState;
}

// Интерфейс для ввода поля наименование данных формы
interface NameFormAction {
    type: ActionTypes.SET_FORM_NAME_RECORD;
    payload: string;
}

// Интерфейс для ввода данных формы
interface CostFormAction {
    type: ActionTypes.SET_FORM_COST_RECORD;
    payload: number;
}

type FormAction = TypeFormAction | NameFormAction | CostFormAction;

// Интерфейс текущего состояния данных
interface FormState {
    isNewRecord: boolean;
    id: string;
    name: string;
    cost: number;
    oldName: string;
    oldCost: number;
}

// Первоначальное состояние данных
const initialState: FormState = {
    isNewRecord: true,
    id: nanoid(),
    name: '',
    cost: 0,
    oldName: '',
    oldCost: 0,
};

const formReducer = (state: FormState = initialState, action: FormAction) => {
    switch (action.type) {
        // Установка флага добавления данных
        case ActionTypes.SET_FORM_NEW_RECORD: 
            return initialState;

        // Изменение наименование работы
        case ActionTypes.SET_FORM_NAME_RECORD: 
            return {
                ...state,
                name: action.payload,
            }

        // Изменение стоимости работы
        case ActionTypes.SET_FORM_COST_RECORD: 
            return {
                ...state,
                cost: action.payload,
            }

        // Установка всех данных для изменения
        case ActionTypes.SET_FORM_RECORD: 
            return action.payload;

        default:
            return state;
    }
};

export default formReducer;
