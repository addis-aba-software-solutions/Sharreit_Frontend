import { sendGetRequestWithCustomParam, sendGetRequest } from '../../../Config/Networking'
import { routes } from '../../../Config/apiRoutes'

const fetchItems = async (category, subCategory) => {
    const customParams = `?category=${category}&subCategory=${subCategory}`
    return await sendGetRequestWithCustomParam(routes.getItemsBySubCategory, customParams)
}

export const fetchAllItems = async () => await sendGetRequest(routes.fetchAllItems)

export default fetchItems