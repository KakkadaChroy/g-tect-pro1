import {CardModel, CardPromotionModel, GalleryIgModel, ReadNewCardModel} from "../model";

// bestSeller images
import card1 from '../../../../../_g-tech/assets/images/cards/card1.png';
import card2 from '../../../../../_g-tech/assets/images/cards/card2.png';
import card3 from '../../../../../_g-tech/assets/images/cards/card3.png';
import card4 from '../../../../../_g-tech/assets/images/cards/card4.png';

// card promotion event images
import pro1 from '../../../../../_g-tech/assets/images/cards/pc1.png';
import pro2 from '../../../../../_g-tech/assets/images/cards/pc2.png';

// read new images
import new1 from '../../../../../_g-tech/assets/images/cards/new1.png';
import new2 from '../../../../../_g-tech/assets/images/cards/new2.png';

// gallery ig
import ig1 from '../../../../../_g-tech/assets/images/ig/ig1.png';
import ig2 from '../../../../../_g-tech/assets/images/ig/ig2.png';
import ig3 from '../../../../../_g-tech/assets/images/ig/ig3.png';
import ig4 from '../../../../../_g-tech/assets/images/ig/ig4.png';
import ig5 from '../../../../../_g-tech/assets/images/ig/ig5.png';
import ig6 from '../../../../../_g-tech/assets/images/ig/ig6.png';
import ig7 from '../../../../../_g-tech/assets/images/ig/ig7.png';
import ig8 from '../../../../../_g-tech/assets/images/ig/ig8.png';
import ig9 from '../../../../../_g-tech/assets/images/ig/ig9.png';
import ig10 from '../../../../../_g-tech/assets/images/ig/ig10.png';
import ig11 from '../../../../../_g-tech/assets/images/ig/ig11.png';
import ig12 from '../../../../../_g-tech/assets/images/ig/ig12.png';

// bestSellers
export const cardItems: CardModel[] = [
    {
        id: 1,
        title: 'Product Title',
        description: 'Deserunt non fugiat aute cons',
        image: card1,
        price: '32',
        discountedPrice: '42',
        bestSeller: true,
        category: 'face',
        isNew: true
    },
    {
        id: 2,
        title: 'Product Title',
        description: 'Deserunt non fugiat aute cons',
        image: card2,
        price: '32',
        discountedPrice: '42',
        bestSeller: false,
        category: 'body',
        isNew: true
    },
    {
        id: 3,
        title: 'Product Title',
        description: 'Deserunt non fugiat aute cons',
        image: card3,
        price: '32',
        discountedPrice: '42',
        bestSeller: true,
        category: 'face',
        isNew: false
    },
    {
        id: 4,
        title: 'Product Title',
        description: 'Deserunt non fugiat aute cons',
        image: card4,
        price: '32',
        discountedPrice: '42',
        bestSeller: true,
        category: 'body',
        isNew: true
    },
]


// promotion event
export const eventCardItems: CardPromotionModel[] = [
    {
        id: 1,
        title: 'Relaxing & Pampering',
        description: 'Pariatur ad nisi ex tempor ea',
        image: pro1
    },
    {
        id: 2,
        title: 'Product Title',
        description: 'Pariatur ad nisi ex tempor ea',
        image: pro2
    },
]


// read new items
export const readNewCardItems: ReadNewCardModel[] = [
    {
        id: 1,
        title: 'Anim sint Lorem excepteur commodo',
        date: 'Oct 12, 2022',
        image: new1
    },
    {
        id: 2,
        title: 'Anim sint Lorem excepteur commodo',
        date: 'Oct 12, 2022',
        image: new2
    },
]


// gallery if items
export const galleryIgItems: GalleryIgModel[] = [
    {
        id: 1,
        image: ig1
    },
    {
        id: 2,
        image: ig2
    },
    {
        id: 3,
        image: ig3
    },
    {
        id: 4,
        image: ig4
    },
    {
        id: 5,
        image: ig5
    },
    {
        id: 6,
        image: ig6
    },
    {
        id: 7,
        image: ig7
    },
    {
        id: 8,
        image: ig8
    },
    {
        id: 9,
        image: ig9
    },
    {
        id: 10,
        image: ig10
    },
    {
        id: 11,
        image: ig11
    },
    {
        id: 1,
        image: ig12
    },
]




