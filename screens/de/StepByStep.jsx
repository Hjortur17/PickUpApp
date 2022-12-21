import * as React from 'react';
import {Text, View, StyleSheet} from 'react-native';
import {styled} from "nativewind";
import {useFonts, LibreFranklin_800ExtraBold} from '@expo-google-fonts/libre-franklin';

import {Video} from 'expo-av';
import Navbar from "../components/Navbar";

// Styled
const StyledView = styled(View);
const StyledSubtitle = styled(Text, 'font-semibold text-lg text-neutral-900');
const StyledBoldTitle = styled(Text, 'font-extrabold text-5xl text-neutral-900');

export default function GermanStepByStep({navigation}) {
    const video = React.useRef(null);
    const [status, setStatus] = React.useState({});

    let [fontsLoaded] = useFonts({
        LibreFranklin_800ExtraBold,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <StyledView id='container' className="max-w-screen-lg w-full mx-auto relative">
            <Navbar text='Geh zurück' navigation={navigation} size='36' />

            <StyledView className='h-full flex justify-center items-center space-y-3 max-w-screen-md mx-auto'>
                <StyledBoldTitle style={{fontFamily: 'LibreFranklin_800ExtraBold'}}>
                    Schritt für Schritt Anleitung
                </StyledBoldTitle>

                <StyledSubtitle style={{fontFamily: 'Lato_400Regular'}} className='pb-8'>
                    Das Video ist auf Englisch
                </StyledSubtitle>

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