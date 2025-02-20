import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import React, { useEffect, useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { AppBar, KnowmigoFollow, KnowmigoPost } from "./test";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, ButtonText } from "@/components/ui/button";
import { auth } from "@/constants/firebaseConfig";
import { Redirect, router, usePathname } from "expo-router";
import { updateCurrentUser, updateProfile, User } from "firebase/auth";
import { MarkdownTextInput } from "@expensify/react-native-live-markdown";
import markdownStyle from "@/components/markdownEditor/editor";
import Editor from "@/components/lexical/hello-dom";

function Home() {
  const path = usePathname();

  // if (!auth.currentUser) {
  //   return <Redirect href={"/"} />;
  // }
  auth.onAuthStateChanged((user) => {
    if (!user) {
      router.replace("/");
    }
  });

  const [text, setText] = useState("");
  return (
    <SafeAreaView>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      >
        <AppBar />
        {/* <MarkdownTextInput
          value={text}
          onChangeText={setText}
          markdownStyle={markdownStyle}
          multiline={true}
        /> */}

        {/* <Button
          onPress={async () => {
            // auth.signOut();
            await updateProfile(auth.currentUser as User, {
              displayName: "Karthee",
              photoURL:
                "gs://knowmigo-699e8.firebasestorage.app/images/rathushan.png",
            });
          }}
        >
          <ButtonText>Signout</ButtonText>
        </Button> */}
        <VStack className="mt-10">
          <HStack className="justify-between px-5">
            <Text className="font-normal" style={{ fontFamily: "helvetica" }}>
              who to follow
            </Text>
            <Text className="font-bold">see all</Text>
          </HStack>
          <ScrollView
            horizontal
            className="pl-[5px] "
            contentContainerStyle={{
              justifyContent: "center",
              alignItems: "center",
              padding: 20,
            }}
          >
            <KnowmigoFollow />
            <KnowmigoFollow name="Rathushan" description="17, Art 🎭" />
            <KnowmigoFollow name="Vyshika" />
            <KnowmigoFollow name="Aaruthi" />
          </ScrollView>
        </VStack>

        <KnowmigoPost />
        <KnowmigoPost />
        <KnowmigoPost />
        <KnowmigoPost />
      </ScrollView>
    </SafeAreaView>
  );
}

export default Home;
