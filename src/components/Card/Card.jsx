import './Card.css';
import CardImage from './../CardImage/CardImage';
import CardInfo from './../CardInfo/CardInfo'
import CardAuthor from './../CardAuthor/CardAuthor';

export default function Card() {
    return (
        <div className='NFT-Card'>
            <CardImage />
            <CardInfo />
            <CardAuthor />
        </div>
    );
}