

## Running apollo server(graphql) on custom port:

```js
const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen({port: 4001}).then(({ url }) => { //This line is modified, port is supplied explicitly.
  console.log(`Server ready at ${url}`);
});

```



***

## Point to remeber

- The type *YesNo* is GraphQL [enum](https://graphql.org/learn/schema/#enumeration-types), or an enumerable, with two possible values *YES* or *NO*.
- All below code snippets are for graphQL playground. Execute any of the below.

```js
query {
  findPerson(name: "Arto Hellas") {
    phone 
    address {
      city 
      street
    }
  }
}
```

```js
query {
  personCount
}
```

```js
query {
  allPersons {
    name
    phone
  }
}
```

```
query {
  allPersons{
    name
    city
    street
  }
}
```

```
query {
  findPerson(name: "Arto Hellas") {
    phone 
    id
  }
}
```

```
query {
  findPerson(name: "Donald Trump") {
    phone 
  }
}
```

```
mutation {
  addPerson(
    name: "Pekka Mikkola"
    phone: "045-2374321"
    street: "Vilppulantie 25"
    city: "Helsinki"
  ) {
    name
    phone
    address{
      city
      street
    }
    id
  }
}
```

```
query {
  personCount
  allPersons {
    name
  }
}
```

```
query {
  havePhone: allPersons(phone: YES){
    name
  }
  phoneless: allPersons(phone: NO){
    name
  }
}
```

### Using multiple queries:-

```
query phoneOwnership {
  havePhone: allPersons(phone: YES){
    name
  }
  phoneless: allPersons(phone: NO){
    name
  }
}

query stats {
  personCount
}
```

***

## Schema

```js
  type Query {
    bookCount: Int!
    authorCount: Int!
    allBooks(author: String, genre: String): [Book!]! << we have give multiple optional params<<
    allAuthors: [allAuth]
  }

```

***

### GraphQL says invalid argument on queries sometimes, its only when you have'nt refreshed the graphql playground webpage. Doing a refresh would help it.

***

## All queries and mutations in exercises:

```js
query query1 {
  allAuthors {
    name
    bookCount
    born
  }
}

query query2 {
  allBooks(author: "Robert Martin") {
    title
    author
  }
}

query query3 {
    allBooks {
        title
        author
    }
}

query customGenre {
  allBooks(genre: "refactoring") {
    title
    author
  }
}

query customAuthorandGenre {
  allBooks(author: "Robert Martin", genre: "refactoring") {
    title
    author
  }
}

mutation addingA_Book {
  addBook(
    title: "NoSQL Distilled",
    author: "Martin Fowler",
    published: 2012,
    genres: ["database", "nosql"]
  ) {
    title,
    author
  }
}

mutation addingA_Book_A_Author {
  addBook(
    title: "Pimeyden tango",
    author: "Reijo Mäki",
    published: 1997,
    genres: ["crime"]
  ) {
    title,
    author
  }
}

mutation editingAuthorsBorn {
  editAuthor(name: "Reijo Mäki", setBornTo: 1968) {
    name
    born
  }
}
```

***

New things test.