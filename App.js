import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Chat from "./src/screens/Chat";
import Login from "./src/screens/Login";
import Signup from "./src/screens/Signup";
import Home from "./src/screens/Home";

const Stack = createNativeStackNavigator();

function ChatStack() {
  return (
    <Stack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"home"}
    >
      <Stack.Screen name={"login"} component={Login} />
      <Stack.Screen name="signup" component={Signup} />
      <Stack.Screen name="chat" component={Chat} />
      <Stack.Screen name="home" component={Home} />
    </Stack.Navigator>
  );
}

function RootNavigator() {
  return (
    <NavigationContainer>
      <ChatStack />
    </NavigationContainer>
  );
}

const App = () => {
  return <RootNavigator />;
};

export default App;
