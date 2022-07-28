import React from "react";
import { useFetch } from "../store/fetchStore";
import Link from "next/link";

const FetchDataZustand = () => {
    const data = useFetch((state) => state.data);
    const loading = useFetch((state) => state.loading);
    const hasErrors = useFetch((state) => state.hasErrors);
    const fetchData = useFetch((state) => state.fetch);

    if (loading) {
        return <p>Loading</p>;
    }

    if (hasErrors) {
        return <p>cannot read data</p>;
    }

    return (
        <>
            <div>
                <button onClick={fetchData}>
                    Fetch and Set a data of zustand
                </button>
            </div>
            <Link href="/fetch">Go to first page</Link>
            <div>{data.name}</div>
        </>
    );
};

export default FetchDataZustand;
