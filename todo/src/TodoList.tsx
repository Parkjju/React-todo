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
interface IForm {
    email: string;
    username: string;
    password1: string;
    password2: string;
    firstName: string;
    lastName: string;
    extraError?: string;
}

function TodoList() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        setError,
    } = useForm<IForm>({
        defaultValues: {
            email: '@naver.com',
        },
    });

    const onValid = (data: IForm) => {
        if (data.password1 !== data.password2) {
            setError(
                'password1',
                { message: 'Password are not the same.' }
                // { shouldFocus: true }
            );
        }
    };

    return (
        <div>
            <form
                onSubmit={handleSubmit(onValid)}
                style={{ display: 'flex', flexDirection: 'column' }}
            >
                <h1>{errors?.extraError?.message}</h1>
                <input
                    placeholder='Email'
                    {...register('email', {
                        required: {
                            value: true,
                            message: 'Required!!!!',
                        },
                        pattern: {
                            value: /[A-Za-z0-9._%+-]+@naver\.com/g,
                            message: 'Only naver.com emails allowed',
                        },
                    })}
                />
                <span>{errors?.email?.message}</span>
                <input
                    placeholder='First Name'
                    {...register('firstName', {
                        validate: (value) =>
                            !value.includes('jun') || 'jun 포함하지마',
                    })}
                />
                <span>{errors?.firstName?.message}</span>
                <input placeholder='Last Name' {...register('lastName')} />
                <input
                    placeholder='Username'
                    {...register('username', {
                        minLength: {
                            value: 10,
                            message: '10글자 이상 입력하세요!',
                        },
                        required: {
                            value: true,
                            message: 'Required!!!',
                        },
                    })}
                />
                <input placeholder='password' {...register('password1')} />
                <span style={{ color: 'white' }}>
                    {errors?.password1?.message}
                </span>
                <input placeholder='password' {...register('password2')} />
                <button>Add</button>
            </form>
        </div>
    );
}

export default TodoList;
