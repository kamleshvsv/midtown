# Getting Started with Create React App
### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
"# script_site_rx" 


# React Contact Form with Google Sheets Integration

This project contains a **React.js contact form** that stores submitted form data directly into **Google Sheets** using a **Google Apps Script Web App**.  
It includes:
- Form validation  
- Loading state (while submitting)  
- Success and error messages  
- Automatic form reset after successful submission  

---

## 🚀 Features
- Collects:
  - Name  
  - Subject (dropdown)  
  - Email  
  - Phone number  
  - Message  
- Submits to Google Sheets in real-time  
- Displays user-friendly messages (success, error, validation)  
- Works without a backend (Google Apps Script acts as backend)  

---

## 📋 Setup Instructions

### 1. Create Google Sheet
1. Open [Google Sheets](https://sheets.google.com) and create a new sheet.  
2. Add headers in the first row:
Name | Subject | Email | Phone | Location | Message | Timestamp


3. Note the sheet name (default: `Sheet1`).

---

### 2. Create Google Apps Script
1. In your sheet, go to **Extensions → Apps Script**.  
2. Paste this code:

```javascript
function doPost(e) {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName("Sheet1"); 
  var data = JSON.parse(e.postData.contents);

  sheet.appendRow([
    data.name,
    data.subject,
    data.email,
    data.phone,
    data.message,
    new Date()
  ]);

  return ContentService
    .createTextOutput(JSON.stringify({ "status": "success" }))
    .setMimeType(ContentService.MimeType.JSON);
}


3. Deploy Web App

Click Deploy → New Deployment.

Choose Web app.

Set:Execute as: Me

Who has access: Anyone (or Anyone with link)

Deploy → Copy the Web App URL.  



Go To the applicaton > Contact From >   const GOOGLE_SCRIPT_URL ="";
