type CategoriesInitialState = {
    categories: Category[];
    error: Error | null;
};


type Category = {
    _id: string;
    id: string;
    image: string;
    name: string;
    opening?: string;
};

type CartInitialState = {
    cartItems: CartItem[];
    itemCount: number;
    total: number;
    modal: boolean;
    error: Error | null;
};

type CartItem = {
    id: string;
    name: string;
    price: Price;
    qty: number;
    imageUrl?: string;
};

type ItemsInitialState = {
    items: [];
    error: Error | null;
};

type Item = {
    image: string;
    name: string;
    _id: string;
    description: string;
    price: {
        currency: string;
        value: number;
    };
    tags: array;
    categoryId: string;
};