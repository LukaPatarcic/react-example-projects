import create from "zustand";
import axios from "axios";

interface FetchState {
    data: any;
    loading: boolean;
    hasErrors: boolean;
    fetch: () => Promise<void>;
}

export const useFetch = create<FetchState>((set) => ({
    data: [],
    loading: false,
    hasErrors: false,
    fetch: async () => {
        set(() => ({ loading: true }));
        try {
            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users/1"
            );
            set((state) => ({
                data: (state.data = response.data),
                loading: false,
            }));
        } catch (err) {
            set(() => ({ hasErrors: true, loading: false }));
        }
    },
}));
