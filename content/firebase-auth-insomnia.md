---
title: "Using Firebase Auth in Insomnia"
date: 2022-02-11
---

![img](../images/firebase-auth-insomnia/insomnia.png)

## Step 1

Create a POST request within insomnia using the following URL (API_KEY can be found in Firebase -> Project Settings, as “Web API Key”).

```text
https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=[API_KEY]
```

With the following JSON body:

```json
{
  "email": "[<](mailto:joshuarichards001@gmail.com)email>",
  "password": "<password>",
  "returnSecureToken": true
}
```

Hit send to test that it works and you should get a response looking something like this:

```json
{
  "localId": "ZY1rJK0eYLg...",
  "email": "[user@example.com]",
  "displayName": "",
  "idToken": "[ID_TOKEN]",
  "registered": true,
  "refreshToken": "[REFRESH_TOKEN]",
  "expiresIn": "3600"
}
```

## Step 2

Next, open up the “Manage Environments” tab in the top left corner under the Insomnia icon (or using ⌘ + E).

Once inside create a field called TOKEN and when inputting its value type Ctrl + Space and navigate to the “Response -> Body Attribute” option.

![img](../images/firebase-auth-insomnia/environment.png)

Select this option and then click on it again to edit the Tag.

![img](../images/firebase-auth-insomnia/token.png)

Within the tag editor you want to:

1. Select the API Request you created from the start of the guide (e.g. POST Auth).
2. **Filter**: set to “$.idToken”
3. **Trigger Behavior**: set to to “When Expired”
4. **Max age**: set to “3600” (Because that's how long the Token lasts)

It should look like this. If done correctly the token should be displayed in the “Live Preview” section.

![img](../images/firebase-auth-insomnia/tag.png)

## Step 3

Finally, you need to navigate to the API call you want to attach the Authentication to. Once there click on the “Auth” tab and select the “Bearer Token” option.

Under the TOKEN field once again type “Ctrl + Space” and select the “TOKEN” variable we just created.

![img](../images/firebase-auth-insomnia/url.png)

Once selected click send and it should all work as intended! You are now able to access your Firebase Auth protected server from the Insomnia API Client.

Thanks for reading and hopefully this helped out. This is my first ever article so if you have any feedback and/or questions please leave me a comment.

Have a good one!
