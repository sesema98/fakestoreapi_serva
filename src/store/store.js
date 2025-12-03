import {create} from 'zustand';
import { fakeStoreApi } from '../services/fakeStoreApi';

export const useStore = create((set) => ({
    products: [],
    isLoading: false,
    error: null,

    fetchProducts: async () => {
        set({isLoading: true, error: null});
        try {
            const data = await fakeStoreApi.getProducts();
            set({products: data});
        } catch (error) {
            set({error: error.message});
        } finally {
            set({isLoading: false});
        }
    },
}));
