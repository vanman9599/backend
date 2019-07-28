# backend
Note: Every person is a "user" with a role of: staff (medical professionals), parent, or child.  
**Sign up is a 3 step process:**
*Enter login information
*User must then be redirected to login
*User completes profile and saves it.  

##Get Parent api/parents/:id
    #### Parent object returns:
    {
        username: "somone123", 
        email: "someone@gmail.com" , 
        password: "49bndkge939nvkdlss9s938fj", 
        firstName: "mary" , 
        lastName: "Johnson", 
        address1: "123 Baker St.", 
        address2: "apt 104", 
        zip: "89103",   
        state: "NV", 
        city: "Las Vegas",  
        phone: "(702) 208-9232",  
        comments: "some comments here"
    }

    

## Get Child Object By Id api/child/:id
    #### Child Object
    {
        firstName: "baby", 
        lastName: "johnson", 
        parentId: 1, 
        isPermission: false,
        comments: "comments go here", 
        DOB: "2019-02-31" *yyyy-mm-dd*,
        parentId: 1
    }
