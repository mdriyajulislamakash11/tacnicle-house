import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Heading from "../components/Heading";
import Categories from "../components/Categories";


const Home = () => {

    const categories = useLoaderData();

    console.log(categories)

    return (
        <div>
            {/* Banner */}
            <Banner />
            {/* headng */}
            <Heading />
            {/* Categoies tab secton */}
            <Categories categories={categories}/>
            {/* dynamc nasted Comppents */}
        </div>
    );
};

export default Home;