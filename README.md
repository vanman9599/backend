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
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWJqZWN0Ijo1LCJ1c2VybmFtZSI6IkxhcnJ5Iiwicm9sZSI6InBhcmVudCIsImlhdCI6MTU2NDQ0NTkzMiwiZXhwIjoxNTY0NTMyMzMyfQ.AypJIQOozTqzcTWWyWY9Ye1o3QZCxDLokvF6gElBo7M"
}
