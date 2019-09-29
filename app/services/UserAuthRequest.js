const url = "http://10.0.0.205:8080"

function loginRequest(email, password) {
    fullURL = url + '/login'
    return fetch(fullURL, {
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
        if (response.status === 200) {
            return response.json()
         } else {
            return {Body: '', Success: false, Error: 'login Failure'}
         }
    }).then(function(responseJson) {
        return responseJson
    })
 }

 function registerRequest(email, password, fullName, phoneNumber) {
     fullURL = url + '/register'
     return fetch(fullURL, {
         method: 'POST',
         headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            email: email,
            password: password,
            full_name: fullName,
            phone_number: phoneNumber
        })
     })
     .then(function(response) {
         console.log(response)
         if (response.status === 200) {
            return response.json()
         } else {
            return {Body: '', Success: false, Error: 'Registration Failure'}
         }
     })
     .then(function(responseJson) {
         return responseJson
     })
 }

 function verifyCodeRequest(email, code) {
    fullURL = url + '/verifyRegistrationCode'
    return fetch(fullURL, {
        method: 'POST',
        headers: {
           Accept: 'application/json',
           'Content-Type': 'application/json',
       },
       body: JSON.stringify({
           email: email,
           verification_code: code
       })
    })
    .then(function(response) {
        if (response.status === 200) {
            return response.json()
        } else {
            return {Body: '', Success: false, Error: 'Code verification failed'}
        }
    })
 }

 export { loginRequest, registerRequest, verifyCodeRequest };