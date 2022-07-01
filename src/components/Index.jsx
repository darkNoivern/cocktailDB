import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import './style.css'
import Home from './Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Cocktail from './Cocktail'

const Index = () => {

    const [data, setData] = useState([]);
    async function getData() {

        let responseJsonData = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass`
        );
        console.log(responseJsonData.data.drinks);
        setData(responseJsonData.data.drinks);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <Router>
                <Navbar />
                <Routes>
                    <Route exact path='/' element={<Home data={data} />} />
                    <Route exact path='/drink/:id' element={<Cocktail />} />
                </Routes>
            </Router>
        </>
    )
}

export default Index
