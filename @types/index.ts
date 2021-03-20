// make types and interfaces for objects and data

// type Id = string;

export interface Item {
    [key: string]: any;
    name: string;
    desc: string;
    price: number;
}
