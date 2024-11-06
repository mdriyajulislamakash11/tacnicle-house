/* eslint-disable react/prop-types */
import succes from'../assets/Group.png'


const SuccessModal = ({ showModal, closeModal }) => {
    if (!showModal) return null;

    return (
        <div className="fixed inset-0 flex justify-center items-center bg-gray-700 bg-opacity-50 z-50 p-8">
            <div className="bg-white p-6 rounded-3xl w-1/3 text-center">

                <span className='flex justify-center m-8'>
                <img src={succes} className='flex justify-center' alt="" />
                </span>

                <h2 className="text-3xl font-bold my-8">Payment Successfully</h2>
                <p className="mb-5 text-lg font-bold">Thanks for purchasing.</p>
                <p className="mb-5 text-lg font-bold">Total:2449.96</p>
                <button
                    onClick={closeModal}
                    className="btn btn-outline rounded-full w-full text-lg font-bold">
                    Close
                </button>
            </div>
        </div>
    );
};

export default SuccessModal;
