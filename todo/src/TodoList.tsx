import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

// function TodoList() {
//     const [todo, setValue] = useState('');
//     const onChange = (event: React.FormEvent<HTMLInputElement>) => {
//         const {
//             currentTarget: { value },
//         } = event;
//         setValue(value);
//     };

//     const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
//         event.preventDefault();
//         console.log(todo);
//     };
//     return (
// <div>
//     <form onSubmit={onSubmit}>
//         <input
//             placeholder='Write a todo'
//             value={todo}
//             onChange={onChange}
//         />
//         <button>Add</button>
//     </form>
// </div>
//     );
// }

function TodoList() {
    const { register, watch } = useForm();
    console.log(watch());

    return (
        <div>
            <form>
                <input placeholder='Email' {...register('Email')} />
                <input placeholder='First Name' {...register('First Name')} />
                <input placeholder='Last Name' {...register('Last Name')} />
                <input placeholder='Username' {...register('Username')} />
                <input placeholder='Password' {...register('Password')} />
                <button>Add</button>
            </form>
        </div>
    );
}

export default TodoList;
