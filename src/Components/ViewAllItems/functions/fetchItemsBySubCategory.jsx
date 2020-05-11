import { routes } from '../../../Config/apiRoutes'
import { sendGetRequestWithCustomParam } from '../../../Config/Networking'

const fetchItemsBySubCategory = async (category, subCategory) => {
    const customParams = `?category=${category}&subCategory=${subCategory}`
    return await sendGetRequestWithCustomParam(routes.getItemsBySubCategory, customParams)
}

export default fetchItemsBySubCategory