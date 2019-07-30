# backend

# The base URL
https://immunization-tracker-van.herokuapp.com

#endpoints

### /api/auth/register
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

### api/auth/login
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

### /api/parents/

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