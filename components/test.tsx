import { View, Text } from "@/components/Themed";
import { useEffect, useState } from "react";
import { Button ,Dimensions,Image,ScrollView,StyleSheet} from "react-native";
import ImagePicker, { ImageOrVideo } from "react-native-image-crop-picker";
import {  useVideoPlayer, VideoView } from 'expo-video';
import { useEvent } from "expo";


export default function Test() {
  const [image,setImage] = useState<ImageOrVideo | string>("")
  const videoSource =
  'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4';


  const player = useVideoPlayer(videoSource, player => {
    player.loop = true;
    player.play();
  });

  const { isPlaying } = useEvent(player, 'playingChange', { isPlaying: player.playing });

  useEffect(() => {
    console.log(ImagePicker);
  }, []);
  async function cropper(){
   await ImagePicker.openPicker({
      
      cropping: true,
      freeStyleCropEnabled:true,
      // hideBottomControls:true,
      showCropFrame:false,
      cropperToolbarTitle:"Crop Image",



    }).then(image => {
setImage(image as ImageOrVideo)
    });
  }

  async function realCropper(){
    await ImagePicker.openCropper({
      path: (image as ImageOrVideo).path,
      width: 300,
      height: 300,

      cropping: true,
      mediaType: 'photo',
      freeStyleCropEnabled:true
    }).then(image => {
      console.log(image);
    });
  }
  return (
    <ScrollView>
      {/* <Text>Below will be a button</Text>
      <Button title="Click me" onPress={()=>cropper()}></Button>
      <Button title="Click me" onPress={()=>realCropper()}></Button>
      <View className="w-full h-full flex flex-row justify-center py-10" >
      {(image as ImageOrVideo).path ? (
        <Image
          source={{ uri: (image as ImageOrVideo).path }}
          style={{ 
            width: Dimensions.get('window').width * 0.9, 
            height: (image as ImageOrVideo).height * (Dimensions.get('window').width * 0.9 / (image as ImageOrVideo).width)
          }}
          className="rounded-lg "
          resizeMode="contain"
        />
      ) : null}
      </View> */}

<Text>Video Player</Text>
      <View className="w-full h-full flex flex-row justify-center py-10">
        {/* <Video
          source={{ 
            uri: 'https://www.youtube.com/watch?v=gw9EdqhGEkQ'
          }}
          style={{ 
            width: Dimensions.get('window').width * 0.9,
            height: 300
          }}
          useNativeControls
          resizeMode={ResizeMode.CONTAIN}
          isLooping
          onPlaybackStatusUpdate={status => setStatus(() => status)}
        /> */}
        <VideoView style={styles.video} player={player} allowsFullscreen allowsPictureInPicture />
      </View>
    </ScrollView>
  );
}


const styles = StyleSheet.create({
  contentContainer: {
    flex: 1,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 50,
  },
  video: {
    width: 350,
    height: 275,
  },
  controlsContainer: {
    padding: 10,
  },
});
