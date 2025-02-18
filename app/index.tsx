import { Input, InputField } from "@/components/ui/input";
import { auth } from "@/constants/firebaseConfig";
import { Button } from "@rneui/base";
import { Redirect, router, usePathname } from "expo-router";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { useEffect } from "react";
import { View, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Home() {
  const signIn = async () => {
    try {
      const response = await signInWithEmailAndPassword(
        auth,
        "karthee@gmail.com",
        "password"
      );
      // console.log(response.user);
      if (response) {
        router.replace("/(tabs)/home");
      }
    } catch (error) {
      console.error(error);
    }
  };
  const path = usePathname();
  useEffect(() => {
    console.log(path);
  }, []);
  auth.onAuthStateChanged((user) => {
    if (user) {
      // User is signed in, see docs for a list of available properties
      //  URL_ADDRESS.google.com/docs/reference/js/firebase.User
      const uid = user.uid;
      console.log("Logged");

      // ...
    } else {
      // User is signed out
      console.log("Logged out");
      // ...
    }
  });

  return (
    <SafeAreaView>
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Enter Text here..." />
      </Input>{" "}
      <Input
        variant="outline"
        size="md"
        isDisabled={false}
        isInvalid={false}
        isReadOnly={false}
      >
        <InputField placeholder="Enter Password here..." />
      </Input>
      <Button title={"Auth"} onPress={signIn} />
      <Button
        title={"Log out"}
        onPress={() => {
          auth.signOut();
        }}
      />
      <Button
        title={"current user"}
        onPress={() => {
          console.log(auth.currentUser);
        }}
      />
    </SafeAreaView>
  );
}
