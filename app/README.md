# Description
<img align = "center" src = "./preview-doc.jpg" width = "100%">
<p>The project was created on the basis of practice with minimal investment in the visual part, but as a skill development in the design of architecture and functionality using BLL and interaction with API-noSQL;</p>
<p>You can follow the development of the project in the tab <b>/news</b>;</p>

# Target

<p>It was uniquely like a pet-project that will also be supported and developed over time, and the practice of further skills. Has been provided as part of a portfolio for current skills. At this stage, the project does not have a stable version and requires many improvements and fixes. </p>

# Opportunities of the project at the moment

<p>• Full authorization</p>
<p>• Adding posts</p>
<p>• Editing a profile</p>
<p>• Displaying registered users</p>
<p>• Ability to subscribe to users</p>
<p>• Ability to send messages to subscribed users</p>

# Structure project

```
-src
 ┣ APIs     ###Deprecated API written in axios (not supported);
 ┃ ┣ types      ###Local types for API on axios;
 ┃ ┣ ...files
 ┣ asset    ###Fixed assets;
 ┃ ┣ common     ###Components that are often used in the site;
 ┃ ┃ ┣ ChatPreloader.tsx
 ┃ ┃ ┣ ChatPreview.tsx
 ┃ ┃ ┗ Preloader.tsx
 ┃ ┣ ...files
 ┣ components
        ###Folder of all components of the isolated framework (pages + css + test + components)
 ┃ ┣ Auth       ###Responsible for the /login;
 ┃ ┃ ┗ Login.tsx
 ┃ ┣ Contact    ###In developing :)
 ┃ ┃ ┗ Contact.tsx
 ┃ ┣ Dialogs    ###Responsible for the /dialogs;
 ┃ ┃ ┣ DialogsWindow    ###A window that opens with the user's contacts-dialogs;
 ┃ ┃ ┃ ┣ DialogsBlock.tsx
 ┃ ┃ ┃ ┗ SingleDialog.tsx
 ┃ ┃ ┣ MessagesWindow   ###Chat window with selected user;
 ┃ ┃ ┃ ┣ MessageBlock.tsx
 ┃ ┃ ┃ ┗ SingleMessage.tsx
 ┃ ┃ ┣ Dialog.tsx
 ┃ ┃ ┗ dialogs.module.css
 ┃ ┣ Header     ###Site Header;
 ┃ ┃ ┣ header.module.css
 ┃ ┃ ┗ Header.tsx
 ┃ ┣ News   ###In developing :)
 ┃ ┃ ┗ News.tsx
 ┃ ┣ Profile    ###Responsible for the /profile;
 ┃ ┃ ┣ PostModule   ###Part of the page with posts and textarea;
 ┃ ┃ ┃ ┣ Post.tsx
 ┃ ┃ ┃ ┗ PostCreater.tsx
 ┃ ┃ ┣ ProfileModule    ###Part of the page with an information block about users;
 ┃ ┃ ┃ ┣ ProfileCard.tsx
 ┃ ┃ ┃ ┗ ProfileContainer.tsx
 ┃ ┃ ┣ profile.module.css
 ┃ ┃ ┗ Profile.tsx
 ┃ ┣ Saidbar    ###Site navigation menu;
 ┃ ┃ ┣ saidbar-list.ts
 ┃ ┃ ┣ saidbar.module.css
 ┃ ┃ ┗ Saidbar.tsx
 ┃ ┗ User    ###Responsible for the /users;
 ┃ ┃ ┣ User.tsx
 ┃ ┃ ┣ users.module.css
 ┃ ┃ ┗ UsersPage.tsx
 ┣ helpers      ###Helper functions in the application;
 ┃ ┗ initialzationHelper.tsx    ###Workaround to initialize the application;
 ┣ hooks    ###APP hooks;
 ┃ ┣ auth-use.ts
 ┃ ┗ redux-use.ts
 ┣ models       ###Description of typescript interfaces;
 ┃ ┣ ...Interfies.typescript files
 ┣ routers      ###Routing sheet throughout the application;
 ┃ ┣ router-list.ts
 ┃ ┗ Routers.tsx
 ┣ services     ###Supporting elements of site maintenance;
 ┃ ┣ API    ###Deprecated API, for use on RTK-Query;
 ┃ ┃ ┣ auth-api.ts
 ┃ ┃ ┣ profile-api.ts
 ┃ ┃ ┗ user-api.ts
 ┃ ┣ DB     ###The current API is shared with NoSQL Firebase;
 ┃ ┃ ┣ ChatDB.ts
 ┃ ┃ ┣ FetchProfileDB.ts
 ┃ ┃ ┣ PostsDB.ts
 ┃ ┃ ┣ RewriteProfileDB.ts
 ┃ ┃ ┣ SignInDB.ts
 ┃ ┃ ┣ SignUpDB.ts
 ┃ ┃ ┣ TotalUsersDB.ts
 ┃ ┃ ┗ validRegisterDB.ts
 ┃ ┗ validation     ###Form validation implemented in Yup;
 ┃ ┃ ┗ validators.tsx
 ┣ store    ###Redux Toolkit Store;
 ┃ ┣ reducers   ###Slices(BLL);
 ┃ ┃ ┣ authSlice.ts
 ┃ ┃ ┣ dialogsSlice.ts
 ┃ ┃ ┣ profileSlice.ts
 ┃ ┃ ┗ userSlice.ts
 ┃ ┣ reselectors    ###Reselectors;
 ┃ ┃ ┣ auth-selector.ts
 ┃ ┃ ┣ dialogs-selector.ts
 ┃ ┃ ┣ profile-selector.ts
 ┃ ┃ ┗ users-selector.ts
 ┃ ┣ thunks     ###CreateAsyncThunks;
 ┃ ┃ ┣ authThunks.ts
 ┃ ┃ ┣ dialogsThunks.ts
 ┃ ┃ ┣ profileThunks.ts
 ┃ ┃ ┗ usersThunks.ts
 ┃ ┗ store.ts
 ┣ UI   ###Reusable components created in Formik;
 ┃ ┣ FollowingBtn
 ┃ ┃ ┗ Following_btn.tsx
 ┃ ┣ FormAuth
 ┃ ┃ ┣ FormLogin.tsx
 ┃ ┃ ┣ FormRegister.tsx
 ┃ ┃ ┗ FormsAuth.tsx
 ┃ ┣ FormChat
 ┃ ┃ ┗ FormMessage.tsx
 ┃ ┣ FormCreatePost
 ┃ ┃ ┗ FormCreatePost.tsx
 ┃ ┣ FormEditProfile
 ┃ ┃ ┗ FormEditProfile.tsx
 ┃ ┣ FormEditStatus
 ┃ ┃ ┗ FormEditStatus.tsx
 ┃ ┣ FormSearchUsers
 ┃ ┗ forms.module.css
 ┣ App.css
 ┣ App.tsx
 ┣ firebase.ts ###Config for Firebase;
 ┣ index.css
 ┣ index.tsx
 ┣ logo.svg
 ┣ main.module.css
 ┗ setupTests.ts ###Config for Jest+Enzyme;
```

# Setting up and using the project

<h3>First opportunity to start a project:</h3>
<p style="color:red">
It will take you some time before the launch of the project is ready.</p>
<p>
    1. First you need to clone all files and folders to your device.
</p>
<p>
    2. Check if <b> nodeJS </b> and <b> npm </b> are installed in the cmd terminal or another available in your editor.
</p>

```
node -v
npm --v
```

<p> If an error occurs at this stage, you can install nodeJS from the official site <a href="https://nodejs.org/en/"> <b> NodeJS </b> </a> </p>
<p>
3. If the versions were shown in the terminal, then the next step is to install all project dependencies.
</p>

```
npm install
```

<p>
4. After install, launch the project itself.
The project will now be launched:
on http: // localhost: 3000 /
</p>

```
npm start
```

<h3>Second opportunity to start a project:</h3>
<p style="color:green">
Thanks to the github page, you don't have to spend a lot of effort to set up a local project, but rather take a look at it in one click!</p>

<p>
1. Go to the safe link and you can test the project!</p>
<b style="color:#412C84">https://mercerqux.github.io/EhoSpace</b>

<p>

# Further project

Since the project is educational, it has the opportunity to practice any ideas and new technologies, but also the pet project has a plan for the MVP of the project.

<p>• Refactoring and optimization</p>
<p>• Fonts</p>
<p>• Testing the application</p>
<p>• Add time display of messages and posts</p>
<p>• User filter in the / users tab</p>
<p>• Create tabs / contacts and / news</p>
<p><b>more other...</b></p>

# More about

The app was created with create-react-app

You can read more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To read about React, check out the [React documentation](https://reactjs.org/).
