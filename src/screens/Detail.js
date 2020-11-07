import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/MaterialCommunityIcons";
import Stars from "react-native-stars";
import { ScrollView } from "react-native-gesture-handler";

import SwiperComponent from "../common/SwiperComponent";

const styles = StyleSheet.create({
  myStarStyle: {
    color: "yellow",
    backgroundColor: "transparent",
    textShadowColor: "black",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  myEmptyStarStyle: {
    color: "white",
  },
});

const Detail = ({ navigation }) => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#FFF",
        paddingHorizontal: 20,
      }}
    >
      {/* Header -> Back Arrow and Shoping kart */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 40,
        }}
      >
        {/* Back Arrow */}
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            width: "50%",
          }}
        >
          <Image
            source={require("../images/back.png")}
            style={{
              width: 15,
              height: 15,
            }}
          />
        </TouchableOpacity>

        {/* Shopping kart */}
        <View
          style={{
            width: "50%",
            alignItems: "flex-end",
          }}
        >
          <Image
            source={require("../images/bag-2.png")}
            style={{ width: 16, height: 20 }}
          />
        </View>
      </View>

      <View
        style={{
          flexDirection: "row",
          height: 340,
          width: "100%",
        }}
      >
        <View
          style={{
            marginTop: 150,
          }}
        >
          <View
            style={{
              backgroundColor: "#3f3a42",
              height: 25,
              width: 25,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: "#FFF",
              elevation: 5,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#707070",
              height: 25,
              width: 25,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: "#FFF",
              elevation: 5,
              marginVertical: 10,
            }}
          ></View>
          <View
            style={{
              backgroundColor: "#b3b4b9",
              height: 25,
              width: 25,
              borderRadius: 5,
              borderWidth: 2,
              borderColor: "#FFF",
              elevation: 5,
            }}
          ></View>
        </View>
        {/* Swiper Component */}
        <SwiperComponent />
      </View>

      {/* Bookmark image */}
      <View
        style={{
          width: "100%",
          alignItems: "flex-end",
        }}
      >
        <Image
          source={require("../images/save.png")}
          style={{
            marginTop: -45,
            width: 15,
            height: 20,
          }}
        />
      </View>

      {/* Description */}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          width: 15,
          marginTop: 20,
          width: "100%",
        }}
      >
        {/* Heading */}
        <View
          style={{
            width: "65%",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 18,
              color: "#4f4a4a",
            }}
          >
            Autobe best Chair
          </Text>
        </View>
        {/*  */}
        <View
          style={{
            width: "35%",
          }}
        >
          <Text
            style={{
              fontWeight: "bold",
              fontSize: 9,
              color: "#4f4a4a",
            }}
          >
            Customers Rating
          </Text>
          {/* Start */}
          <View
            style={{
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Stars
              default={3.5}
              count={5}
              half={true}
              starSize={20}
              fullStar={<Icon name={"star"} style={[styles.myStarStyle]} />}
              emptyStar={
                <Icon
                  name={"star-outline"}
                  style={[styles.myStarStyle, styles.myEmptyStarStyle]}
                />
              }
              halfStar={
                <Icon name={"star-half"} style={[styles.myStarStyle]} />
              }
            />
            <Text
              style={{
                fontSize: 8,
                fontWeight: "bold",
                marginHorizontal: 5,
                paddingTop: 4,
                color: "#b3aeae",
              }}
            >
              84 Reviews
            </Text>
          </View>
        </View>
      </View>

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 16,
          color: "#b3aeae",
        }}
      >
        250.11 CAD
      </Text>
      <Text
        style={{
          fontSize: 14,
          lineHeight: 20,
          color: "#b3aeae",
          marginTop: 20,
        }}
      >
        Full sleeves short dress with three attractive colors and available in
        various sizes.
      </Text>

      {/*  */}
      <ScrollView
        style={{ marginTop: 40 }}
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f6fb",
            height: 80,
            width: 80,
            borderRadius: 25,
            marginRight: 20,
          }}
        >
          <Image
            source={require("../images/12.png")}
            style={{ height: 80, width: 80 }}
          />
        </View>

        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f6fb",
            height: 80,
            width: 80,
            borderRadius: 25,
            marginRight: 20,
          }}
        >
          <Image
            source={require("../images/13.png")}
            style={{ height: 80, width: 80 }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f6fb",
            height: 80,
            width: 80,
            borderRadius: 25,
            marginRight: 20,
          }}
        >
          <Image
            source={require("../images/14.png")}
            style={{ height: 80, width: 80 }}
          />
        </View>
        <View
          style={{
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#f5f6fb",
            height: 80,
            width: 80,
            borderRadius: 25,
            marginRight: 20,
          }}
        >
          <Image
            source={require("../images/15.png")}
            style={{ height: 80, width: 80 }}
          />
        </View>
      </ScrollView>

      {/* Add to kart button */}
      <View
        style={{
          backgroundColor: "#000",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          borderRadius: 10,
          padding: 12,
          marginBottom: 15,
        }}
      >
        <Image
          source={require("../images/bag.png")}
          style={{ height: 20, width: 16 }}
        />
        <Text
          style={{
            fontSize: 20,
            color: "#FFF",
            fontWeight: "bold",
            marginHorizontal: 15,
          }}
        >
          Add to Cart
        </Text>
      </View>
    </View>
  );
};

export default Detail;
