import data from "../data/products.json";

export const getProducts = (category) => {
    if (category) {
        return data.filter(product => product.category === category);
    }
    return data;
};