import {useMutation} from "@tanstack/react-query";
import {addTodo} from "../api/todos";

const Mutation = () => {
	const mutation = useMutation((newTodo: any) => addTodo(newTodo))

	return (
		<div>
			{mutation.isLoading ? (
				'Adding todo...'
			) : (
				<>
					{mutation.isError ? (
						<div>An error occurred: {(mutation.error as any).message}</div>
					) : null}

					{mutation.isSuccess ? <div>Todo added!</div> : null}

					<button
						onClick={() => {
							mutation.mutate({ id: new Date(), title: 'Do Laundry' })
						}}
					>
						Create Todo
					</button>
				</>
			)}
		</div>
	)
}

export default Mutation;
