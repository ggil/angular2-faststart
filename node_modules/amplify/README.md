**Amplify** is a wrapper around the NodeJS http packages to help make calls easier.  It is modeled after [AmplifyJS](http://amplifyjs.com/).  The idea is that you can use this package on the server side and AmplifyJS on the client side.

[![Build Status](https://travis-ci.org/chafnan/amplify.png?branch=master)](https://travis-ci.org/chafnan/amplify)

##Getting Started

Install the package
```
npm install amplify
```

Require the package
```javascript
var amplify = require("amplify");
```

Next, define the services that you will be using
```javascript
request.define('exampleService', 'ajax', {
  url: 'http://localhost:3000/service',
  dataType: 'json',
  type: 'POST'
});
```

Lastly, call your service
```javascript
request({
  resourceId: 'exampleService',
  data: {
    name: 'example',
    anotherProperty: 'another example property'
  },
  success: function(data, status) {
    // success actions go here
  }
  error: function(error, status) {
    // error actions go here
  }
});
```

##Request
This function is intended to make all the requests to the resources.

```
amplify.request(string resourceId, [hash data], [function callback])

amplify.request(hash settings)
```
#### Settings
`resourceId`: The identifier of the resource<br>
`data`: The data to be sent<br>
`success`: The success callback after the request<br>
`error`: The error callback after the request

### Define
Define will take care adding resources that can be used by the request.

```
amplify.request.define(string resourceId, string type, [hash settings])
```
#### Settings
`url`: The url used for the request<br>
`dataType`: The content-type that is sent and received<br>
`type`: The HTTP method that will be used