/* eslint-disable no-unused-vars */

const getStoredProductList = () => {
    const storedListStr = localStorage.getItem('product-list')

    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addToStoredProductList = (id) => {
    const storedList = getStoredProductList();

    if (storedList.includes(id)) {
        alert(id, 'already exists n the product list')
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('product-list', storedListStr);
    }
}

export { addToStoredProductList, getStoredProductList }