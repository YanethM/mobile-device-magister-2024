import React, { useEffect, useState } from "react";
import { Modal, Pressable, StyleSheet, Text, View } from "react-native";
import client from "../../../api/client";
import { MaterialIcons } from "@expo/vector-icons";

export const UserDetailModal = ({ visible, userId }) => {
  console.log(userId);
  const [visible1, setVisible] = useState(visible)

  const showModal   = () => {
    setVisible(!visible1);
    console.log(visible1);
  };

  const fetchUserById = (userId) => {
    console.log(userId);

    const response = client.get(`/users/${userId}`);
    console.log(response);
  };

  useEffect(() => {
    fetchUserById(userId);
  }, [userId]);

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      
    >
      <View style={styles.centeredView}>
        <Pressable
          onPress={showModal}
          style={styles.closeModal}
        >
          <MaterialIcons
            name="close"
            size={18}
            color="black"
          />
        </Pressable>
        <View style={styles.modalView}>
          <Text>{userId}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  closeModal: {
    position: "absolute",
    top: 10,
    right: 10,
    padding: 10,
  },
});
