import { Pressable, StyleSheet, Image } from "react-native";
import {
  getDownloadURL,
  getStorage,
  listAll,
  ref as storageRef,
} from "firebase/storage";

import { MessageCircle, MoreHorizontal } from "lucide-react-native";
import {
  AvatarFallbackText,
  AvatarImage,
  AvatarBadge,
  Avatar,
  AvatarGroup,
} from "@/components/ui/avatar";

import { Text, View } from "@/components/Themed";

import {
  GestureHandlerRootView,
  ScrollView,
} from "react-native-gesture-handler";
import { useEffect, useState } from "react";
import { HStack } from "@/components/ui/hstack";
import { VStack } from "@/components/ui/vstack";
import { app, auth, bucket } from "@/firebaseConfig";
import { updateProfile, User } from "firebase/auth";

export default function TabTwoScreen() {
  useEffect(() => {
    console.log(auth);
  }, []);
  return (
    // <View className="w-screen h-full rounded-lg flex justify-center items-center">

    <View>
      <ScrollView
        stickyHeaderIndices={[0]}
        showsVerticalScrollIndicator={false}
      >
        <AppBar />
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
    </View>
    // </View>
  );
}

const AppBar = () => {
  const [userDp, setuserDp] = useState("");

  useEffect(() => {
    const getUserDp = async () => {
      const storage = getStorage(app);
      const imageRef = storageRef(
        storage,
        auth.currentUser?.photoURL as string
      );
      console.log(await getDownloadURL(imageRef));
      setuserDp(await getDownloadURL(imageRef));
    };
    getUserDp();
  }, []);

  return (
    <View className="w-full h-auto flex flex-row justify-between items-center px-5">
      <Image
        source={require("../../assets/images/logo.png")}
        width={42}
        height={42}
        className="h-[42px] w-[42px]"
      ></Image>
      <Pressable
        onPress={async () => {
          // console.log(auth.currentUser?.photoURL);
          // await updateProfile(auth.currentUser as User, {
          //   displayName: "vyshika",
          //   photoURL:
          //     "gs://knowmigo-699e8.firebasestorage.app/images/rathushan.png",
          // });
          console.log("hiii");
          try {
            const storage = getStorage();
            console.log(auth.currentUser?.photoURL);

            const imageRef = storageRef(
              storage,
              auth.currentUser?.photoURL as string
            );
            console.log(imageRef);

            console.log(await getDownloadURL(imageRef));

            // Create a reference under which you want to list
            // const listRef = storageRef(storage, "images/rathushan.png");

            // console.log(await getDownloadURL(listRef));

            // // Find all the prefixes and items.
            // listAll(listRef)
            //   .then((res) => {
            //     res.prefixes.forEach((folderRef) => {
            //       console.log(folderRef);
            //       // All the prefixes under listRef.
            //       // You may call listAll() recursively on them.
            //     });
            //     res.items.forEach((itemRef) => {
            //       console.log(itemRef);
            //       // All the items under listRef.
            //     });
            //   })
            //   .catch((error) => {
            //     // Uh-oh, an error occurred!
            //     console.error(error);
            //   });
          } catch (error) {
            console.error(error);
          }
          // console.log(await getDownloadURL(storeageRef));
        }}
      >
        <Avatar size="md" className="rounded-full my-[10px]">
          <AvatarFallbackText>Kartheepan</AvatarFallbackText>
          <AvatarImage source={{ uri: userDp }} />

          {/* <AvatarBadge /> */}
        </Avatar>
      </Pressable>
    </View>
  );
};

const KnowmigoPost = () => {
  return (
    <View className="flex justify-around items-center mt-4">
      <View
        className="w-[95%] px-5 rounded-2xl py-3"
        style={[styles.shadowProp, styles.elevation]}
      >
        <HStack className="justify-between">
          <HStack>
            <Avatar size="md" className="rounded-full my-[10px]">
              <AvatarFallbackText>Kartheepan</AvatarFallbackText>
              <AvatarImage
                source={require("../../assets/images/kartheepan.png")}
              />

              {/* <AvatarBadge /> */}
            </Avatar>
            <VStack className="ml-2 h-auto flex justify-center">
              <Text className="font-bold">Kartheepan</Text>
              <HStack>
                <Text className="text-red" style={{ color: "#A5A5A5" }}>
                  Added 2 updates to{" "}
                </Text>
                <Text className="font-bold">Botany 🌱</Text>
              </HStack>
            </VStack>
          </HStack>
          <Text className="py-3 text-sm font-bold" style={{ color: "#A5A5A5" }}>
            now
          </Text>
        </HStack>
        <VStack className="mt-3 mb-2">
          <Text className="text-md">
            I was Fascinated to learn that Banana’s 🍌 scientific name is Musa
            balbisiana 😅.
          </Text>
        </VStack>
        <HStack className="">
          <VStack className="mr-3">
            <Text className="text-red" style={{ color: "#A5A5A5" }}>
              Source
            </Text>
            <Text>Wikipedia🌐</Text>
          </VStack>
          <VStack>
            <Text className="text-red" style={{ color: "#A5A5A5" }}>
              Level
            </Text>
            <Text>happy 😅</Text>
          </VStack>
        </HStack>
        {/* <View
          className="w-[90%] h-[100px] mx-[30px]"
          style={{ backgroundColor: "black" }}
        >
          <Text>Image</Text>
        </View> */}
        <HStack className="justify-end items-center mt-3">
          <AvatarGroup className="mr-[6px]">
            <Avatar size="sm">
              <AvatarFallbackText>John Doe</AvatarFallbackText>
              <AvatarImage
                source={require("../../assets/images/rathushan.png")}
              />
            </Avatar>
            <Avatar size="sm">
              <AvatarFallbackText>John Doe</AvatarFallbackText>
              <AvatarImage
                source={require("../../assets/images/aaruthi.png")}
              />
            </Avatar>
            <Avatar size="sm">
              <AvatarFallbackText>John Doe</AvatarFallbackText>
              <AvatarImage
                source={require("../../assets/images/vyshika.png")}
              />
            </Avatar>
          </AvatarGroup>
          <Text>and 5 others</Text>
        </HStack>
      </View>
    </View>
  );
};

const KnowmigoFollow = ({
  name = "Kartheepan",
  description,
}: {
  name?: string;
  description?: string;
}) => {
  // Remove this line as it won't work
  // const [studentProf] = useState(`../../assets/images/${name}.png`);

  // Create an object map for your images
  const imageMap: { [key: string]: any } = {
    Kartheepan: require("../../assets/images/kartheepan.png"),
    Rathushan: require("../../assets/images/rathushan.png"),
    Vyshika: require("../../assets/images/vyshika.png"),
    Aaruthi: require("../../assets/images/aaruthi.png"),
  };

  // Use the map to get the correct image
  const userProf = imageMap[name] || imageMap.karthee; // fallback to karthee if name not found

  return (
    <View
      style={[
        { backgroundColor: "white" },
        styles.shadowProp,
        styles.elevation,
      ]}
      className="w-[180px] h-auto rounded-2xl flex justify-center items-center mr-[10px] max-h-[170px]"
    >
      <Avatar size="md" className="rounded-full my-[10px]">
        <AvatarFallbackText>{name}</AvatarFallbackText>
        <AvatarImage source={userProf} />

        <AvatarBadge />
      </Avatar>
      <View className="w-full flex justify-center items-center">
        <Text className="text-lg font-bold">{name ? name : "Kartheepan"}</Text>
        <Text className="mb-[18px] text-sm text-center">
          {description ? description : "17, Biology 🫀"}
        </Text>
      </View>
      <Pressable
        className="mb-[10px]"
        disabled={false}
        onPress={() => {
          auth.signOut();
          console.log("clicked");
        }}
      >
        <View
          className="w-auto h-auto rounded-full"
          style={{ backgroundColor: "black" }}
        >
          <Text className="px-[30px] py-[10px] " style={{ color: "white" }}>
            Follow
          </Text>
        </View>
      </Pressable>
    </View>
  );
};

const Post = () => {
  return (
    <View>
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
  );
};

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
  shadowProp: {
    shadowColor: "#171717",
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  elevation: {
    elevation: 20,
    shadowColor: "#2E77F8",
  },
});

export { AppBar, KnowmigoFollow, KnowmigoPost };
