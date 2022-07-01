import React from 'react'
import Card from './Card'
import './style.css'

const Home = (props) => {
    return (
        <>
            <div className="row mx-0">
                {
                    props.data.map((cocktail, index) => {
                        return (
                            <div key={index} className="col col-lg-4 col-md-6 col-12 mb-4">
                                <Card data={cocktail} />
                            </div>
                        )
                    })
                }
            </div>
        </>
    )
}

export default Home
