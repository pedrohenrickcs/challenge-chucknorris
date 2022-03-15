import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useJokesCategory } from '../../stores/jokes';

const Joke = () => {
    const loadJoke = useJokesCategory(state => state.loadJoke);
    const joke = useJokesCategory(state => state.joke);
    const loading = useJokesCategory(state => state.loading);
    const params = useParams();

    useEffect(() => {
        loadJoke(params.category);
    }, [loadJoke, params.category])

    if (!joke && !loading) {
        return (
            <div>erro ao buscar piada</div>
        )
    }

    if (loading) {
        return (
            <div>loading</div>
        )
    }

    const { value } = joke;

    return (
        <div className='container joke'>
            <div className='joke__description'>
                {value}
            </div>

            <button variant="contained" onClick={() => {loadJoke(params.category)}}>
                Reload
            </button>
        </div>
    )
}

export default Joke;