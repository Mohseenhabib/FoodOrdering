import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  FlatList,
  Keyboard,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import React, { useState } from "react";
import Colors from "@/src/constants/Colors";
import Button from "@/src/components/Button";
import * as ImagePicker from "expo-image-picker";
import { Stack, useLocalSearchParams } from "expo-router";

const CreateProductScreen = () => {
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [errors, setErrors] = useState("");
  const [image, setImage] = useState<string | null>(null);
  const { id } = useLocalSearchParams();
  const isUpdating = !!id;
  const hideKeyboard = () => {
    Keyboard.dismiss();
  };

  const resetFields = () => {
    setName("");
    setPrice("");
  };
  const validateInput = () => {
    setErrors("");
    if (!name) {
      setErrors("*Name is required");
      return false;
    }
    if (!price) {
      setErrors("*Price is Required");
      return false;
    }
    if (isNaN(parseFloat(price))) {
      setErrors("*Price should be numerical");
    }
    return true;
  };
  const onSubmit = () => {
    if (isUpdating) {
      onUpdateCreate();
    } else {
      onCreate();
    }
  };
  const onCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("Creating Product");

    resetFields();
  };
  const onUpdateCreate = () => {
    if (!validateInput()) {
      return;
    }
    console.warn("Updating Product");

    resetFields();
  };
  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };
  const onDelete = () => {
    console.warn("Deleting Product");
  };
  const confirmDelete = () => {
    Alert.alert(
      "Are you sure?",
      "You will not be able to recover this imaginary file!",
      [
        {
          text: "Cancel",
        },
        { text: "Delete", style: "destructive", onPress: onDelete },
      ],
      { cancelable: false }
    );
  };
  return (
    <>
      <Stack.Screen
        options={{ title: isUpdating ? "Update Product" : "Create Product" }}
      />
      <View style={styles.container}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Image
            source={{
              uri:
                image ||
                "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/food/margarita.png",
            }}
            style={styles.image}
          />
        </TouchableWithoutFeedback>
        <Text onPress={pickImage} style={styles.textButton}>
          Change Photo
        </Text>
        <Text style={styles.label}>Name</Text>
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Name"
          style={styles.input}
        />
        <Text style={styles.label}>Price (SAR)</Text>
        <TextInput
          value={price}
          onChangeText={setPrice}
          placeholder="9.99"
          style={styles.input}
          keyboardType="numeric"
        />
        <Text style={{ color: "red", fontStyle: "italic" }}> {errors}</Text>
        <Button onPress={onSubmit} text={isUpdating ? "Update" : "Create"} />
        {isUpdating && (
          <Text onPress={confirmDelete} style={styles.a}>
            Delete
          </Text>
        )}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 10,
    backgroundColor: "black",
  },
  label: {
    color: "white",
    fontSize: 16,
  },
  image: {
    aspectRatio: 1,
    alignSelf: "center",

    width: "100%",
    marginVertical: 0,
    marginBottom: 0,
  },
  textButtonContainer: {
    backgroundColor: Colors.light.tint,
    paddingBottom: 8888,
    alignItems: "center",
    borderRadius: 100,
    marginBottom: 10,
  },
  input: {
    backgroundColor: "black",
    padding: 10,
    borderRadius: 6,
    marginTop: 5,
    marginBottom: 20,
    borderColor: "grey",
    borderWidth: 1,
    color: "white",
  },
  textButton: {
    alignSelf: "center",
    color: Colors.light.tint,
    fontWeight: "bold",
    marginVertical: 10,
    marginBottom: 10,
  },
  imageContainer: {
    width: 425,
    height: 450,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 0.5,
  },
  a: {
    alignSelf: "center",
    color: "red",
    fontWeight: "bold",
    marginVertical: 10,
    marginBottom: 10,
  },
});
export default CreateProductScreen;
