function loginRequest(email, password) {
    url = 'http://10.0.0.205:8080/login'
    return fetch(url, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
        }),
    })
    .then(function(response) {
        return response.json()
    }).then(function(responseJson) {
        return responseJson
    })
 }

 export {loginRequest};