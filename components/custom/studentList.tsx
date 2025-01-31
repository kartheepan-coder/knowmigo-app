import { AvatarBadge, AvatarGroup, AvatarImage } from "../ui/avatar";
import { Image } from "expo-image";
import { Divider } from "@rneui/themed";
import { useState } from "react";
import { FlatList, View, Text } from "react-native";
import { AvatarFallbackText, Avatar } from "../ui/avatar";
import { ChevronRight } from "lucide-react-native";

function StudentList() {
  const [data, setdata] = useState([
    { _id: 1, name: "Karthee" },
    { _id: 2, name: "Rathu" },
    { _id: 3, name: "Mathu" },
    { _id: 3, name: "Mathu" },
    { _id: 3, name: "Mathu" },
    { _id: 3, name: "Mathu" },
    { _id: 3, name: "Mathu" },
    { _id: 3, name: "Mathu" },
    { _id: 1, name: "Karthee" },
    { _id: 2, name: "Rathu" },
    { _id: 3, name: "Mathu" },
    { _id: 3, name: "Mathu" },
    { _id: 3, name: "Mathu" },
    { _id: 3, name: "Mathu" },
    { _id: 3, name: "Mathu" },
    { _id: 3, name: "Mathu" },
  ]);
  const renderItem = ({ item, index, separators }) => {
    return <StudentListItem name={data[index].name} />;
  };

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      contentContainerClassName="flex justify-center item-center  py-5"
      ItemSeparatorComponent={(props) => {
        return (
          // <Divider
          //   insetType="middle"
          //   className="py-1"
          //   style={{}}
          //   // width={100}
          // />
          <View
            style={{ backgroundColor: "transparent" }}
            className="w-[95%] h-[1px] bg-[#E5E5E5] mt-2"
          ></View>
        );
      }}
    />
  );
}

const StudentListItem = (name: { name: string }) => {
  return (
    <View
      style={{ backgroundColor: "transparent" }}
      className=" flex justify-center items-center"
    >
      {/* <DomComponent /> */}
      <View
        style={{ backgroundColor: "white" }}
        className="w-[85%] flex justify-between items-center min-h-16 flex-row rounded-md"
      >
        <View className="flex flex-row justify-center items-center ml-3 my-3">
          <Avatar size="md" className="rounded-full">
            <AvatarFallbackText>{name.name}</AvatarFallbackText>
            <AvatarImage source={require("../../assets/images/profile.png")} />
            {/* <Image
              source={require("../../assets/images/Profile.png")}
              className="h-full w-full rounded-full absolute"
            /> */}
            <AvatarBadge />
          </Avatar>
          <View className="flex justify-start items-start ml-3 ">
            <Text className="text-lg">{name.name}</Text>
            <Text className="text-sm">Age 17</Text>
          </View>
        </View>

        {/* <ChevronRightIcon fontSize={"20px"} /> */}
        <View className="mr-3">
          <ChevronRight color={"black"} />
        </View>
      </View>
    </View>
  );
};

const StudentGroup = () => {
  return (
    <View className="flex flex-row justify-center w-ful py-10">
      <AvatarGroup>
        <Avatar size="lg">
          <AvatarFallbackText>John Doe</AvatarFallbackText>
          <AvatarImage source={require("../../assets/images/profile.png")} />
        </Avatar>
        <Avatar size="lg">
          <AvatarFallbackText>John Doe</AvatarFallbackText>
          <AvatarImage source={require("../../assets/images/rathu.png")} />
        </Avatar>
        <Avatar size="lg">
          <AvatarFallbackText>John Doe</AvatarFallbackText>
          <AvatarImage source={require("../../assets/images/don.png")} />
        </Avatar>{" "}
        <Avatar size="lg">
          <AvatarFallbackText>John Doe</AvatarFallbackText>
          <AvatarImage source={require("../../assets/images/yellowme.png")} />
        </Avatar>
      </AvatarGroup>
    </View>
  );
};

export { StudentList, StudentGroup };
