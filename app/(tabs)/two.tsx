import { Pressable, StyleSheet } from "react-native";

import { Text, View } from "@/components/Themed";

import { MessageCircle, MoreHorizontal } from "lucide-react-native";
import {
  AvatarFallbackText,
  AvatarImage,
  AvatarBadge,
  Avatar,
} from "@/components/ui/avatar";

export default function TabTwoScreen() {
  return <View>
<Post/>
  </View>
}



const Post = () => {
  return  <View>
  <View
    className="h-full flex justify-center items-center "
    style={{ backgroundColor: "#E5E5E5" }}
  >
    <View
      className="h-auto w-[95%] rounded-lg flex justify-center items-center py-4"
      style={{ backgroundColor: "white" }}
    >
      {/* profile component */}
      <View
        className="flex flex-row w-full justify-between items-center px-4"
        style={{ backgroundColor: "transparent" }}
      >
        <View
          className="flex flex-row"
          style={{ backgroundColor: "transparent" }}
        >
          <View>
            <Avatar size="lg" className="rounded-full ">
              <AvatarFallbackText>karthee</AvatarFallbackText>
              <AvatarImage
                source={require("../../assets/images/profile.png")}
              />

              <AvatarBadge />
            </Avatar>
          </View>

          <View
            className="flex flex-col justify-center items-start ml-2"
            style={{ backgroundColor: "transparent" }}
          >
            <Text className="text-lg font-bold">Kartheepan</Text>

            <Text className="text-sm font-semibold text-[#A5A5A5]">
              Chemistry ⚛️
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: "transparent",
          }}
          className="w-[12px] h-full"
        >
          <MoreHorizontal
            color={"black"}
            height={"16px"}
            width={"16px"}
            className="py-2"
          />
        </View>
      </View>
      {/* question component */}

      <View
        style={{ width: "95%", backgroundColor: "#0090FD" }}
        className="rounded-lg flex h-auto mt-4"
      >
        <Text className="text-white p-3 text-justify">
          How the atomic model of an atom evolves from golf-ball model to
          quantum mechanics ? and building a simulation for that?{" "}
        </Text>
      </View>

      {/* Button */}

      <Pressable
        onPress={() => console.log("hiii")}
        className="w-[95%] rounded-lg flex flex-row justify-center items-center p-2 mt-3"
        style={{ backgroundColor: "#F6F6F6" }}
      >
        {/* <View
        className="w-[95%] rounded-lg flex flex-row justify-center items-center p-2 mt-3"
        style={{ backgroundColor: "#F6F6F6" }}
      > */}
        <MessageCircle color={"black"} className="mr-2" />
        <Text className="font-bold">Answer</Text>
        {/* </View> */}
      </Pressable>
    </View>
  </View>
</View>

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
