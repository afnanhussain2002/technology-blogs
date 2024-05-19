// get item from localstorage
const getItemFromLS = () =>{
    const getStringData = localStorage.getItem('items')
    if (getStringData) {
        return JSON.parse(getStringData)
    }
    return []
}

const saveDataToLS = (item) =>{
    const itemStringified = JSON.stringify(item)
    localStorage.setItem('items', itemStringified)
}

// add item to localstorage
const addDataToLS = id =>{
    const item = getItemFromLS()
    item.push(id)
    saveDataToLS(item)

}

// remove data from localstorage

const removeDataFromLS = id =>{
    const items = getItemFromLS()
    const remainingItem = items.filter(idx => idx !== id)
    saveDataToLS(remainingItem)

}

export {getItemFromLS, addDataToLS, removeDataFromLS}