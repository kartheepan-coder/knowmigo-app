import { View, Text } from "@/components/Themed";
import { useEffect } from "react";
import { Button } from "react-native";
import ImagePicker from "react-native-image-crop-picker";

export default function Test() {
  useEffect(() => {
    console.log(ImagePicker);
  }, []);
  return (
    <View>
      <Text>Below will be a button</Text>
      <Button title="Click me" onPress={() => console.log("hiii")}></Button>
    </View>
  );
}
