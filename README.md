# backend

### The base URL
https://immunization-tracker-van.herokuapp.com

#endpoints

-- 
### POST (REGISTER) 
#### /api/auth/register

*send:* 
{
	"username": "Larry", 
	"password": "pass", 
	"email": "larry@hotmail.com", 
	"role": "parent"
}
*you will get back:*
{
  "id": 5,   
  "username": "Larry",
  "password": "$2a$10$wA008k.kYW2ozv61DJ1reuyZZ7X835M6xLLnpqjBvXOt03Y/cSUyy", 
  "email": "larry@hotmail.com",
  "role": "parent"
}
_save the id to use later_

### POST (LOGIN)
#### api/auth/login
*send:*
{
	"username": "Larry", 
	"password": "pass"
}
*you will get back:*

{
  "message": "Welcome Larry!",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6Im1hcnR5IiwiaWF0IjoxNTY0NDQ4NzI5LCJleHAiOjE1NjQ1MzUxMjl9.0Lwmc6zVClA16DVm-FE4wMKmEfENGosLWF679eexp3g",
  "userId": 5,
  "role": "parent"
}
- store role and userId and pass it around, you will need it to make other api calls

### POST A PARENT (INSERT)
#### /api/parents/

*to insert parent profile, send:*

{
	"userId": 5, 
	"firstName": "Larry", 
	"lastName": "Johnson", 
	"address1": "456 Someplace St", 
	"address2": "Apt 102", 
	"city": "Las Vegas", 
	"zip": "89103", 
	"state": "NV", 
	"phone": "(702) 123-3456",
	"comments": "Not a required field"
}


### UDPATE
#### /api/parents/1
*to update parent, issue a put (update) request and pass in the userId in the URL*


### GET PARENT BY UserId
#### /api/parents/1 
*returns a complete Parent Object*

### DELETE PARENT
#### /api/parents/2
*returns the number of records removed which should always be 1*


### POST (ADD) Provider
#### /api/providers
*send this object*
 {
	"name": "Clinic of Las vegas", 
	"address1": "4938 W. Tropicana Blvd",
	"address2": "Suite 108", 
	 "city": "Las Vegas", 
	"state": "NV", 
	"zip": "89103", 
	"phone": "(800) 724-1982"
}
*returns the providerId*


### UPDATE Provider
#### /api/providers/1
*the 1 above is the providerId need to pass in*


### DELETE Provider
#### /api/providers/4
*where 4 is the providerId*

### GET All Children of a Provider
#### /api/providers/children/2
*where 2 above is providerId*
*this is what is supposed to show up on providers homepage?*

### GET ALL PROVIDERS
#### /api/providers



### INSERT STAFF (a user who who represents a provider)
#### api/staff

{
	"userId": 5, <---- pass in userId
	"firstName": "Nancy", 
	"lastName": "Oliver", 
	"title": "Doctor",
	"providerId": 2 <--- value should come from a dropdown list after making api call to /api/providers
}

#### DELETE, UPDATE, GET coming!

### Insert CHild
#### /api/children

*In the application, a provider needs to be chosen. You can do a GET call to /api/providers to get all providers and
populate a dropdown list. The drop down list can display provider name, but the providerId must be passed as a value.  I 
can help with this one* 
{
	"firstName": "Mary", 
	"lastName": "Johnson", 
	"isPermission": true, 
	"DOB": "2016-03-07", 
	"parentId": 2,  <-- pass in userId here
	"providerId": 2 
}

### UPDATE Child
#### /api/children/1

### GET ALL CHildren belonging to a parent
#### /api/parents/children/1
*pass in 1 above as userId*


### GET Immunizations CHild has Taken
#### /api/immunizations/taken/1
*where 1 above is childId*

### Get All Immunizaions CHild has not taken
### /api/immunizations/missing/1
*where 1 above is childId*
 
### INSERT a immunization a child has taken
#### /api/immunizations/insert
{
	"location": "a Clinic", 
	"childId": 3, 
	"immunizationId": 4, 
	"dateReceived": "2019-01-21"

}
### UPDATE User account
#### /api/users/1
{
	"email": "user@gmail.com", 
	"username": "someone123", 
    "role": "parent" 
}

### DELETE USER account
#### /api/users/1
*you will get back the number of records deleted, should always be 1*

