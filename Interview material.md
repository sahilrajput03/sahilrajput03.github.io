Tricky questions to cram:-

[GET or POST? 11 interview questions that most devs get wrong. @ MEDIUM.COM](https://medium.com/@cbernardes?source=post_page-----189562fac0a7----------------------)

_from above article:-

2. **GET responses can be cached** . BUT POST can’t be cached on the client side.
   POST is not Idempotent (idempotent means returning same even when queried for multiple times.)

3. **Get is a safe method**

   Because this method should NEVER change a resource (If it does you are not implementing RESTful best practices), it is considered safe.

   **Safe methods** are HTTP methods that do not modify resources.

   8. Q:Considering a Static Website, what is the only method this app responds to?

       **Static Websites only responds to GET requests**

   9. **Which method has length restrictions?**

      Regarding POST, because the payload is send in the request’s body, technically, there is no limit of data to be sent **(6)** neither data type restrictions.

   10. **10. Which method can be bookmarked?**

       POST should not be bookmarked and the reasons are a combination of a few topics discussed above:

       - Attempting to bookmark a POST will just result in a GET operation on the URL.
       - The method is not idempotent so there is not guarantee the response will always be the same. It could result in a duplicated bank transaction, for example.
       - The URL would lose its parameters as bookmark doesn’t support a body payload.
       - It may contain sensitive data, which should not be stored.

***

Work at medium.com [link](https://medium.com/jobs-at-medium/work-at-medium-959d1a85284e)

***



