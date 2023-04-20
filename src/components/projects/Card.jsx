import React from 'react'
import './Card.css'

export const Card = ({data}) => {

    const {title, description, image, link} = data
    return (
        <div className="card__container container grid">
            <div className="card__content">
                <div>
                    
                    <h3 className="card__title">{title}</h3>
                    <p>{description}</p>
                </div>
            </div>
        </div>
    )
}
