import {
  StyleSheet,
  Text,
  SafeAreaView,
  Image,
  View,
  ScrollView,
  Button,
} from "react-native";
import React from "react";
import { Video, AVPlaybackStatus } from "expo-av";

const DetailScreen = ({ route }) => {
  const item = route.params.data;
  const [status, setStatus] = React.useState({});
  const video = React.useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <View style={styles.item}>
          <Image
            style={styles.image}
            resizeMode="contain"
            source={{ uri: item.Poster }}
          />
        </View>
        <View style={styles.info}>
          <Text style={styles.title}> {item.Title} </Text>
          <Text> Country: {item.Country}</Text>
          <Text> Year: {item.Year}</Text>
          <Text> Directed by: {item.Directed_by}</Text>
          <Text> About Movie: {item.Description}</Text>
          {/* <Video source={{ uri: 'http://192.168.1.102:8001/video'}}/> */}
          <Video
            ref={video}
            style={styles.video}
            source={{
              uri: "http://192.168.2.101:8001/video",
              //   uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4",
            }}
            useNativeControls
            resizeMode="contain"
            isLooping
            onPlaybackStatusUpdate={(status) => setStatus(() => status)}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  item: {
    padding: 10,
  },
  image: {
    width: 300,
    height: 300,
  },
  title: {
    fontSize: 20,
  },
  info: {
    margin: 20,
  },
  backgroundVideo: {
    position: "absolute",
    top: 0,
    left: 0,
    bottom: 0,
    right: 0,
  },
  video: {
    alignSelf: "center",
    width: 320,
    height: 200,
    marginTop: 20,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
});
