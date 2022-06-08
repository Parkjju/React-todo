import { useRecoilValue } from 'recoil';
import CreateTodo from './CreateTodo';
import { toDoState } from '../atoms';
import Todo from './Todo';

function TodoList() {
    const toDos = useRecoilValue(toDoState);

    return (
        <div>
            <h1>To Dos</h1>
            <hr />
            <CreateTodo />
            <ul>
                {toDos.map((todo) => (
                    <Todo key={todo.id} {...todo} />
                ))}
            </ul>
        </div>
    );
}

export default TodoList;
