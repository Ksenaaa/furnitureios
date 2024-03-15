export interface Product {
    id: string,
    name: string,
    code: string,
    category: string,
    type: string,
    popularity: number,
    quality: PriceCategory,
    colors: string[],
    characteristics: {
        size: {
            width: number,
            height: number,
            length: number
        },
        other: string
    },
    imgs: string[],
    about: string
}

export interface CardProduct {
    id: string,
    name: string,
    code: string,
    category: string,
    price: number,
    colors: string[],
    img: string
}

export interface PriceCategory {
    king: number,
    queen: number,
    twin: number,
    standart: number
}
