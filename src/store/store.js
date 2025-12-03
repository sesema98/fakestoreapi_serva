import {create} from 'zustand';
import { fakeStoreApi } from '../services/fakeStoreApi';

export const useStore = create((set) => ({
    products: [],
    isLoading: false,
    error: null,

    fetchProducts: async () => {
        set({isLoading: true, error: null});
        try {
            const data = await fetch(fakeStoreApi.getProducts);
            set({products: data, isLoading: false});
        } catch (error) {
            set({error: error.message, isLoading: false});
        }
    },
}));