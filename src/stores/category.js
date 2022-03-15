import create from 'zustand';
import api from '../config/api';

const useCategories = create(set => ({
    categories: [],

    loadCategories: async () => {
        const listCategories = await api.get('/categories');

        return set(() => ({
            categories: listCategories.data
        }))
    }
}));

export const useCategoriesJoker = useCategories;