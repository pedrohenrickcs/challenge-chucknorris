import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import { useJokesCategory } from '../../stores/jokes';
import Loading from '../../components/Loading';
import Header from '../../components/Header';
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
        <>
            <Header />
            <div className='container joke'>
                <div className='joke__description'>
                    {value}
                </div>

                <Link to="/">
                    <span className='joke__button'>Back to category</span>
                </Link>

                <Link to="" onClick={() => {loadJoke(params.category)}}>
                    <span className='joke__button'>Reload new Joke</span>
                </Link>
            </div>
        </>
    )
}

export default Joke;