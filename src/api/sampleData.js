import Group from './groups/model'

export const groupContract = 
{
  "instructions": "API. You either got here through root or w/o req.query.groupId",
  "api/groups/": {
    "type": "GET",
    "responseCode": "200",
    "purpose": "view groupRooms",    
    "body": {
      "data": "['Groups']"
    }
  },
  "api/groups/:id": {
    "type": "GET",
    "responseCode": "200",
    "purpose": "View groupRoom",
    "schema": {      
      "groupId": "1028dbE",
      "members": "[Fuzzykins]",
      "chain": "4",
      "lastActivity": "5 Sept 2016"
    },
    "body": {
      "data": "Group"
    }
  },
  "api/groups/:id": {
    "type": "PUT",
    "responseCode": "201",
    "purpose": "Join groupRoom",
    "schema": {      
      "groupId": "1028dbE",
      "members": "[Fuzzykins, Charlie]",
      "chain": "4",
      "lastActivity": "5 Sept 2016"
    },
    "body": {
      "data": "Group"
    }
  },
  "api/groups": {
    "type": "POST",    
    "purpose": "Create group",
    "body": {
      "name": "Charlie",
      "groupId": "1028dbE"      
    },
    "return": {
      "responseCode": "201",
      "redirectTo": "/api/groups/?groupId=id"
    }
  }
}

