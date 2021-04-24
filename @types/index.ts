// make types and interfaces for objects and data

// type Id = string;

export interface ReviewType {
    user: string;
    rating: number;
    desc: string;
    title: string;
    date: string;
}
export interface ProductType {
    [key: string]: any;
    _id?: string;
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

export interface PdtsBought {
    // [key: string]: any;
    id?: string;
    productName?: string;
    rating?: number;
    tags?: [string];
    imageUrl?: string;
}
export interface OrderType {
    email: string;
    productsBought: [PdtsBought];
}
