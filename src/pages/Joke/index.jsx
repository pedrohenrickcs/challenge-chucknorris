import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { useJokesCategory } from '../../stores/jokes';
import Loading from '../../components/Loading';
import NotFound from '../NotFound';

const Joke = () => {
    const loadJoke = useJokesCategory(state => state.loadJoke);
    const joke = useJokesCategory(state => state.joke);
    const loading = useJokesCategory(state => state.loading);
    const params = useParams();

    useEffect(() => {
        loadJoke(params.category);
    }, [loadJoke, params.category])

    console.log('params', params);

    if (!joke && !loading) {
        return (
            <NotFound title="Erro ao buscar :(" />
        )
    }

    if (loading) {
        return (
            <Loading />
        )
    }

    const { value } = joke;

    return (
        <div className='container joke'>
            <div className='joke__description'>
                {value}
            </div>

            <a href="/">
                <span className='joke__button'>Back to category</span>
            </a>

            <a onClick={() => {loadJoke(params.category)}}>
                <span className='joke__button'>Reload new Joke</span>
            </a>
        </div>
    )
}

export default Joke;