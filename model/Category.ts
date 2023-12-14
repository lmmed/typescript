import { Product } from "./Product";

export class Category implements CategoryTypes {
    constructor(
        name: string,
        products: Product[]|[]
    ) {}
}