import React from 'react'
import CardItem from '../CardItem'
import './styles.scss'
// import img1 from '../../../public/images/img-1.jpg';

function Card(props) {
    return (
        <section className="Card">
            <h2 className="Card__title">Check out these EPIC Destinations!</h2>
            <ul className="Card__list">
                <li className="Card__item">
                    <CardItem src='images/img-9.jpg' type="large" title="Adventune"
                        subtitle="Explore the hidden waterfall deep inside the Amazon Jungle" />
                </li>
                <li className="Card__item">
                    <CardItem src='images/img-8.jpg' type="large" title="Adventune"
                        subtitle="Explore the hidden waterfall deep inside the Amazon Jungle" />
                </li>
            </ul>
            <ul className="Card__list">
                <li className="Card__item">
                    <CardItem src='images/img-2.jpg' type="medium" title="Adventune"
                        subtitle="Explore the hidden waterfall deep inside the Amazon Jungle" />
                </li>
                <li className="Card__item">
                    <CardItem src='images/img-3.jpg' type="medium" title="Adventune"
                        subtitle="Explore the hidden waterfall deep inside the Amazon Jungle" />
                </li>
                <li className="Card__item">
                    <CardItem src='images/img-4.jpg' type="medium" title="Adventune"
                        subtitle="Explore the hidden waterfall deep inside the Amazon Jungle" />
                </li>
            </ul>
        </section>

    )
}


export default Card

