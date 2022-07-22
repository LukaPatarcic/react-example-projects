import type { NextPage } from 'next'
import {useQuery} from "@tanstack/react-query";
import {getTodos} from "../api";
import Link from "next/link";

const Second: NextPage = () => {
	const { isLoading, isError, data} = useQuery(['todos'], getTodos)
	if(isLoading) {
		return <div>Loading Data</div>
	}
	if(isError) {
		return <div>There was an error</div>
	}

	return (
		<div>
			<Link href="/">Go to index page</Link>
			{data?.map((item: any) => <div key={item.id}>{item.title}</div>)}
		</div>
	)
}

export default Second
