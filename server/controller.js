const axios = require('axios')
const clientId = require('./client_ID')

let pics = []



module.exports = {

    read: (req, res) => {
        let { searchParam } = req.body

        axios({
            method: 'get',
            headers: { 'authorization': 'Client-ID ' + clientId },
            url: `https://api.imgur.com/3/gallery/search/?q=${searchParam}`
        }).then((response) => {
            console.log('response.data', response.data)
            pics = response.data
            res.status(200).send(pics)
        })
            .catch(error => console.log("this is error", error))

    },




}


//'https://api.imgur.com/3/gallery/search/{{sort}}/{{window}}/{{page}}?q=cats'