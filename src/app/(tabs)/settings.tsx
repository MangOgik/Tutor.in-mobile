import type React from "react";
import { useState } from "react";
import { View, ScrollView, Switch, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import CustomText from "@/src/components/CustomText";
export type IconName = keyof typeof MaterialIcons.glyphMap;

export interface SettingItemProps {
  icon: IconName;
  title: string;
  value?: boolean;
  onPress?: () => void;
  toggle?: boolean;
}

export interface SectionHeaderProps {
  title: string;
}

const SettingItem: React.FC<SettingItemProps> = ({
  icon,
  title,
  value,
  onPress,
  toggle,
}) => (
  <TouchableOpacity
    className="flex-row items-center justify-between py-4 border-b border-gray-200"
    onPress={onPress ? onPress : () => {}}
    activeOpacity={0.5}
  >
    <View className="flex-row items-center">
      <MaterialIcons name={icon} size={24} color="#888" />
      <CustomText className="text-base ml-3">{title}</CustomText>
    </View>
    {toggle ? (
      <Switch
        value={value}
        onValueChange={onPress}
        trackColor={{ false: "#ffbe5d97", true: "#ffbe5d97" }}
        thumbColor="#FFA726"
      />
    ) : (
      <MaterialIcons name="chevron-right" size={24} color="#888" />
    )}
  </TouchableOpacity>
);

const SectionHeader: React.FC<SectionHeaderProps> = ({ title }, props) => (
  <CustomText className="text-lg font-poppinsSemiBold mt-2 mb-2" {...props}>
    {title}
  </CustomText>
);

const Settings: React.FC = () => {
  const router = useRouter();
  const [notifications, setNotifications] = useState<boolean>(true);
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <ScrollView className="flex-1 bg-white">
      <View className="p-4">
        <SectionHeader title="Account" />
        <SettingItem icon="person" title="Edit Profile" />
        <SettingItem icon="lock" title="Change Password" />
        <View className="h-4" />
        <SectionHeader title="Notifications" />
        <SettingItem
          icon="notifications"
          title="Push Notifications"
          value={notifications}
          onPress={() => setNotifications(!notifications)}
          toggle
        />
        <View className="h-4" />

        <SectionHeader title="Privacy & Security" />
        <SettingItem icon="security" title="Privacy Settings" />
        <SettingItem icon="verified-user" title="Two-Factor Authentication" />
        <View className="h-4" />

        <SectionHeader title="Appearance" />
        <SettingItem
          icon="palette"
          title="Dark Mode"
          value={darkMode}
          onPress={() => setDarkMode(!darkMode)}
          toggle
        />
        <View className="h-4" />
        <SectionHeader title="Help & Support" />
        <SettingItem icon="help" title="FAQs" />
        <SettingItem icon="support-agent" title="Contact Support" />

        <TouchableOpacity
          className="mt-8 py-4 bg-red-500 rounded-lg"
          onPress={() => router.replace("/login")}
          activeOpacity={0.8}
        >
          <CustomText className="text-white text-center">Logout</CustomText>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Settings;
