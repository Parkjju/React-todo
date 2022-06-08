import { useForm } from 'react-hook-form';
import { useSetRecoilState } from 'recoil';
import { toDoState } from '../atoms';

interface IForm {
    todo: string;
}

function CreateTodo() {
    const {
        handleSubmit,
        formState: { errors },
        register,
        setError,
        setValue,
    } = useForm<IForm>();

    const setToDos = useSetRecoilState(toDoState);

    const onValid = ({ todo }: IForm) => {
        if (todo.length > 10) {
            setError('todo', { message: ' 짧게써' });
        }

        setToDos((oldToDos) => [
            { text: todo, category: 'TO_DO', id: Date.now() },
            ...oldToDos,
        ]);
        console.log(todo);
        setValue('todo', '');
    };

    return (
        <form onSubmit={handleSubmit(onValid)}>
            <input
                placeholder='Write a todo'
                {...register('todo', {
                    required: {
                        value: true,
                        message: 'Required!',
                    },
                })}
            />
            <button>Add</button>
            <span style={{ color: 'white' }}>{errors?.todo?.message}</span>
        </form>
    );
}

export default CreateTodo;
