import { routes } from '../../../Config/apiRoutes'
import { sendGetRequestWithToken } from '../../../Config/Networking'

export default async () => await sendGetRequestWithToken(routes.getUser)