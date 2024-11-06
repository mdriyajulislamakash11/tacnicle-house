import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";
import { useEffect, useState } from "react";
import image from '../assets/no data.png'

const ProductCards = () => {


    const data = useLoaderData();
    const { category } = useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        if (category) {
            const filterByCategory = [...data].filter(product => product.category == category);
            setProducts(filterByCategory);
        } else {
            setProducts(data)
        }
    }, [category, data]);

    return (
        <>
            {
                products.length === 0 ? <div className="w-full flex justify-center">

                    <img src={image}  
                    className="w-[800px]"
                    alt="" />

                </div> :

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {products.map(product => (
                            <Card key={product.id} product={product}></Card>
                        ))}
                    </div>
            }
        </>
    );
};

export default ProductCards;
