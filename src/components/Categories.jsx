/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const Categories = ({ categories }) => {

    console.log(categories)
    return (
        <div role="tablist" className="tabs tabs-boxed">

            <div className="flex flex-col w-48 p-5 border border-red-600">
                {
                    categories.map(category => <NavLink className='btn btn-outline btn-success rounded-full my-3' key={category.id}>{category.categories}</NavLink>)
                }
            </div>

        </div>

    );
};

export default Categories;