import { routes } from '../../../Config/apiRoutes'
import { sendGetRequestWithParam } from '../../../Config/Networking'

const fetchItem = async (token) => {
    return await sendGetRequestWithParam(routes.fetchSingleItem, { key: "id", value: token })
}

export default fetchItem