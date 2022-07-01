import React from 'react'
import { useNavigate } from 'react-router-dom'
import './style.css'

const Card = (props) => {
    const navigate = useNavigate();
    return (
        <>
            <div className="card">
                <img src={props.data.strDrinkThumb} className="card-img-top" alt={props.data.strDrinkThumb} />
                <div className="card-title px-3 mt-3 d-flex justify-content-between">
                    <div className="name">
                        {props.data.strDrink}
                    </div>
                    <div className="id">
                        {props.data.idDrink}
                    </div>
                </div>
                <div className="card-body py-2 px-3">
                    Cocktail_glass
                </div>
                <div className="card-footer">
                    <button 
                    onClick={()=>{navigate(`/drink/${props.data.idDrink}`)}}
                    className="button ui bg-olive">Details</button>
                </div>
            </div>

        </>
    )
}

export default Card
