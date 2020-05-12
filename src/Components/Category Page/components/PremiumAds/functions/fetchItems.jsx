import { sendGetRequest } from '../../../../../Config/Networking'
import { routes } from '../../../../../Config/apiRoutes'

export default async () => await sendGetRequest(routes.fetchAllItems)