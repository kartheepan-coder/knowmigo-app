import {
  View,
  Text,
  Button,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from "react-native";

import React, { useCallback, useMemo, useRef } from "react";
import { StudentGroup, StudentList } from "@/components/custom/studentList";
import BottomSheet, {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import {
  Avatar,
  AvatarBadge,
  AvatarFallbackText,
  AvatarImage,
} from "@/components/ui/avatar";
import { MessageCircle, MoreHorizontal } from "lucide-react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import Test from "./test";

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
      <SafeAreaView>
        <Text>Hii</Text>
        <View>
          {/* <ScrollView className="flex flex-col h-full w-full overflow-scroll">
            <StudentGroup />
            <StudentList />
          </ScrollView> */}
          <Test />
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
    // <View className="h-full flex justify-center items-center  ">
    //   <View
    //     className="h-auto w-[95%] rounded-lg flex justify-center items-center py-4"
    //     style={{ backgroundColor: "white" }}
    //   >
    //     {/* profile component */}
    //     <View
    //       className="flex flex-row w-full justify-between items-center px-4"
    //       style={{ backgroundColor: "transparent" }}
    //     >
    //       <View
    //         className="flex flex-row"
    //         style={{ backgroundColor: "transparent" }}
    //       >
    //         <View>
    //           <Avatar size="lg" className="rounded-full ">
    //             <AvatarFallbackText>karthee</AvatarFallbackText>
    //             <AvatarImage
    //               source={require("../../assets/images/Profile.png")}
    //             />

    //             <AvatarBadge />
    //           </Avatar>
    //         </View>

    //         <View
    //           className="flex flex-col justify-center items-start ml-2"
    //           style={{ backgroundColor: "transparent" }}
    //         >
    //           <Text className="text-lg font-bold">Kartheepan</Text>

    //           <Text className="text-sm font-semibold text-[#A5A5A5]">
    //             Chemistry ⚛️
    //           </Text>
    //         </View>
    //       </View>
    //       <View
    //         style={{
    //           backgroundColor: "transparent",
    //         }}
    //         className="w-[12px] h-full"
    //       >
    //         <MoreHorizontal
    //           color={"black"}
    //           height={"16px"}
    //           width={"16px"}
    //           className="py-2"
    //         />
    //       </View>
    //     </View>
    //     {/* question component */}

    //     <View
    //       style={{ width: "95%", backgroundColor: "#0090FD" }}
    //       className="rounded-lg flex h-auto mt-4"
    //     >
    //       <Text className="text-white p-3 text-justify">
    //         How the atomic model of an atom evolves from golf-ball model to
    //         quantum mechanics ? and building a simulation for that?{" "}
    //       </Text>
    //     </View>

    //     {/* Button */}

    //     <Pressable
    //       onPress={() => console.log("hiii")}
    //       className="w-[95%] rounded-lg flex flex-row justify-center items-center p-2 mt-3"
    //       style={{ backgroundColor: "#F6F6F6" }}
    //     >
    //       {/* <View
    //         className="w-[95%] rounded-lg flex flex-row justify-center items-center p-2 mt-3"
    //         style={{ backgroundColor: "#F6F6F6" }}
    //       > */}
    //       <MessageCircle color={"black"} className="mr-2" />
    //       <Text className="font-bold">Answer</Text>
    //       {/* </View> */}
    //     </Pressable>
    //   </View>
    //   {/* <BottomSheet snapPoints={snapPoints} index={1}>
    //     <BottomSheetView>
    //       <Text>Awesome 🎉</Text>
    //     </BottomSheetView>
    //   </BottomSheet> */}
    //   {/* <StudentList /> */}
    // </View>
    // <GestureHandlerRootView style={styles.container}>
    //   <BottomSheetModalProvider>
    //     <Button
    //       onPress={handlePresentModalPress}
    //       title="Present Modal"
    //       color="black"
    //     />
    //     <BottomSheetModal
    //       ref={bottomSheetModalRef}
    //       onChange={handleSheetChanges}
    //     >
    //       <BottomSheetView style={styles.contentContainer}>
    //         <Text>Awesome 🎉</Text>
    //       </BottomSheetView>
    //     </BottomSheetModal>
    //   </BottomSheetModalProvider>
    // </GestureHandlerRootView>
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
