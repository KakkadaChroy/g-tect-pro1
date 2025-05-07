import {ID} from "../../../../_g-tech/helpers/ts/model";

// tab model
export interface TabContentModel {
    label: string;
    filter?: string;
}

// bestseller model
export interface CardModel {
    id?: ID;
    image?: string;
    title?: string;
    description?: string;
    price?: string;
    discountedPrice?: string;
    bestSeller?: boolean;
    category?: 'face' | 'body';
    isNew?: boolean;
}

// event promotion model
export interface CardPromotionModel {
    id?: ID;
    image?: string;
    title?: string;
    description?: string;
}

// read new card
export interface ReadNewCardModel {
    id: ID;
    image?: string;
    title?: string;
    date?: string;
}


// gallery ig
export interface GalleryIgModel {
    id?: ID;
    image?: string;
}