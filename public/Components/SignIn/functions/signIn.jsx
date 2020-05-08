import { routes } from '../../../Config/apiRoutes'
import { sendPostRequest } from '../../../Config/Networking/index'

const signIn = async (email, password) => {
    return await sendPostRequest(routes['login'], { email, password })
}

export default signIn