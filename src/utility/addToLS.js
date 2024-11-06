
import toast from "react-hot-toast";

// Fetch product list from localStorage
const getStoredProductList = () => {
    const storedListStr = localStorage.getItem('product-list');
    return storedListStr ? JSON.parse(storedListStr) : [];
};

// Add product to list with toast notification
const addToStoredProductList = (id) => {
    const storedList = getStoredProductList();

    if (storedList.includes(id)) {
        toast.error('This product is already in your product list.');
    } else {
        storedList.push(id);
        localStorage.setItem('product-list', JSON.stringify(storedList));
        toast.success('Product added to your list!');
    }
};

// Fetch wishlist from localStorage
const getStoredProductWishList = () => {
    const storedWishListStr = localStorage.getItem('wish-list');
    return storedWishListStr ? JSON.parse(storedWishListStr) : [];
};

// Add product to wishlist with toast notification
const addToStoredProductWishList = (id) => {
    const storedWishList = getStoredProductWishList();

    if (storedWishList.includes(id)) {
        toast.error('This product is already in your wishlist.');
    } else {
        storedWishList.push(id);
        localStorage.setItem('wish-list', JSON.stringify(storedWishList));
        toast.success('Product added to your wishlist!');
    }
};

export {
    addToStoredProductList,
    getStoredProductList,
    addToStoredProductWishList,
    getStoredProductWishList
};
