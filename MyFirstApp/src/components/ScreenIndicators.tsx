import React from "react";
import { View } from "react-native";

export const ScreenIndicators = ({
  count,
  activeIndex,
}: {
  count: number;
  activeIndex: number;
}) => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      {new Array(count).fill("1").map((_, index) => (
        <View
          style={{
            marginHorizontal: 4,
            width: 8,
            height: 8,
            borderRadius: 8,
            backgroundColor: index === activeIndex ? "blue" : "gray",
          }}
          key={index}
        />
      ))}
    </View>
  );
};
