import type { GetServerSideProps, NextPage } from "next";
import { dehydrate, QueryClient, useQuery } from "@tanstack/react-query";
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
            <br />
            <Link href="/mutation">Go to mutation page</Link>
            {data?.map((item: any) => (
                <div key={item.id}>{item.title}</div>
            ))}
        </div>
    );
};

Home.getInitialProps = async () => {
    const queryClient = new QueryClient();

    await queryClient.prefetchQuery(["todos"], getTodos);
    return {
        props: {
            dehydratedState: dehydrate(queryClient),
        },
    };
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

export default Home;
