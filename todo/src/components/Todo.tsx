import React from 'react';
import { useSetRecoilState } from 'recoil';
import { ITodo, toDoState } from '../atoms';

function Todo({ text, id, category }: ITodo) {
    const setToDos = useSetRecoilState(toDoState);
    const onClick = (newCategory: ITodo['category']) => {
        setToDos((oldToDos) => {
            const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
            const newToDo = { text, id, category: newCategory };
            const newToDos = [...oldToDos];
            newToDos.splice(targetIndex, 1, newToDo);

            return newToDos;
        });
    };
    return (
        <li>
            <span>{text}</span>
            {category !== 'DOING' && (
                <button onClick={() => onClick('DOING')}>Doing</button>
            )}
            {category !== 'TO_DO' && (
                <button onClick={() => onClick('TO_DO')}>To Do</button>
            )}
            {category !== 'DONE' && (
                <button onClick={() => onClick('DONE')}>DONE</button>
            )}
        </li>
    );
}

export default Todo;
