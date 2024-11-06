import { Link, Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";


const Home = () => {

    const categories = useLoaderData();

    return (
        <div>
            {/* Banner */}
            <div className="w-11/12 mx-auto rounded-b-2xl" >
                <div className="">
                    <Banner />
                </div>
                {/* headng */}
                <div>
                    <Heading />
                </div>
            </div>
            {/* Categoies tab secton */}
            <div className="flex w-10/12 mx-auto">
                <Categories categories={categories} />
                <Outlet />
            </div>
            {/* dynamc nasted Comppents */}
        </div>
    );
};

export default Home;