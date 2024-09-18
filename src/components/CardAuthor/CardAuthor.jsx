import './CardAuthor.css';

export default function CardAuthor() {
    return (
        <div className='author-info'>
            <img src='./images/Author.png' alt='' />
            <p className='nft-author-credit'>
                Creation of <span className='author-name'>Jules Wyvern</span>
            </p>
        </div>
    );
}