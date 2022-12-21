import React from "react";
import {TouchableOpacity, Text, View} from 'react-native';
import {styled} from "nativewind";
import {useFonts, LibreFranklin_800ExtraBold} from '@expo-google-fonts/libre-franklin';
import {Lato_400Regular} from '@expo-google-fonts/lato';
import Navbar from "../components/Navbar";

// Styled
const StyledView = styled(View);
const StyledText = styled(Text, 'font-normal text-base text-neutral-900');
const StyledBoldTitle = styled(Text, 'font-extrabold text-5xl text-neutral-900');

export default function SpanishAfterOpeningTheBox({navigation}) {
    let [fontsLoaded] = useFonts({
        LibreFranklin_800ExtraBold,
        Lato_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <StyledView id='container' className="max-w-screen-lg w-full mx-auto relative">
            <Navbar text='Retroceder' navigation={navigation} size='36' />

            <StyledView className='h-full flex justify-center items-center space-y-3 max-w-screen-md mx-auto'>
                <StyledBoldTitle style={{fontFamily: 'LibreFranklin_800ExtraBold'}} className='text-left'>
                    ¿Qué hago después de abrir la caja?
                </StyledBoldTitle>

                <StyledText>
                    Nunc ornare cras etiam pellentesque semper aliquam ullamcorper sit eu. Molestie porta magna
                    fringilla morbi ut tristique. Ligula malesuada commodo maecenas vel tempus at. Facilisi eget
                    consectetur mauris malesuada. Sed et ipsum libero odio gravida posuere. Libero cursus non
                    scelerisque est. Sit lacus facilisis duis vitae lectus est pulvinar parturient posuere. Nulla tellus
                    rhoncus ante eu tristique odio feugiat amet elementum. Egestas et nibh nibh vehicula. Rhoncus fames
                    faucibus id blandit urna.
                    Et lectus dictum semper est tempor mauris. Nec sem gravida gravida aliquet nisi sit purus. Libero in
                    egestas in elit eu morbi urna integer. Tincidunt cursus turpis accumsan tellus et sit. Rutrum
                    tristique feugiat placerat tortor aliquet sagittis nibh ut. Amet lacus habitant semper egestas sed.
                </StyledText>
            </StyledView>
        </StyledView>
    );
}