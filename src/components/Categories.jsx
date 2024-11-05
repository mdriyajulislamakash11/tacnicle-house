/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";
const Categories = ({ categories }) => {

    return (
        <div role="tablist" className="tabs tabs-boxed justify-start items-start">

            <div className="flex flex-col  w-56 p-5 border ">
                {
                    categories.map(category => <NavLink
                        to={`/category/${category.categories}`}
                        key={category.id}
                        className={({ isActive }) =>
                            `tab btn btn-outline my-3 ${isActive ? 'tab-active' : ''}`
                          }
                    >
                        {category.categories}
                    </NavLink>)
                }
            </div>
            
        </div>

    );
};

export default Categories;