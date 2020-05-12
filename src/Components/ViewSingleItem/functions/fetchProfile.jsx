import { routes } from '../../../Config/apiRoutes'
import { sendGetRequestWithParam } from '../../../Config/Networking'

export default async (token) => await sendGetRequestWithParam(routes.fetchSingleItem, { key: "id", value: token })