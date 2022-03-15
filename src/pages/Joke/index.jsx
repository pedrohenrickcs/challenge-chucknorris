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

    return (
        <>
            <Header />
            <div className='container joke'>
                {!loading ? (
                    <div className='joke__description'>
                        {joke?.value}
                    </div>
                ) : (
                    <Loading />
                )}

                {!joke?.value && !loading && (
                    <NotFound title="Erro ao buscar :(" />
                )}

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