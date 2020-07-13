kicking

***

## Actual handling of error data(sting or complex data send via express route) and handled in front-end try catch appropriately

[helpful resource link@stackoverflowc](https://stackoverflow.com/questions/14154337/how-to-send-a-custom-http-status-message-in-node-express)

![image-20200714004605392](.imgs_typora/image-20200714004605392.png)



***

## REST Example with axios - Frontend and backend error handling collaboration example-

- Frontend - deleteEventHandler 

  ![image-20200527200019974](image-20200527200019974.png)

- Backend - route handler

  ![image-20200527200252780](image-20200527200252780.png)

***



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

```
POST VIA CURL
curl -d '{"key1":"value1", "key2":"value2"}' -H "Content-Type: application/json" -X POST http://localhost:3000/data
```

src: https://gist.github.com/subfuzion/08c5d85437d5d4f00e58

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

## ==use intellisense in vscode rest to create request, for e.g.,==

type get/post/put whatever you want.
then press CTRL + SPACE. and select the suggestion.
then navigate and type "type" in place of "header name" and select Content-Type
then navigate to "header value " and type "json" and press CTRL + SPACE and select application/json from the suggestion. 
then navigate to content, and type the body, i.e., { .. what ever you want to send in the body}

***

```rest
POST http://localhost:4000/graphql HTTP/1.1
Content-Type: application/json

{
    "query": "query{ allPersons{ name , phone } }"
}

###

```

