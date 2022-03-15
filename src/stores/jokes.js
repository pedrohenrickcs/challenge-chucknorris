import create from 'zustand';
import api from '../config/api';

const useJokes = create(set => ({
    joke: null,
    loading: false,

    loadJoke: (param) => {
        set({
            loading: true
        })

        return api.get('/random', {
            params: {
                category: param
            }
        }).then((res) => {
            set({
                joke: res.data
            })
        }).finally(() => {
            set({
                loading: false
            })
        });
    }
}));

export const useJokesCategory = useJokes;