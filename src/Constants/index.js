import axios from "axios"

export const ListComics = async () => {
    const { data } = await axios.get(`https://developer.marvel.com/v1/public/characters`);
    return data
}