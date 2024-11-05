/* eslint-disable react/jsx-no-undef */
import { useEffect } from "react";
import { getStoredProductList } from "../utility/addToLS";



const Dashboard = () => {

    useEffect(() => {
        const akash = getStoredProductList();
        console.log(akash)
    }, [])

    return (
        <div className="bg-[#9538E2] py-8">
            <div className="text-center">
                <h3 className="text-white font-bold text-3xl mb-6">Dashboard</h3>
                <p className="text-white mb-6">Explore the latest gadgets that will take your experience to the next level. From smart devices to <br /> the coolest accessories, we have it all!</p>

                <button className="text-white mr-4 btn btn-outline font-medium text-lg rounded-full px-16">Cart</button>
                <button className="text-white  btn btn-outline font-medium text-lg rounded-full px-16">Wislist</button>
            </div>

            <div>
           
            </div>
        </div>
    );
};

export default Dashboard;