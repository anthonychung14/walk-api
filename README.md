# walktogether-api

# API routes

##GET
- /getAllSteps - get all steps in user history
- /getStepsToday - get steps today
- /getParty - get user's current party
- /getUser - get user information

##POST
- /requestParty - request friend to join
- /joinParty - approve request to join
- /makeParty - complete creation of party
- /makeChain - start chain of goals
- /addChain - add completed day to chain
- /makeUser - create user
- /authUser - authenticate user
- /login - initial login route
- /logout - initial logout route
- /makeEntry - create entry at 12AM for user to start walking
- /updateEntry - create time-series data (if necessary)

## Schema

```javascript
  party = {
    "partyId": "indexHash",
    "users": "[userId, userId]",
    "chain": "100"
  }
  
  user = {
    "userId": "indexHash",
    "name": "Bob Jones",
    "email": "BobJones@gmail.com",
    "phoneNum": "1234567890"
  }
  
  entry = {
    "entryId": "indexHash",
    "userId": "parent_reference",
    "steps": "9000",
    "date": "2015-11-02"
  }
```

