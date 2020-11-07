import React from "react";
import { View, Text, Image } from "react-native";
import { TextInput, ScrollView } from "react-native-gesture-handler";

//Icon
import Icon from "@expo/vector-icons/Ionicons";

//Components
import Couches from "../common/Couches";
import NewArrivals from "../common/NewArrivals";
import BestSellers from "../common/BestSellers";
const Home = ({ navigation }) => {
  return (
    <ScrollView
      showsVerticalScrollIndicator={false}
      style={{
        backgroundColor: "#fff",
        paddingHorizontal: 20,
      }}
    >
      {/* Furniture Logo and icon */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          marginTop: 40,
          alignItems: "center",
        }}
      >
        {/* Furniture Text */}
        <View
          style={{
            width: "50%",
          }}
        >
          <Text
            style={{
              fontSize: 22,
              fontWeight: "bold",
            }}
          >
            Furniture
          </Text>
        </View>
        {/* Bag icon */}
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

      {/* Search Box and settings logo*/}
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: 'space-around',
          width: "100%",
          marginVertical: 30,
        }}
      >
        {/* Search Box */}
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            elevation: 2,
            width: "84%",
            backgroundColor: "#FFF",
            paddingHorizontal: 10,
            height: 35,
            borderRadius: 10,
            marginLeft: 1,
          }}
        >
          <Icon name="ios-search" size={22} color="#4f4a4a" />
          <TextInput
            placeholder="Search unique furniture..."
            style={{
              //fontWeight: ,
              paddingHorizontal: 10,
              fontSize: 12,
            }}
          />
        </View>
        {/* Settings Logo */}
        <View
          style={{
            alignItems: "center",
            elevation: 2,
            width: "10%",
            backgroundColor: "#FFF",
            marginLeft: 5,
            height: 35,
            borderRadius: 10,
            marginLeft: 1,
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../images/sort.png")}
            style={{
              width: 18,
              height: 25,
            }}
          />
        </View>
      </View>
      {/* Modern and good qualities */}
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 18,
            color: "#4f4a4a",
          }}
        >
          Modern
        </Text>
        {/* dot aftern Modern */}
        <View
          style={{
            width: 5,
            height: 5,
            borderRadius: 5,
            marginHorizontal: 5,
            backgroundColor: "#4f4a4a",
          }}
        ></View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 9,
            color: "#4f4a4a",
          }}
        >
          Good Quality items
        </Text>
      </View>

      {/* Couches scroll view */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <Couches
          imgSrc={require("../images/1.png")}
          name="Beautiful Couches"
          cost={250.11}
          goToDetail={() => navigation.navigate("Detail")}
        />
        <Couches
          imgSrc={require("../images/2.png")}
          name="Autobe best chair"
          cost={110.21}
          goToDetail={() => navigation.navigate("Detail")}
        />
        <Couches
          imgSrc={require("../images/lr.png")}
          name="Home Decor"
          cost={511.54}
          goToDetail={() => navigation.navigate("Detail")}
        />
        <Couches
          imgSrc={require("../images/rm.png")}
          name="Sofa and chair"
          cost={620.13}
          goToDetail={() => navigation.navigate("Detail")}
        />
      </ScrollView>

      {/* New Arrivals */}
      <View
        style={{
          flexDirection: "row",
          marginTop: 30,
          marginBottom: 10,
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            color: "#4f4a4a",
            fontSize: 20,
          }}
        >
          New Arrivals
        </Text>
        <View
          style={{
            height: 5,
            width: 5,
            borderRadius: 5,
            backgroundColor: "#4f4a4a",
            marginHorizontal: 4,
          }}
        ></View>
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 10,
            color: "#4f4a4a",
          }}
        >
          Good Quality items
        </Text>
      </View>

      {/* New Arrivals */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <NewArrivals imgSrc={require("../images/sofa.png")} />
        <NewArrivals imgSrc={require("../images/lr.png")} />
        <NewArrivals imgSrc={require("../images/sofa.png")} />
      </ScrollView>

      {/* Best Sellers */}
      <Text
        style={{
          marginTop: 20,
          color: "#4f4a4a",
          fontSize: 18,
          fontWeight: "bold",
        }}
      >
        Best Sellers
      </Text>

      {/* Best Sellers Scroll view */}
      <ScrollView showsHorizontalScrollIndicator={false} horizontal>
        <BestSellers />
        <BestSellers />
        <BestSellers />
      </ScrollView>
    </ScrollView>
  );
};

export default Home;
