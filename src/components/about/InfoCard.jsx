import React from 'react'

export const InfoCard = ({ title, subtitle, icon }) => {
    return (
        <div className="about__box">
            <i class={icon}></i>
            <h3 className="about__title">{title}</h3>
            <span className="about__subtitle">{subtitle}</span>
        </div>
    )
}
