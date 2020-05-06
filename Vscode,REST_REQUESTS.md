```js
#create note with authorization
post http://localhost:3003/api/notes
Content-Type: application/json
Authorization: bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6Imt1a3UiLCJpZCI6IjVlN2Y0NTM2YmU3NGI4NTIyNDRlZjJmOSIsImlhdCI6MTU4NTM5OTExOH0.NLGlyS2naCpso_0qSe4AYCuWWXZC6X-uiD2JKhoxOJg

{
  "content": "Single Page Apps use token authentication",
  "important": false
}
```

```js
#create-user
post http://localhost:3003/api/users
Content-Type: application/json
 
{
  "username": "kuku",
  "password": "password123"
}
```

```js
#simple get request
get http://localhost:3001/notes
// when using locahost, you should always use http not https, bcoz you to use https you need to configure you node server for that.
```

```js
#login
post http://localhost:3003/api/login
Content-Type: application/json
 
{
  "username": "kuku",
  "password": "password123"
}

```

```js
#put
put  http://localhost:3003/api/blogs/5e88bc06cf0e942188515fd1
Content-Type: application/json

{
    "likes": 30
}
#You have to sent what all you need at that url(let say you forget to send the content then it will be removed what was already there), you can skip id(atleast with json-server). And if 
```



***

## Know your architecture of windows:

```bash
wmic os get osarchitecture
```

***

## THE MOTIVE OF THE DESIRED CODE IS TO ENSURE THE VARIABLE TO BE 'undefined', find if the variable is undefined

## Check if the variable is undefined

```js
#somethings that works amaz...
if(typeof tutu ==="undefined"){
    console.log('its okay you are undefined')
}
//above example prints when tutu is undefined.


#But..
if(typeof tutu){
    console.log('its not okay, I\'m getting printed even when you do exist, as string \'undefined\' evaluates as truthy value.')
}


#Also..
if(!tutu){
    console.log('its not okay, this piece of code throws error: Reference Error, tutu is not defined.')
}
```

***

```js
#Deleting
DELETE http://localhost:3001/api/notes/5dbfeba6117b9f1ecc3fb2b6
###
DELETE http://localhost:3001/api/notes/5dbfebdd9edc4017dce88838
```

***

## Responses Exapmles:-

when we do:

```js
blogsRouter.post("/comment", async (request, response) => {
  console.log("$request.body:-", request.body);
  response.send("I reveive that:-"+JSON.stringify(request.body))
});
```

```bash
post http://localhost:3003/api/blogs/comment
Content-Type: application/json

{
  "title": "Tuntunaa99",
  "author": "Pagal Tipu Sultan",
  "url": "Bablitera-mera.com",
  "likes": 90
}
```

```bash
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: text/html; charset=utf-8
Content-Length: 105
ETag: W/"69-q6ixFC158sbfSYtjVqmNTJzlAvE"
Date: Wed, 06 May 2020 07:56:43 GMT
Connection: close

I reveive that:-{"title":"Tuntunaa99","author":"Pagal Tipu Sultan","url":"Bablitera-mera.com","likes":90}
```

***

and when we do:(json is the type we are sending in exchange or the request)

```js
  response.json("I reveive that:-"+JSON.stringify(request.body))
```

```
HTTP/1.1 200 OK
X-Powered-By: Express
Access-Control-Allow-Origin: *
Content-Type: application/json; charset=utf-8
Content-Length: 121
ETag: W/"79-ORXKBxto7dVwMMuMVcyyHxMrJCY"
Date: Wed, 06 May 2020 08:00:16 GMT
Connection: close

"I reveive that:-{\"title\":\"Tuntunaa99\",\"author\":\"Pagal Tipu Sultan\",\"url\":\"Bablitera-mera.com\",\"likes\":90}"
```

***

