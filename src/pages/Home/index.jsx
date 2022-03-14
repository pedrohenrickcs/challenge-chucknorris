import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useCategoriesJoker } from '../../stores/category';

const Home = () => {
    const loadCategories = useCategoriesJoker(state => state.loadCategories);
    const categories = useCategoriesJoker(state => state.categories);

    useEffect(() => {
        loadCategories();
    }, [loadCategories])

    console.log('categories', categories);

    return (
        <ul>
            {categories.map((item, index) => {
                return <li key={index}>
                            <Link to={`/joke/${item}`}>{item}</Link>
                        </li>
            })}
        </ul>
    )
}

export default Home;