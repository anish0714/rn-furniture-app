import React from "react";
import { View, Image, Text, Dimensions } from "react-native";
const NewArrivals = ({ imgSrc }) => {
  return (
    <View
      style={{
        flexDirection: "row",
        height: 60,
        // width: Dimensions.get("window").width - 80,
         width: 280,
        backgroundColor: "#fff",
        elevation: 2,
        padding: 6,
        marginVertical: 5,
        marginRight: 10,
        marginLeft: 2,
        borderRadius: 10,
      }}
    >
      <View>
        <Image
          source={imgSrc}
          resizeMode="contain"
          style={{
            height: 50,
            width: 100,
            borderRadius: 10,
          }}
        />
      </View>
      <View
        style={{
          //flexDirection: "row",
          width: "65%",
          justifyContent: "space-between",
          paddingHorizontal: 10,
          height: "100%",
        }}
      >
        <Text
          style={{
            fontSize: 8,
          }}
        >
          Slakal sleeves short dress with three attractive colors
        </Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 11,
              fontWeight: "bold",
            }}
          >
            454.69 CAD
          </Text>
          <Image
            source={require("../images/add.png")}
            style={{
              height: 17,
              width: 17,
            }}
          />
        </View>
      </View>
    </View>
  );
};

export default NewArrivals;
