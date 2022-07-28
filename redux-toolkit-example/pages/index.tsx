import React, { FormEvent } from 'react';

import { NextPage } from 'next';

import { wrapper } from '../app/core/store/store';
import {
    getRunningOperationPromises,
    getTodos,
    useAddTodoMutation,
    useDeleteTodoMutation,
    useGetTodosQuery,
    usePatchTodoMutation,
} from '../app/features/todo/todoAPI';

const Todos: NextPage = () => {
    const { data: todos, isLoading } = useGetTodosQuery(undefined, {
        refetchOnFocus: true,
        skip: false,
    });
    const [addTodo, { isLoading: isAddTodoLoading }] = useAddTodoMutation();
    const [patchTodo] = usePatchTodoMutation();
    const [deleteTodo] = useDeleteTodoMutation();
    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const title = formData.get('title')?.toString() || '';
        const description = formData.get('description')?.toString() || '';
        addTodo({
            id: Math.random(),
            title,
            description,
            status: 'ongoing',
        })
            .unwrap()
            .catch((error) => alert(error.error));
    };

    if (isLoading) return <div>Loading...</div>;

    return (
        <div>
            <form onSubmit={onSubmit}>
                <input name="title" required /> <br />
                <textarea name="description" required></textarea> <br />
                <button>{isAddTodoLoading ? 'Loading...' : 'Submit'}</button>
            </form>
            <ul>
                {todos?.map((todo) => (
                    <li
                        key={todo.id}
                        style={
                            todo.status === 'done'
                                ? { textDecoration: 'line-through' }
                                : {}
                        }
                    >
                        {todo.title} - {todo.description} -{' '}
                        <i
                            style={{ cursor: 'pointer' }}
                            onClick={() => deleteTodo(todo.id)}
                        >
                            🗑️
                        </i>
                        <i
                            style={{ cursor: 'pointer' }}
                            onClick={() =>
                                patchTodo({ ...todo, status: 'done' })
                            }
                        >
                            ✅
                        </i>
                    </li>
                ))}
            </ul>
        </div>
    );
};

Todos.getInitialProps = wrapper.getInitialPageProps((store) => async () => {
    await store.dispatch(getTodos.initiate());
    await Promise.all([getRunningOperationPromises()]);
    return {};
});

export default Todos;
