import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { useCategoriesJoker } from '../../stores/category';

import Header from '../../components/Header';

const Home = () => {
    const loadCategories = useCategoriesJoker(state => state.loadCategories);
    const categories = useCategoriesJoker(state => state.categories);

    useEffect(() => {
        loadCategories();
    }, [loadCategories])

    return (
        <>
            <Header />
            <div className='container home'>
                <ul className='home__categories'>
                    {categories.map((item, index) => {
                        return <Link key={index} to={`/joke/${item}`} className="home__items">
                                    <li>
                                        {item}
                                    </li>
                                </Link>
                    })}
                </ul>
            </div>
        </>
    )
}

export default Home;