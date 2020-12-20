interface ProductItem extends React.HTMLAttributes<T> {
    productId: number;
    productName: string;
    stars: number;
    imageUrl: string;
    listPrice: number;
    price: number;
    installments: {
        quantity: number;
        value: number;
    };
};

export default ProductItem