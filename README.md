##[Node Repo](https://noderepo.herokuapp.com)
###Api
####create
URL:    https://noderepo.herokuapp.com/create

Method: Post

Request parameters:

|name|type|required|describe|
|:--|:--|:--|:--|
|name|string|Y|user name|
|firstName|string|Y|first name|
|lastName|string|Y|last name|
|email|string|Y|E-Mail|

Response parameters:

|name|type|describe|
|:--|:--|:--|
|result|string|1-success 0-fail|
|resultMessage|string|result describe|
|id|number|data id in the database|

Request example:
```json
{
    "name":"Sean",
    "firstName": "Sean",
    "lastName": "Zhao",
    "email": "ariestse9@gmail.com"
}
```

Response example:
```json
{
    "result": "1",
    "result": "success"
}
```

####list
URL:    https://noderepo.herokuapp.com/list

Method: Get