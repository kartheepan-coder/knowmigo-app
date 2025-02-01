import {
  View,
  Text,

  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import React, { useCallback, useMemo, useRef } from "react";

import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";


import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { Link, router } from "expo-router";
import { Button, ButtonText } from "@/components/ui/button"

// import { Imageu as Reactcomp } from "";

export default function TabOneScreen() {
  const snapPoints = useMemo(() => ["25", "50", "100"], []);
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // callbacks
  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);
  const handleSheetChanges = useCallback((index: number) => {
    console.log("handleSheetChanges", index);
  }, []);
  return (
    <SafeAreaProvider>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <BottomSheetModalProvider>
          <SafeAreaView>

            <View className="w-full h-full flex justify-center items-center" style={{backgroundColor:"yellow"}}>
            <Button className="flex justify-center items-center  rounded-2xl" onPress={() => handlePresentModalPress()}>

<ButtonText className="p-2">
Share an update </ButtonText>
</Button>
          </View>

            <BottomSheetModal
              ref={bottomSheetModalRef}
              index={1}
              snapPoints={snapPoints}
              onChange={handleSheetChanges}
              style={{margin:10}}
              backgroundStyle={{ backgroundColor: 'white' }}

            >
              <BottomSheetView style={styles.contentContainer}>

<Text>
  Hii
</Text>
              </BottomSheetView>
            </BottomSheetModal>
          </SafeAreaView>
        </BottomSheetModalProvider>
      </GestureHandlerRootView>
    </SafeAreaProvider>
  );
}

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
