import type { NextPage } from "next";
import { useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/todos";
import Link from "next/link";

const Home: NextPage = () => {
    const { isLoading, isError, data } = useQuery(["todos"], getTodos);
    if (isLoading) {
        return <div>Loading Data</div>;
    }
    if (isError) {
        return <div>There was an error</div>;
    }

    return (
        <div>
            <Link href="/second">Go to second page</Link>
            {data?.map((item: any) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

export default Home;
