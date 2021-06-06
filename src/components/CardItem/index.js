import React from 'react'
import { Link } from 'react-router-dom';
import './styles.scss';

function CardItem({ src, type, title, subtitle }) {
    return (
        <div className={type === "large" ? "CardItem--Large" : "CardItem--Medium"}>
            <Link to="/services" >
                <div className="CardItem--label">
                    <img src={src} alt={title} />
                </div>
            </Link>
            <h3>{subtitle}</h3>

        </div>
    )
}

export default CardItem
