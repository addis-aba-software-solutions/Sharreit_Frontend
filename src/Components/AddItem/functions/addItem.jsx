import { routes } from '../../../Config/apiRoutes'
import { sendFormData } from '../../../Config/Networking'
import FormData from 'form-data'

const addItem = async (data, files) => {
    var formData = new FormData()
    
    formData.append("title", data.title)
    formData.append("condition", data.condition)
    formData.append("description", data.description)
    formData.append("price", data.price)
    formData.append("category", data.category)
    formData.append("subCatagory", data.sub_category)
    formData.append("location", data.location)
    formData.append("termAndCondition", data.terms_and_conditions)

    files.forEach((item, index) => {
        formData.append("img" + index, item)
    })

    return await sendFormData(routes.addItem, formData)
}

export default addItem