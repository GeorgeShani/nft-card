import './Card.css';
import CardImage from './CardImage';
import CardInfo from './CardInfo'
import CardAuthor from './CardAuthor';

export default function Card() {
    return (
        <div className='NFT-Card'>
            <CardImage />
            <CardInfo />
            <CardAuthor />
        </div>
    );
}