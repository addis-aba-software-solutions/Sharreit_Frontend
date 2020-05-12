import { routes } from '../../../Config/apiRoutes'
import { sendGetRequestWithToken } from '../../../Config/Networking'

const getMyItems = async () => {
    const response = await sendGetRequestWithToken(routes.getUser)
    console.log(response)
    return response
}

export default getMyItems
