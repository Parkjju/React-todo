import React, { useState } from 'react';

function TodoList() {
    const [todo, setValue] = useState('');
    const onChange = (event: React.FormEvent<HTMLInputElement>) => {
        const {
            currentTarget: { value },
        } = event;
        setValue(value);
    };

    const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(todo);
    };
    return (
        <div>
            <form onSubmit={onSubmit}>
                <input
                    placeholder='Write a todo'
                    value={todo}
                    onChange={onChange}
                />
                <button>Add</button>
            </form>
        </div>
    );
}

export default TodoList;
