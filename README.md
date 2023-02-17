# React Native Todo Aapp
The Todos app is a simple mobile application for managing tasks. It allows users to add, edit, and delete tasks, as well as mark tasks as completed.

**Getting started**

To get started with this app, you'll need to follow these steps:

**Prerequisites**

To develop and run the Todos app, you will need:

***1. Node.js and npm installed on your system.***

***2. The Expo CLI installed globally on your system.***

***3. An iOS or Android device for running the app, or a simulator/emulator for testing.***

**Installation**

1. Clone the repository for the Todos app from GitHub.

(https://github.com/dennocapi/react-native-todo-app.git)

2. Navigate to the project directory:

***cd react-native-todo-app***

3. Install the project dependencies:

***npm install***

**Running the App**

To run the Todos app, follow these steps:

1. Start the Expo development server:

***npm start***

2. If you are running the app on a physical device, install the Expo app on your device and scan the QR code displayed on the development server using the Expo app.

3. If you are running the app on a simulator/emulator, follow the instructions displayed on the development server to launch the simulator/emulator and run the app.

**Code Structure**

The Todos app is structured as follows:

> App.js: The main entry point for the app. It renders the app's navigation stack.

> components/: Contains the app's UI components.

> styles/: Contains the app's global styles (i.e., styles that are used across multiple components/screens).

> assets/: Contains static assets such as images, fonts, and other media that the app uses.In the context of this app, the assets folder contains
the app icon, splash screen image, and the fonts used in the app. The icon and splash screen image are used to provide branding and visual identity
to the app, while the fonts are used to ensure consistent typography across the app.

**Development**

To develop the Todos app, you will need to have a basic understanding of React and React Native.

**Adding a New Component**

To add a new component to the app, follow these steps:

1. Create a new file in the components/ directory for your component.

2. Define your component as a function or class that returns a JSX element.

3. Export your component using the export keyword.

4. Import your component in the file where you want to use it using the import statement.

**Adding a New Screen**

1. To add a new screen to the app, follow these steps:

2. Create a new file in the screens/ directory for your screen.

3. Define your screen as a function or class that returns a JSX element.

4. Export your screen using the export keyword.

5. Import your screen in the App.js file and add it to the navigation stack using the createStackNavigator function from the react-navigation-stack package.

**Adding a New Style**

To add a new global style to the app, follow these steps:

1. Create a new file in the styles/ directory for your style.

2. Define your style as a JavaScript object using the StyleSheet.create method from the react-native package.

3. Export your style using the export keyword.

4. Import your style in the file where you want to use it using the import statement.

**Debugging**
To debug the app, you can use the debugger in Chrome DevTools. This allows you to set breakpoints in your JavaScript code and inspect the state of
your app in real time.



**Conclusion**
The Todos app is a simple mobile application that demonstrates basic usage of React Native and Expo. By following the instructions in this documentation,
you should be able to set up and run the app on your device or simulator, as well as modify the app's code to add new functionality.


**Contributing**
If you want to contribute to this project, feel free to submit a pull request. Please make sure to follow the Contribution Guidelines when submitting your changes.

**License**
This project is licensed under the MIT License.

