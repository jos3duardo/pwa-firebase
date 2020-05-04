# pwa-firebase
```bash
npm i
```


firebase rules
```bash
{
  "rules": {
    "files": {
      "$uid": {
        ".read": "$uid === auth.uid || root.child('/shared/').child(auth.uid).child($uid).exists()",
        ".write": "$uid === auth.uid",
        ".validate": " root.child('/users/').child($uid).child('/usage').val() == null ||
        root.child('/users/').child($uid).child('/usage').val() <= 1073741824"  
      }
    },
    "users": {
    "$uid": {
      ".read": "$uid === auth.uid",
      ".write": "$uid === auth.uid"
    	}
  	},
    "sharer": {
      ".read": "auth.uid !== null",
      ".write": "auth.uid !== null"
  	},
    "shared": {
      ".read": "auth.uid !== null",
      ".write": "auth.uid !== null"
  	}
  }
}
```