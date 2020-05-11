import { routes } from '../../../Config/apiRoutes'
import { sendGetRequestWithToken } from '../../../Config/Networking'

const fetchAllItems = async () => {
    return await sendGetRequestWithToken(routes.fetchAllItems)
}

export default fetchAllItems