# Meal Logging Application
This application allows users to save their meals along with food item details and some hashtags.
Also user Auth is imlemented in this application. So, only registered users can use the api to add logs.

Some registered users are :
```
{
    userId: "123",
    name: "ashish
},
{
    userId: "1234",
    name: "rahul"
}
```

## Install modules
```
npm install
```
## Run Server
```
node app
```
## APIs

#### Get log by Id
```
Route: /api/logById
Request: GET
params: {
    id: "1hzk0ol8u2k21l" (this is log id)
}
```

#### Get log by userId
```
Route: /api/logsByUserId
Request: GET 
params: {
    userId: "123" (this is user id)
}
```

#### Get all foodItems
```
Route: /api/getAllFoodItems
Request: GET
```

#### Get all hasTags
```
Route: /api/getAllHashTags
Request: GET
```

#### Add a new log
Auth is implemented for this api so. user id must be valid.

```
Valid user id is:
userId: "123"
or 
userId: "1234
```

```
Route: /api/addMealLog
Request: POST
Headers: {
    userId: "123"
}
Body: {
    foodItems: ["chole", "poori"],
    hashTags: ["#we_loved_it", "#nice_food" ,"#its_good"]
}

```