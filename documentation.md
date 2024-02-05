## Validation :

- Using separate state variables for all form fields to manage the field values
- state var to check valid fields (email,password,name : regex) whenever the form field changes using `useEffect`
- display error messages using this state variables in the form fields

## Authentication :

- Create firebase web project and enable `authentication`
- install `firebase cli`

## Deploy:

- npm install -g firebase-tools
- firebase login
- firebase init
- dist for public directory (prod ready files), no single page app
- npm run build
- firebase deploy
