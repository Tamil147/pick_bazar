export const loadDataFromStorage = () => {
    let data = JSON.parse(localStorage.getItem("cart"))
    data = data ? data : []

    console.log(data);

    return data
}


export const updateDataInLocalStorage = (data) => {
    let item = JSON.stringify(data)

    localStorage.setItem("cart", item)

}