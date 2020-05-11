import keys from './keys'

export default (token) => {
    localStorage.clear()
    localStorage.setItem(keys['TOKEN'], token)
}