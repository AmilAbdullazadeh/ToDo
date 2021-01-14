import React, {createContext, useReducer} from 'react';
import useTodoState from "../hooks/useTodoState";
import reducerTodos from "../reducers/reducerTodos";
import {useLocalStorageReducer} from "../reducers/useLocalStorageReducer";

const defaultTodos = [
    {id: 1, task: "JS Fundamentals", completed: false},
    {id: 2, task: "React", completed: false}
]

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const [todos, dispatch] = useLocalStorageReducer(
        "todos",
        defaultTodos,
        reducerTodos
    )
    return (
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    )
}