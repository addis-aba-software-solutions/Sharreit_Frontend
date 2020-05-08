import { routes } from '../../../Config/apiRoutes'
import { sendPostRequestWithToken } from '../../../Config/Networking'

const fetchUserInfo = async () => {
    const response = await sendPostRequestWithToken(routes.getUser, null)
    console.log(response)
}

export default fetchUserInfo