export const API_ROOT = "http://localhost:3001"

export const GET_HEADERS = () => {
    let token = localStorage.getItem('adminToken')
    return(
        {'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
        Accept: 'application/json'})
}