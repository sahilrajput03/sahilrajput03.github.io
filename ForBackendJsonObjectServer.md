## For the sake of example lets choose slug (namespace) as `someCityName` though you can use any slug as per your need.

1. Make request to this site with `axios` or `postman` with some slug(defines a namespace) following the `/` in the url of this site to store data at that namespace. For e.g.,

```javascript
let dataToPost = {
  cars: 200,
  bikes: 400,
  ships: {
    big: true,
    small: ['rem', 'bem', 'tem']
  }
}
let {data} = await axios.post("https://jsonbackendserver.herokuapp.com/someCityName", dataToPost)
```

2. Access data from database -

```javascript
let {data} = await axios.post("https://jsonbackendserver.herokuapp.com/someCityName")
```

3. Partially update data in database -

```javascript
let dataToPost = {
  $partial: {
    ships: "Cool",
    kicks: 200
  }
}
let {data} = await axios.post("https://jsonbackendserver.herokuapp.com/someCityName", dataToPost)
```

so this way it'll replace or add(if property doesn't exist earlier) in the database of your namespace. (For the sake of true clarity, `{...oldData, ..req.body.$partial})` is replace in the database file, so it works like that.

Wanna make your own custom **Object database server** ? Refer : [jsonbackend@npm](https://www.npmjs.com/package/jsonbackend)

