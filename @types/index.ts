// make types and interfaces for objects and data

// type Id = string;

export interface ReviewType {
    user: string;
    rating: number;
    desc: string;
    title: string;
    date: Date;
}
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
    reviews: [ReviewType];
}

export interface OrderInstruType {
    title: string;
    desc: string;
}

export interface AddressType {
    address: string;
    country: string;
    email: string;
    fname: string;
    lname: string;
    notes?: string;
    phone: number;
    state: string;
    town: string;
    zip: number;
}

interface PdtsBought {
    productName: string;
    rating: number;
    tags: [string];
}
export interface OrderType {
    email: string;
    productsBought: [PdtsBought];
}
