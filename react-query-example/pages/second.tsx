import type { GetServerSideProps, NextPage } from "next";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
import { getTodos } from "../api/todos";
import Link from "next/link";

const Second: NextPage = () => {
    const { isLoading, isError, data } = useQuery(["todos"], getTodos);
    if (isLoading) {
        return <div>Loading Data</div>;
    }
    if (isError) {
        return <div>There was an error</div>;
    }

    return (
        <div>
            <Link href="/">Go to index page</Link>
            <br />
            <Link href="/mutation">Go to mutation page</Link>
            {data?.map((item: any) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

// export const getServerSideProps: GetServerSideProps = async () => {
//     const queryClient = new QueryClient();
//     await queryClient.prefetchQuery(["todos"], getTodos);

//     return {
//         props: {
//             dehydratedState: dehydrate(queryClient),
//         },
//     };
// };


export default Second;
