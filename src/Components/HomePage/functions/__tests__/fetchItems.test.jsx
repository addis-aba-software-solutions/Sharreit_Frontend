import fetchItems from '../fetchItems'
import { ExpansionPanelActions } from '@material-ui/core'
jest.setTimeout(10000)

test('renders learn react link', async () => {
    const response = await fetchItems("Product Sharing", "Power Tools")
    expect(response.status).toBe(200)
})
  