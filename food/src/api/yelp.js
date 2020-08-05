import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.yelp.com/v3/businesses',
    headers: {
        Authorization: 'Bearer 2uepek7sSpDXy_JqKpGhqIEZtw_rDZds_66GypvcYoJARr7zui4IfeJKpF5sRX4aJYpMo7cQ-tB-GizZhEJSjPLh764vvCNFLh8XTjFkuZk4Z-olPtvv6VsK7JwlX3Yx'
    }
})