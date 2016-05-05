##[Node Repo](https://noderepo.herokuapp.com)
###Api
####create
URL:    https://noderepo.herokuapp.com/create

Method: Post

Fields:

|field name|data type|describe|
|:--|:--|:--|
|name|string|user name|
|firstName|string|first name|
|lastName|string|last name|
|email|string|E-Mail|

Example:
```json
{
    "name":"Sean",
    "firstName": "Sean",
    "lastName": "Zhao",
    "email": "ariestse9@gmail.com"
}
```

####list
URL:    https://noderepo.herokuapp.com/list

Method: Get