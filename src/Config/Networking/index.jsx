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
    const bearer = "Bearer " + localStorage.getItem(keys['TOKEN'])
    const requestOptions = {
        method: "GET",
        headers: {
            'Authorization': bearer
        }
    }
    const response = await fetch(url, requestOptions)
    const fetchedData = await response.json()
    
    return {
        status: response.status, data: fetchedData
    }
}

export const sendGetRequestWithParam = async (url, param) => {
    const bearer = "Bearer " + localStorage.getItem(keys['TOKEN'])
    const requestOptions = {
        method: "GET",
        headers: {
            'Authorization': "Bearer " + bearer
        }
    }
    const response = await fetch(url + `?${param.key}=${param.value}`, requestOptions)
    const fetchedData = await response.json()
    return {
        status: response.status, data: fetchedData
    }
}

export const sendGetRequestWithCustomParam = async (url, param, requireToken = true) => {
    const bearer = "Bearer " + localStorage.getItem(keys['TOKEN'])
    var requestOptions
    if (requireToken) {
        requestOptions = {
            method: "GET",
            headers: {
                'Authorization': "Bearer " + bearer
            }
        }
    } else {
        requestOptions = {
            method: "GET"
        }
    }
    const response = await fetch(url + param, requestOptions)
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
        },
        body: data
    }
    return fetch(url, requestOptions).then(res => res.json())
}

export const sendFormData = async (url,  formData) => {
    const bearer = "Bearer " + localStorage.getItem(keys['TOKEN'])
    var requestOptions = {
        method: "POST",
        headers: {
            'Authorization': bearer
        },
        body: formData
    }

    const response = await fetch(url, requestOptions)
    console.log(response)
    const fetchedData = await response.json()
    return {
        status: response.status, data: fetchedData
    }
}