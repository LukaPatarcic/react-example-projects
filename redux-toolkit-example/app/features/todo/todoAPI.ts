import { baseApi } from '../../core/store/api';

interface Todo {
    id: number;
    title: string;
    description: string;
    status: 'ongoing' | 'done';
}

export const todoApi = baseApi.injectEndpoints({
    endpoints: (builder) => ({
        getTodos: builder.query<Todo[], void>({
            query: () => `/todos`,
        }),
        addTodo: builder.mutation<Todo, Todo>({
            query: (todo) => ({
                url: '/todos',
                method: 'POST',
                body: todo,
            }),
            onQueryStarted(todo, { dispatch, queryFulfilled }) {
                const saveResult = dispatch(
                    todoApi.util.updateQueryData(
                        'getTodos',
                        undefined,
                        (draft) => [...draft, todo]
                    )
                );
                queryFulfilled.catch(saveResult.undo);
            },
        }),
        deleteTodo: builder.mutation<void, number>({
            query: (id) => ({
                url: `/todos/${id}`,
                method: 'DELETE',
            }),
            onQueryStarted(id, { dispatch, queryFulfilled }) {
                const deleteResult = dispatch(
                    todoApi.util.updateQueryData(
                        'getTodos',
                        undefined,
                        (todos) => todos.filter((todo) => todo.id !== id)
                    )
                );
                queryFulfilled.catch(deleteResult.undo);
            },
        }),
        patchTodo: builder.mutation<void, Todo>({
            query: ({ id }) => ({
                url: `/todos/${id}`,
                method: 'PATCH',
            }),
            onQueryStarted({ id, ...todo }, { dispatch, queryFulfilled }) {
                const deleteResult = dispatch(
                    todoApi.util.updateQueryData(
                        'getTodos',
                        undefined,
                        (todos) =>
                            todos.map((item) =>
                                item.id === id ? { id, ...todo } : item
                            )
                    )
                );
                queryFulfilled.catch(deleteResult.undo);
            },
        }),
    }),
});

export const {
    useGetTodosQuery,
    useAddTodoMutation,
    usePatchTodoMutation,
    useDeleteTodoMutation,
    util: { getRunningOperationPromises },
} = todoApi;

export const { getTodos } = todoApi.endpoints;
