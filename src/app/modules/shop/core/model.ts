import {ID} from "../../../../_g-tech/helpers/ts/model";
import {CardModel} from "../../home/core/model";

export interface IngredientCardModel {
    id?: ID;
    image?: string;
    title?: string;
    description?: string;
}

export interface OrderItems {
    product?: CardModel;
    total?: number;
    order?: number;
}

export interface CartItem {
    product: CardModel;
    quantity: number;
    size: string;
    total?: number;
}