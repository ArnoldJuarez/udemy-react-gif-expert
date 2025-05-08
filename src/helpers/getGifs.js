export const getGifs = async(category) =>{

    const url = `https://api.giphy.com/v1/gifs/search?api_key=gbEgYU9SkASjKHj7tAHgw7haY871gG3C&q=${category}&limit=5`
    const resp = await fetch( url);
    //console.log(resp);
    const {data = []}=await resp.json();
    //console.log(data);
    const gifs = data.map( img =>({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    })
    );

    return gifs;

}
