import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const HomeScreen = ({ navigation }) => {
  const [films, setFilms] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios({
        method: "get",
        url: "http://192.168.2.110:8001/films",
      });
      setFilms(result.data);
    };
    fetchData();
  }, []);

  const renderItem = ({ item, index }) => {
    return (
      <View style={styles.item}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Detail", { data: item });
          }}
        >
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{ uri: item.Poster }}
            key={index}
          />
          <Text style={styles.text}>{item.Title}</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        numColumns={2}
        style={styles.container}
        data={films}
        renderItem={renderItem}
        keyExtractor={(item) => `key-${item.Title}`}
      />
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  item: {
    padding: 4,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
    marginTop: 8,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: "orange",
    fontWeight: "bold",
  },
});
