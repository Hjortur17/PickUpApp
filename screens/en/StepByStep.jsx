import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {styled} from "nativewind";
import {useFonts, LibreFranklin_800ExtraBold} from '@expo-google-fonts/libre-franklin';
import {Video} from 'expo-av';
import Navbar from "../components/Navbar";

// Styled
const StyledView = styled(View);
const StyledBoldTitle = styled(Text, 'font-extrabold text-5xl text-neutral-900');

export default function EnglishStepByStep({navigation}) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    let [fontsLoaded] = useFonts({
        LibreFranklin_800ExtraBold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <StyledView id='container' className="max-w-screen-md w-full mx-auto relative">
            <Navbar text='Go Back' navigation={navigation} size='32' />

            <StyledView className='h-full flex justify-center items-center space-y-3 max-w-screen-md mx-auto'>
                <StyledBoldTitle style={{fontFamily: 'LibreFranklin_800ExtraBold'}} className='mb-8'>
                    Step-By-Step Guide
                </StyledBoldTitle>

                <Video
                    ref={video}
                    style={styles.video}
                    source={{
                        uri: 'https://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4',
                    }}
                    useNativeControls
                    shouldPlay
                    resizeMode="contain"
                    isLooping
                    onPlaybackStatusUpdate={status => setStatus(() => status)}
                />
            </StyledView>
        </StyledView>
    );
}

const styles = StyleSheet.create({
    video: {
        alignSelf: 'center',
        width: 820,
        height: 400,
    }
});