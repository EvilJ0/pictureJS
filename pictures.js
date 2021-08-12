async function fetchDataAsync(url) {
    const response = await fetch(url);

    return await response.json()
}

let pictures=await fetchDataAsync('https://picsum.photos/v2/list');


export default pictures
