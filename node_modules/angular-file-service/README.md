# angular-file-service

angular service for File manipulation

## Installation

- 'npm install angular-file-service'
- usable scripts are under your 'node_modules/angular-file-service/dist'

**Important note**: this module is not in commonJS format

## Usage

use the service as a function to get a file interface for getting data from
a file.

```javascript
// Declare 'angluar.file' as your dependency
var app = angular.module('myApp', [
    'angular.file'
]);

app.controller('myController', ['$document', 'fileOperator', function ($document, fileOperator) {

    // get File from Dom or somewhere else
    var fileOnDom = $document.getElementById('input-file').files[0];

    // pass to fileOperator, now you got the file interface
    var file = fileOperator(fileOnDom);

    // read the file as desired format
    file.getBase64().then(function (result) {
        console.log('File content in Base64:', result);
    });

}]);
```

the service is a function, you'll get a wrapped file operator once you pass
file to it, it accepts two arguments:

- `file`: the file instance from Web API `File` interface
- `maxChunkSize` (optional, Default is 1MB): when calculating MD5, if the file
  is larger than maxChunkSize, `fileOperator` will do the incrementall
  calculation instead of loading the whole file into memory.

file operator has this method:

- `abort`: cancel the loading process and **reject** the promise.

and these getters:

- `getBase64([start, [legth]])`
- `getMd5([start, [legth]])`
- `getUint8Array([start, [legth]])`
- `getArrayBuffer([start, [legth]])` 

file interface has these properties:
- `file`: the file you passed in
- `fileSize`: once the file is loaded, it represent the file size in bytes
- `messages`: all messages from File API

## Credit

- base64 encoder is from [base64-bufferarray]()
- md5 encoder is from [SparkMD5]()

[base64-bufferarray]: https://github.com/niklasvh/base64-arraybuffer
[SaprkMD5]: https://github.com/satazor/SparkMD5

## Author
- Chriest Yu <jcppman@gmail.com>

**Issues & PRs are welcome!**

