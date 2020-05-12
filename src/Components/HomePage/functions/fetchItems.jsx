import { sendGetRequest } from '../../../Config/Networking'
import { routes } from '../../../Config/apiRoutes'

const fetchItems = async (category, subCategory) => {
    const customParams = `?category=${category}&subCategory=${subCategory}`
    const url = new URL(routes.getItemsBySubCategory)
    url.searchParams.append("category", category)
    url.searchParams.append("subcategory", subCategory)
    console.log(url.href)
    return await sendGetRequest(url.href)
}


export const fetchAllItems = async () => await sendGetRequest(routes.fetchAllItems)

export default fetchItems