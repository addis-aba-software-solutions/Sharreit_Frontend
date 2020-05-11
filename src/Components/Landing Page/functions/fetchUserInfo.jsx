import { routes } from '../../../Config/apiRoutes'
import { sendGetRequestWithToken } from '../../../Config/Networking'

const fetchUserInfo = async () => {
    const { data } = await sendGetRequestWithToken(routes.getUser)
    return { firstName: data.credentials.firstName, lastName: data.credentials.lastName }
}

export default fetchUserInfo