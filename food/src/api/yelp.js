import Axios from 'axios'
import yelpconfig from '../../yelpconfig'

export default Axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers:{
        Authorization: `Bearer ${yelpconfig.APIKey}`
    }
})