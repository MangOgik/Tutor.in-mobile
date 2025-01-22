import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from "react-native";
import React, { useState, useEffect } from "react";
import { useRouter } from "expo-router";
import CustomText from "../components/CustomText";
import { FontAwesome5 } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";

interface FieldProps {
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: string;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
}

interface TentorRegistrationFieldsProps extends FieldProps {
  department: string;
  setDepartment: React.Dispatch<React.SetStateAction<string>>;
}

interface LoginFieldsProps {
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  isRememberMe: boolean;
  setIsRememberMe: React.Dispatch<React.SetStateAction<boolean>>;
}

const MentorRegistrationFields = ({
  name,
  setName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  password,
  setPassword,
}: FieldProps) => (
  <View className="space-y-6 mb-6">
    <TextInput
      className="bg-gray-100 rounded-lg p-4"
      onChangeText={setName}
      value={name}
      placeholder="Nama Lengkap"
      keyboardType="name-phone-pad"
    />
    <TextInput
      className="bg-gray-100 rounded-lg p-4"
      onChangeText={setEmail}
      value={email}
      placeholder="Email"
      keyboardType="email-address"
    />
    <TextInput
      className="bg-gray-100 rounded-lg p-4"
      onChangeText={setPhoneNumber}
      value={phoneNumber}
      placeholder="Nomor Handphone"
      keyboardType="number-pad"
    />
    <TextInput
      className="bg-gray-100 rounded-lg p-4"
      onChangeText={setPassword}
      value={password}
      placeholder="Password"
      textContentType="newPassword"
      secureTextEntry={true}
    />
  </View>
);

// Tentor Registration Fields Component
const TentorRegistrationFields = ({
  name,
  setName,
  email,
  setEmail,
  phoneNumber,
  setPhoneNumber,
  department,
  setDepartment,
  password,
  setPassword,
}: TentorRegistrationFieldsProps) => (
  <View className="space-y-6">
    <TextInput
      className="bg-gray-100 rounded-lg p-4"
      onChangeText={setName}
      value={name}
      placeholder="Nama Lengkap"
      keyboardType="name-phone-pad"
    />
    <TextInput
      className="bg-gray-100 rounded-lg p-4"
      onChangeText={setEmail}
      value={email}
      placeholder="Email"
      keyboardType="email-address"
    />
    <TextInput
      className="bg-gray-100 rounded-lg p-4"
      onChangeText={setPhoneNumber}
      value={phoneNumber}
      placeholder="Nomor Handphone"
      keyboardType="number-pad"
    />
    <TextInput
      className="bg-gray-100 rounded-lg p-4"
      onChangeText={setDepartment}
      value={department}
      placeholder="Jurusan"
      keyboardType="default"
    />
    <TextInput
      className="bg-gray-100 rounded-lg p-4"
      onChangeText={setPassword}
      value={password}
      placeholder="Password"
      textContentType="newPassword"
      secureTextEntry={true}
    />
  </View>
);

// Login Fields Component
const LoginFields = ({
  email,
  setEmail,
  password,
  setPassword,
  isRememberMe,
  setIsRememberMe,
}: LoginFieldsProps) => (
  <View className="space-y-6">
    <TextInput
      className="bg-gray-100 rounded-lg p-4"
      onChangeText={setEmail}
      value={email}
      placeholder="Email"
      keyboardType="email-address"
    />
    <TextInput
      className="bg-gray-100 rounded-lg p-4"
      onChangeText={setPassword}
      value={password}
      placeholder="Password"
      textContentType="newPassword"
      secureTextEntry={true}
    />
    <TouchableWithoutFeedback onPress={() => setIsRememberMe(!isRememberMe)}>
      <View className="flex flex-row space-x-3 pt-4 pb-8">
        <Checkbox value={isRememberMe} color="orange" />
        <CustomText className="text-center">Remember me</CustomText>
      </View>
    </TouchableWithoutFeedback>
  </View>
);

// Main Login Component
const Login = () => {
  const router = useRouter();
  const [isMentor, setIsMentor] = useState(false);
  const [isRememberMe, setIsRememberMe] = useState(false);
  const [isRegister, setIsRegister] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = () => {
    router.push("/(tabs)/home");
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <View className="w-full h-full bg-primary flex">
        <Image
          className="w-full h-1/3"
          source={require("@/src/assets/images/teaching_illustration.png")}
          resizeMode="contain"
        />
        <View className="h-2/3 bg-white rounded-t-3xl p-4 flex space-y-4 shadow-black shadow-2xl">
          {/* Title */}
          <CustomText className="text-center font-poppinsBold text-3xl">
            {isRegister ? "Membuat Akun" : "Masuk Akun"}
          </CustomText>

          {/* Choosing Role */}
          <View className="w-full flex flex-row items-stretch space-x-4">
            <TouchableOpacity
              activeOpacity={0.8}
              className={`flex-1 p-2 flex flex-row items-center justify-start border ${
                isMentor ? "bg-primary" : ""
              } border-primary rounded-lg`}
              onPress={() => setIsMentor(true)}
            >
              <FontAwesome5
                name="chalkboard-teacher"
                size={18}
                color={isMentor ? "white" : "orange"}
              />
              <CustomText
                className={`text-center flex-grow py-1 rounded-lg ${
                  isMentor ? "text-white" : "text-primary"
                }`}
              >
                Mentor
              </CustomText>
            </TouchableOpacity>
            <TouchableOpacity
              activeOpacity={0.8}
              className={`flex-1 p-2 flex flex-row items-center justify-start border ${
                !isMentor ? "bg-primary" : ""
              } border-primary rounded-lg`}
              onPress={() => setIsMentor(false)}
            >
              <FontAwesome5
                name="user-graduate"
                size={18}
                color={!isMentor ? "white" : "orange"}
              />
              <CustomText
                className={`text-center flex-grow py-1 rounded-lg ${
                  !isMentor ? "text-white" : "text-orange-400"
                }`}
              >
                Tentor
              </CustomText>
            </TouchableOpacity>
          </View>

          {/* Input Fields */}
          <View className="flex-1">
            <ScrollView>
              {isRegister ? (
                isMentor ? (
                  <MentorRegistrationFields
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    password={password}
                    setPassword={setPassword}
                  />
                ) : (
                  <TentorRegistrationFields
                    name={name}
                    setName={setName}
                    email={email}
                    setEmail={setEmail}
                    phoneNumber={phoneNumber}
                    setPhoneNumber={setPhoneNumber}
                    department={department}
                    setDepartment={setDepartment}
                    password={password}
                    setPassword={setPassword}
                  />
                )
              ) : (
                <LoginFields
                  email={email}
                  setEmail={setEmail}
                  password={password}
                  setPassword={setPassword}
                  isRememberMe={isRememberMe}
                  setIsRememberMe={setIsRememberMe}
                />
              )}
            </ScrollView>
          </View>

          {/* Submit Button */}
          <View className="flex items-center justify-end space-y-2">
            <TouchableOpacity
              activeOpacity={0.8}
              className="w-full p-2 flex flex-row items-center justify-center border bg-primary border-primary rounded-lg"
              onPress={handleSubmit}
            >
              <CustomText className="text-center py-1 rounded-lg text-white">
                {isRegister ? "Daftar" : "Masuk"}
              </CustomText>
            </TouchableOpacity>
            <CustomText className="text-center py-1 rounded-lg text-black">
              {isRegister ? "Sudah punya akun?" : "Belum punya akun?"}{" "}
              <TouchableWithoutFeedback
                onPress={() => setIsRegister(!isRegister)}
              >
                <CustomText className="font-poppinsBold">
                  {isRegister ? "Login di sini" : "Register di sini"}
                </CustomText>
              </TouchableWithoutFeedback>
            </CustomText>
          </View>
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

export default Login;
