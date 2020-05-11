import keys from './keys'

export default (token) => {
    sessionStorage.setItem(keys['TOKEN'], token)
}