import keys from '../keys'

export const sendGetRequest = async (url) => {
    const requestOptions = {
        method: "GET"
    }
    const response = await fetch(url, requestOptions)
    const fetchedData = await response.json()
    return {
        status: response.status, data: fetchedData
    }
}

export const sendGetRequestWithToken = async (url) => {
    const bearer = "Bearer " + sessionStorage.getItem(keys['TOKEN'])
    const requestOptions = {
        method: "GET",
        headers: {
            'Authorization': "Bearer " + sessionStorage.getItem(keys['TOKEN'])
        }
    }
    const response = await fetch(url, requestOptions)
    const fetchedData = await response.json()
    return {
        status: response.status, data: fetchedData
    }
}

export const sendPostRequest = async (url, data) => {
    console.log(data)
    const requestOptions = {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    const response = await fetch(url, requestOptions)
    const fetchedData = await response.json()
    return {
        status: response.status, data: fetchedData
    }
}

export const sendPostRequestWithToken = async (url, data) => {
    const bearer = "Bearer " + sessionStorage.getItem(keys['TOKEN'])
    const requestOptions = {
        method: "GET",
        headers: {
            'Authorization': bearer,
            'Content-Type': 'application/json'
        }
    }
    return fetch(url, requestOptions).then(res => res.json())
}

export const sendFormData = async (url, route, formData) => {
    
}