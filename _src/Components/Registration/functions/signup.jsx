import { routes } from '../../../Config/apiRoutes'
import { sendPostRequest } from '../../../Config/Networking'

const signup = async (firstPage, secondPage, thirdPage) => {
    const requestBody = {
        firstName: firstPage.firstName,
        lastName: firstPage.lastName,
        email: firstPage.email,
        password: firstPage.password,
        streetAddress: firstPage.street_address_1,
        streetAddress2: firstPage.street_address_2,
        state: firstPage.province,
        zipcode: firstPage.zip_code,
        country: firstPage.country,
        telegram: secondPage.telegram,
        facebook: secondPage.facebook,
        whatsapp: secondPage.whatsapp,
        phoneNumber: thirdPage.phoneNumber,
        gender: thirdPage.gender,
        birthDay: thirdPage.birthday
    }
    return await sendPostRequest(routes['signup'], requestBody)
}

export default signup