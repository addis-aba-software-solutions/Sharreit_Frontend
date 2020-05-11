import { sendGetRequestWithCustomParam, sendGetRequest } from '../../../Config/Networking'
import { routes } from '../../../Config/apiRoutes'

const fetchItems = async (category, subCategory) => {
    const customParams = `?category=${category}&subCategory=${subCategory}`
    return await sendGetRequestWithCustomParam(routes.getItemsBySubCategory, customParams)
}
var fetched = 0


export const fetchAllItems = async () => {
    if (fetched === 0) {
        const response = await sendGetRequest(routes.fetchAllItems)
        fetched++
        return response
    }
}

export default fetchItems