import React from "react";
import { Text, View, Image, Dimensions } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
const Couches = ({ cost, name, imgSrc, goToDetail }) => {
  return (
    <TouchableOpacity
      onPress={() => goToDetail()}
      style={{
        marginTop: 30,
        backgroundColor: "#FFF",
        //height: 250,
        width: Dimensions.get("window").width - 120,
        elevation: 2,
        borderRadius: 10,
        padding: 15,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5,
      }}
    >
      <Image
        source={imgSrc}
        resizeMode="contain"
        style={{
          width: "100%",
          height: 200,
          borderRadius: 10,
        }}
      />
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          marginVertical: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#4f4a4a",
            fontSize: 12,
          }}
        >
          {name}
        </Text>
        <View
          style={{
            height: 4,
            width: 4,
            borderRadius: 4,
            backgroundColor: "red",
            marginHorizontal: 4,
          }}
        ></View>
        <Text
          style={{
            color: "red",
            fontSize: 9,
            fontWeight: "bold",
          }}
        >
          New
        </Text>
      </View>
      <Text
        style={{
          fontSize: 9,
          color: "#4f4a4a",
        }}
      >
        Full sleeves short dress with three attractive colors and and available
        in various sizes.
      </Text>

      <View
        style={{
          flexDirection: "row",
          marginTop: 5,
          alignItems: "center",
          width: "100%",
        }}
      >
        <View
          style={{
            width: "80%",
          }}
        >
          <Text
            style={{
              fontSize: 15,
              fontWeight: "bold",
            }}
          >
            {cost} CAD
          </Text>
        </View>
        <View
          style={{
            width: "20%",
          }}
        >
          <Image
            source={require("../images/add.png")}
            style={{
              alignSelf: "flex-end",
              width: 25,
              height: 25,
            }}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Couches;
