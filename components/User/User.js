import React from "react";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { useSelector } from "react-redux";
import { images } from "../../lib/images";
import { colors } from "../../lib/colors";

const User = ({ navigation }) => {
  const { profileImage } = useSelector((state) => state.auth.value);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.content}>
        {profileImage ? (
          <Image
            source={{ uri: profileImage }}
            style={styles.image}
            resizeMode="cover"
          />
        ) : (
          <>
            <Image
              source={images.defaultProfile}
              style={styles.image}
              resizeMode="cover"
            />
          </>
        )}
        <Pressable
          style={styles.addImagePressable}
          onPress={() => navigation.navigate("ImageSelector")}
        >
          <Text style={styles.addImageText}>Add image</Text>
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: "relative",
    alignSelf: "stretch",
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  title: {
    fontSize: 28,
    fontFamily: "InterBold",
    marginBottom: 20,
  },
  content: {
    paddingTop: 10,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 100,
  },
  addImagePressable: {
    backgroundColor: colors.mainBlue,
    borderRadius: 10,
  },
  addImageText: {
    fontFamily: "InterSemiBold",
    color: "white",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
});
export default User;
