import {fetch} from 'whatwg-fetch';

module.exports = function(obj){

    return fetch(obj.url,{
        method: obj.method,
        body: JSON.stringify(obj.body),
        headers: obj.header
    })
    .then(function(response) {
        return response.json()
    })
}
