import './CardImage.css';

export default function CardImage() {
    return (
        <div className='image-container'>
            <img src='./images/NFT.jpg' alt='' />
            <div className='overlay-container'>
                <i class="fa-solid fa-eye"></i>
            </div>
        </div>
    );
}