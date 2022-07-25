import React from "react";
import useStore from "../store/fetchStore";
import Link from "next/link";

const FetchDataZustand = () => {
    const data = useStore((state) => state.data);
    const loading = useStore((state) => state.loading);
    const hasErrors = useStore((state) => state.hasErrors);
    const fetchData = useStore((state) => state.fetch);

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
            <Link href="/fetch-second">Go to second page</Link>
            <div>{data.name}</div>
        </>
    );
};

export default FetchDataZustand;
