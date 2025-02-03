import {
  MarkdownTextInput,
  parseExpensiMark,
} from "@expensify/react-native-live-markdown";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import React, { useCallback, useMemo, useRef, useState } from "react";

import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Link, router } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button";
import DOMComponent from "./hello";
import Editor from "@/components/lexical/hello-dom";

// import { Imageu as Reactcomp } from "";

export default function TabOneScreen() {
  const [editorState, setEditorState] = useState<string | null>(null);
  const [plainText, setPlainText] = useState("");
  const wordCount = editorState?.split(" ").length ?? 0;

  const snapPoints = useMemo(() => ["25", "50", "100"], []);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);

  const [text, setText] = React.useState("Hello, *world*!");
  return (
    <SafeAreaProvider>
      <Editor setPlainText={setPlainText} setEditorState={setEditorState} />
    </SafeAreaProvider>
  );

  // <SafeAreaProvider>
  //   <View>
  //     <Text>boom</Text>
  //     <DOMComponent name="Karthee" />
  //   </View>

  /* <BottomSheetModalProvider>
          <SafeAreaView>
            <View
              className="w-full h-full flex justify-center items-center"
              style={{ backgroundColor: "yellow" }}
            >
              <Button
                className="flex justify-center items-center  rounded-2xl"
                onPress={() => handlePresentModalPress()}
              >
                <ButtonText className="p-2">Share an update </ButtonText>
              </Button>
            </View>

            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              style={{ margin: 10 }}
              backgroundStyle={{ backgroundColor: "white" }}
            >
              <BottomSheetView style={styles.contentContainer}>
                <Text>Boom</Text>
              </BottomSheetView>
            </BottomSheetModal>
          </SafeAreaView>
        </BottomSheetModalProvider> */
}
// </SafeAreaProvider>

const BottomSheetContent = () => {
  return (
    <View
      className="w-screen h-screen flex flex-col justify-end items-center"
      style={{
        backgroundColor: "#F5F4FC",
      }}
    >
      {/* Below Card component */}
      <View
        className="w-[95%] h-auto rounded-[24px] mb-[10px] shadow-cyan-500/50"
        style={{
          backgroundColor: "white",
          // 0px 0px 2.8px #F5F4FC;
          boxShadow: "0 0 10px #F5F4FC",
        }}
      >
        <Image
          source={require("../../assets/images/logo.png")}
          className="w-[50px] h-[50px] ml-[35px] mt-[35px] mb-[10px]"
        ></Image>
        <Text className="font-robot text-xl font-medium text-black ml-[35px]">
          Welcome to Knowmigo
        </Text>{" "}
        <Text className="font-robot text-lg  text-[#A5A5A5] ml-[35px] mt-[10px] leading-[20px]">
          Knowmigo is designed to help you track your running progress in the
          simplest possible way.
        </Text>
        <Button
          style={{ backgroundColor: "black" }}
          className="w-auto m-[35px] mb-[20px] rounded-[8px] h-[50px]"
        >
          <ButtonText className="">Get Started</ButtonText>
        </Button>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: "center",
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
