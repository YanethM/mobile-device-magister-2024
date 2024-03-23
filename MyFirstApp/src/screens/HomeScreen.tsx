import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import { Text, View } from "react-native";
import axios from "axios";
import { UserList } from "../components/users/UserList";

export const HomeScreen = () => {
  const navigation = useNavigation();
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchUsers = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get("http://192.168.1.9:3000/api/v1/users");
      console.log(response.data);
      setUsers(response.data);
    } catch (error) {
      console.log("Error", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      {isLoading && <Text>Cargando</Text>}
      {!isLoading && <UserList users={users} />}
    </View>
  );
};
