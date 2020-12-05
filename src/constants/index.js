export const API_ROOT = "https://secret-santa-builder-backend.herokuapp.com"

export const GET_HEADERS = () => {
    let token = localStorage.getItem('admin_token')
    return(
        {'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        Accept: 'application/json'})
}

export const GET_REQ = () => {
    return(
        {method: 'GET',
        headers: GET_HEADERS()}
    )
}

export const LOGOUT = () => {
    localStorage.removeItem('admin_token')
}