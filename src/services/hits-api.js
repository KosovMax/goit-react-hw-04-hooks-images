import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api'
axios.defaults.params = {}
axios.defaults.params['key'] = '19319242-70903095163a85f904f3acecb'
axios.defaults.params['image_type'] = 'photo'
axios.defaults.params['orientation'] = 'horizontal'

const fetchHits = ({ searchQuery = '',  page = 1, perPage = 12}) =>{

    return axios
        .get('/',{params:{
            q:searchQuery,
            page:page,
            per_page:perPage
        }})
        // .get(`https://pixabay.com/api/?q=${searchQuery}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${perPage}`)
        .then(response => response.data.hits)

}

export default { fetchHits }