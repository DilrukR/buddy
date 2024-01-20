import { useNavigation } from "@react-navigation/native";
import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from "react-native";

const EditProfileView = () => {
  const navigation = useNavigation();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [bio, setBio] = useState("");
  const [regNo, setRegN0] = useState("");
  const [contactNo, setContactNo] = useState("");
  const [hostall, setHostall] = useState("");
  const [roomNo, setRoomNo] = useState("");
  const [avatar, setAvatar] = useState("");

  const handleSubmit = () => {
    navigation.navigate("Home");

    if (!name || !email || !regNo || !roomNo || !contactNo || !hostel) {
      Alert.alert("All fields are required");
      return;
    }

    // Perform other validations if needed

    console.log("Form submitted with data:", {
      name,
      email,
      regNo,
      roomNo,
      contactNo,
      hostel,
    });

    // Reset form fields after submission
    setName("");
    setEmail("");
    setRegNo("");
    setRoomNo("");
    setContactNo("");
    setHostel("");

    // Additional actions after successful submission
  };

  return (
    <View style={styles.container}>
      <View className='w-full flex items-center mt-12 '>
        <Text className='text-2xl text-colorSecondory font-bold'>
          Complete Your Profile
        </Text>
      </View>
      <View style={styles.avatarContainer}></View>
      <View style={styles.form}>
        <Text style={styles.label}>Full Name</Text>
        <TextInput
          style={styles.input}
          placeholder='Your Full Name'
          value={name}
          onChangeText={setName}
        />
        <Text style={styles.label}>Email</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Email'
          value={email}
          onChangeText={setEmail}
        />

        <Text style={styles.label}>Registration Number</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Registration Number'
          value={regNo}
          onChangeText={setRegN0}
        />

        <Text style={styles.label}>Room Number</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter your Room Number'
          value={roomNo}
          onChangeText={setRoomNo}
        />

        <Text style={styles.label}>Contact Number</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter you Contact Number'
          value={contactNo}
          onChangeText={setContactNo}
        />

        <Text style={styles.label}>Current Hostel</Text>
        <TextInput
          style={styles.input}
          placeholder='Enter Current Hostel Name'
          value={hostall}
          onChangeText={setHostall}
        />
        <TouchableOpacity
          onPress={handleSubmit}
          style={{
            elevation: 10,
            shadowColor: "#000",
            shadowRadius: 10,
            shadowOffset: {
              width: 20,
              height: 20,
            },
            overflow: "visible",
          }}
          className='width-full mt-16 mb-10 mx-5 h-16 bg-colorSecondory  rounded-3xl flex items-center justify-center shadow-2xl '
        >
          <Text className='text-white font-bold text-xl'>Proceed</Text>
        </TouchableOpacity>
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
  form: {
    width: "80%",
  },
  label: {
    marginTop: 20,
  },
  input: {
    borderColor: "#ccc",
    borderBottomWidth: 2,
    borderRadius: 5,
    padding: 10,
    fontSize: 18,
  },
  button: {
    marginTop: 20,
    backgroundColor: "#1E90FF",
    borderRadius: 5,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "#fff",
    fontSize: 18,
  },
  avatarContainer: {
    marginTop: 20,
    alignItems: "center",
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  changeAvatarButton: {
    marginTop: 10,
  },
  changeAvatarButtonText: {
    color: "#1E90FF",
    fontSize: 18,
  },
});

export default EditProfileView;
