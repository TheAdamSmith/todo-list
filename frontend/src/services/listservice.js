/*
Service for communcation to the server
Came from code wrtten for the fullstack web development course
by: Matt Luukai
*/
import axios from 'axios'

const baseUrl = '/api/todolist'

//retrieves all items stored
const getAll = () => {
    const request = axios.get(baseUrl);

    return request.then(response => response.data)
}

//post a new item
const create = newObject => {
    const request =  axios.post(baseUrl, newObject);

    return request.then(response => response.data)
}

//put a new item 
const update = (id, newObject) => {
    const request = axios.put(`${baseUrl}/${id}`, newObject);

    return request.then(response => response.data)
}

//delete item
const deleteItem = id => {
    const request = axios.delete(`${baseUrl}/${id}`)

    return request.then(response => response.data)
}

export default {getAll, create, update, deleteItem}