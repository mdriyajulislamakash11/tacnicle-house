import React, { useState } from "react";
import toast from "react-hot-toast";
import { FaStar } from "react-icons/fa";

const Review = () => {
    const [reviews, setReviews] = useState([]);
    const [userReview, setUserReview] = useState("");
    const [userName, setUserName] = useState("");
    const [rating, setRating] = useState(0);

    
    const handleSubmit = (e) => {
        e.preventDefault();
        if (userReview && userName && rating) {
            const newReview = {
                id: Date.now(),
                name: userName,
                review: userReview,
                rating: rating,
            };
            setReviews([newReview, ...reviews]);
            setUserReview("");
            setUserName("");
            setRating(0);
            toast.success("Review submitted successfully!");
        } else {
            toast.error("Please complete all fields before submitting.");
        }
    };

  
    const handleRating = (rate) => {
        setRating(rate);
    };

    return (
        <div className="review-section py-8 ">

            <div className="text-center bg-purple-600 py-4 rounded-2xl">
                <h1 className="text-3xl font-bold text-white mb-4">Share Your Experience with <br /> Gadget Heaven!</h1>
                <p className="text-white w-6/12 mx-auto">Description:
                    Your feedback is incredibly valuable to us. Let us know how the product worked for you and how we can enhance your experience. Your ratings and reviews help us deliver even better products and services in the future!</p>
            </div>

            <div className="w-10/12 mx-auto my-20">
                <h2 className="text-xl font-bold mb-6">Customer Reviews</h2>

                <form onSubmit={handleSubmit} className="mb-8">
                    <input
                        type="text"
                        placeholder="Your Name"
                        value={userName}
                        onChange={(e) => setUserName(e.target.value)}
                        className="input input-bordered w-full mb-4"
                    />
                    <textarea
                        placeholder="Write your review..."
                        value={userReview}
                        onChange={(e) => setUserReview(e.target.value)}
                        className="textarea textarea-bordered w-full mb-4"
                    />

                    <div className="flex items-center mb-4">
                        <span className="mr-2 text-lg">Rating:</span>
                        {[1, 2, 3, 4, 5].map((star) => (
                            <FaStar
                                key={star}
                                onClick={() => handleRating(star)}
                                className={`cursor-pointer text-2xl ${star <= rating ? "text-yellow-500" : "text-gray-300"
                                    }`}
                            />
                        ))}
                    </div>

                    <button type="submit" className="btn btn-primary w-full">
                        Submit Review
                    </button>
                </form>

            
                <div className="reviews-list">
                    {reviews.length > 0 ? (
                        reviews.map((review) => (
                            <div key={review.id} className="review-card p-4 mb-4 border rounded">
                                <h3 className="text-xl font-semibold">{review.name}</h3>
                                <div className="flex items-center mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <FaStar
                                            key={i}
                                            className={i < review.rating ? "text-yellow-500" : "text-gray-300"}
                                        />
                                    ))}
                                </div>
                                <p className="text-md italic">{review.review}</p>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No reviews yet. Be the first to leave a review!</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Review;
