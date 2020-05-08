import { routes } from '../../../Config/apiRoutes'
import { sendGetRequest } from '../../../Config/Networking'

const fetchItems = async () => await sendGetRequest(routes.fetchAllItems)

export default fetchItems