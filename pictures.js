async function fetchDataAsync(url) {
    const response = await fetch(url);

    return await response.json()
}



let pictures=await fetchDataAsync('https://picsum.photos/v2/list');
// localStorage.setItem('pictures',JSON.stringify(pictures))

export default pictures
