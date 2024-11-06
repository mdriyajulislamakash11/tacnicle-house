/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";
const Categories = ({ categories }) => {

    return (
        <div role="tablist" className="tabs tabs-boxed justify-start items-start w-2/12">

            <div className="flex flex-col  p-5 border w-[230px]">

                <NavLink
                    to='/'

                    className={({ isActive }) =>
                        `tab font-bold border px-4 btn-outline my-3 rounded-full ${isActive ? 'tab-active' : ''}`
                    }
                >
                    All Products
                </NavLink>


                {
                    categories.map(category => <NavLink
                        to={`/category/${category.categories}`}
                        key={category.id}
                        className={({ isActive }) =>
                            `tab font-bold border px-4 btn-outline my-3 rounded-full ${isActive ? 'tab-active' : ''}`
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

