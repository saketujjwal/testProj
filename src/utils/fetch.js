import {fetch} from 'whatwg-fetch';

module.exports = function(obj){

    return fetch(obj.url,{
        method: obj.method
    })
    .then(function(response) {
        return response.json()
    })
}
