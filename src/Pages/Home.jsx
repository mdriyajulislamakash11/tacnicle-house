import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";


const Home = () => {

    const categories = useLoaderData();

    return (
        <div>
            {/* Banner */}
            <Banner />
            {/* headng */}
            <Heading />
            {/* Categoies tab secton */}
            <div className="flex justify-between w-10/12 mx-auto">
                <Categories categories={categories} />
                <Outlet />
            </div>
            {/* dynamc nasted Comppents */}
        </div>
    );
};

export default Home;