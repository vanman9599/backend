# backend
Note: Every person is a "user" with a role of: staff (medical professionals), parent, or child.  
**Sign up is a 3 step process:**
*Enter login information
*User must then be redirected to login
*User completes profile and saves it.  
Parent sign-up form
    #### User object, send:
    {
        username: *required* (string), 
        role: *required* (values can be: staff, parent, or child), 
        email: *required* , 
        password: *required* , 
        firstName: *required* , 
        lastName: *required*, 
        address1: *required*,
        address2: , 
        zip: *required*, 
        state: *required*, 
        city: *required*, 
        phone: *required*, 
        comments: 
    }

    returns id of user

