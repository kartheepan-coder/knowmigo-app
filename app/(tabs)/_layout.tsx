import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";
import {
  MessageCircle,
  User,
  UserPlus,
  StickyNote,
  Home,
  FolderCode,
} from "lucide-react-native";

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Disable the static render of the header on web
        // to prevent a hydration error in React Navigation v6.
        headerShown: useClientOnlyValue(false, true),
        // tabBarStyle: {},
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => <Home color={color} />,
        }}
      />
      <Tabs.Screen
        name="students"
        options={{
          title: "Students",
          tabBarIcon: ({ color }) => <User color={color} />,
          headerShown: false,
          headerRight: () => (
            <UserPlus color={"black"} style={{ margin: 10 }} />
          ),
        }}
      />
      <Tabs.Screen
        name="test"
        options={{
          title: "Test",
          headerShown: false,
          tabBarIcon: ({ color }) => <FolderCode color={color} />,
        }}
      />
      <Tabs.Screen
        name="hello"
        options={{
          title: "Hello",
          tabBarIcon: ({ color }) => <StickyNote color={color} />,
        }}
      />{" "}
    </Tabs>
  );
}
