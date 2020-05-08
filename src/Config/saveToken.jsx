import keys from './keys'

export default (token) => {
    sessionStorage.clear()
    sessionStorage.setItem(keys['TOKEN'], token)
}