import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './style.css'
import { useParams } from 'react-router-dom'

const Cocktail = () => {
    const navigate = useNavigate();
    const { id } = useParams();
    const [data, setData] = useState([]);

    async function getData() {

        let responseJsonData = await axios.get(
            `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        );
        console.log(responseJsonData.data.drinks[0]);
        setData(responseJsonData.data.drinks[0]);
    }

    useEffect(() => {
        getData();
    }, [])

    return (
        <>
            <div className="d-flex mt-5 mb-3 justify-content-center">
                <button
                    onClick={() => { navigate('/') }}
                    className="ui button bg-olive">
                    Go Back
                </button>
            </div>
            <div className="my-5 flexy banner-name">
            {data.strDrink}
            </div>
            <div className="row mx-0">
                <div className="col col-lg-5 col-12 mb-5 flexy">
                    <img className='cocktail-img' src={data.strDrinkThumb} alt={data.strDrink} />
                </div>
                <div className="col col-lg-7 mb-5 col-12">
                    <div className='my-4'>
                        <span className="coacktail-details-questions p-2">
                            Name :
                        </span>
                        <span className="coacktail-details-answers ms-2">
                            {data.strDrink}
                        </span>
                    </div>
                    <div className='my-4'>
                        <span className="coacktail-details-questions p-2">
                            Category :
                        </span>
                        <span className="coacktail-details-answers ms-2">
                            {data.strCategory}
                        </span>
                    </div>
                    <div className='my-4'>
                        <span className="coacktail-details-questions p-2">
                            Info :
                        </span>
                        <span className="coacktail-details-answers ms-2">
                            {data.strAlcoholic}
                        </span>
                    </div>
                    <div className='my-4'>
                        <span className="coacktail-details-questions p-2">
                            Glass :
                        </span>
                        <span className="coacktail-details-answers ms-2">
                            {data.strGlass}
                        </span>
                    </div>
                    <div className='my-4'>
                        <span className="coacktail-details-questions p-2">
                            Instructions :
                        </span>
                        <span className="coacktail-details-answers ms-2">
                            {data.strInstructions}
                        </span>
                    </div>
                    <div className='my-4'>
                        <span className="coacktail-details-questions p-2">
                            Ingredients :
                        </span>
                        <span className="coacktail-details-answers ms-2">
                            {data.strIngredient1 ? data.strIngredient1 : ``}
                        </span>
                        <span className="coacktail-details-answers ms-2">
                            {data.strIngredient2 ? data.strIngredient2 : ``}
                        </span>
                        <span className="coacktail-details-answers ms-2">
                            {data.strIngredient3 ? data.strIngredient3 : ``}
                        </span>
                        <span className="coacktail-details-answers ms-2">
                            {data.strIngredient4 ? data.strIngredient4 : ``}
                        </span>
                        <span className="coacktail-details-answers ms-2">
                            {data.strIngredient5 ? data.strIngredient5 : ``}
                        </span>
                    </div>
                    
                </div>
            </div>

        </>
    )
}

export default Cocktail
