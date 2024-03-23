import React from "react";
import { FlatList, Text } from "react-native";
import { Avatar, ListItem } from "react-native-elements";

export const UserList = ({ users }) => {
  const BASE_URL = "http://localhost:3000";
  const UPLOADS_FOLDER = "uploads/users";

  const renderItem = ({ item }) => (
    <>
      {console.log(`${BASE_URL}/${UPLOADS_FOLDER}/${item.avatar}`)}
      <ListItem bottomDivider>
        <Avatar
          rounded
          source={{
            uri: item.avatar
              ? `${BASE_URL}/${UPLOADS_FOLDER}/${item.avatar}`
              : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-SnDtnoTbs_JJtNW62ALeA4gKPtpCGcQ5CnVEJNNAddxjuLwrbo1c16rExrxYL4xLmIw&usqp=CAU",
          }}
        />
        <ListItem.Content>
          <ListItem.Title>{item.user_name}</ListItem.Title>
          <ListItem.Subtitle>{item.user_email}</ListItem.Subtitle>
          {item.nacionality && (
            <ListItem.Subtitle>{item.nacionality}</ListItem.Subtitle>
          )}
        </ListItem.Content>
      </ListItem>
    </>
  );

  return (
    <FlatList
      data={users}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
    />
  );
};
