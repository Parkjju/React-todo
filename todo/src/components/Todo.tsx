import { ITodo } from '../atoms';

function Todo({ text, id, category }: ITodo) {
    return (
        <li key={id}>
            <span>{text}</span>
            <button>Done</button>
            <button>Doing</button>
            <button>To Do</button>
            {category}
        </li>
    );
}

export default Todo;
