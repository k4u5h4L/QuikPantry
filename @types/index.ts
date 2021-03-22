// make types and interfaces for objects and data

// type Id = string;

export interface ProductType {
    [key: string]: any;
    // [_id: string]: any;
    name: string;
    desc: string;
    oldPrice: number;
    price: number;
    rating: number;
    imageUrl: string;
    stock: boolean;
    tags: [string];
}

export interface OrderInstruType {
    title: string;
    desc: string;
}
