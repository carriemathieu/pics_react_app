import axios from 'axios'

// create instance of axios client w/ couple default props
export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID f9lMs80wjaen0hfmfy9kpHbo7Z8zjVSGh7z6SeC-tdM'
    }
})