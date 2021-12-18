const getData = (str) => {
    return fetch('https://test-2f507-default-rtdb.firebaseio.com/goods.json')
        .then((response) => {
            return response.json();
        })
}

export default getData;