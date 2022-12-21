import React from "react";
import {Text, View} from 'react-native';
import {styled} from "nativewind";
import {useFonts, LibreFranklin_800ExtraBold} from '@expo-google-fonts/libre-franklin';
import {Lato_400Regular} from '@expo-google-fonts/lato';
import Navbar from "../components/Navbar";

// Styled
const StyledView = styled(View);
const StyledText = styled(Text, 'font-normal text-base text-neutral-900');
const StyledBoldTitle = styled(Text, 'font-extrabold text-5xl text-neutral-900');

export default function FrenchKeyBoxCode({navigation}) {
    let [fontsLoaded] = useFonts({
        LibreFranklin_800ExtraBold,
        Lato_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <StyledView id='container' className="max-w-screen-lg w-full mx-auto relative">
            <Navbar text='Retourner' navigation={navigation} size='32' />

            <StyledView className='h-full flex justify-center items-center space-y-3 max-w-screen-md mx-auto'>
                <StyledBoldTitle style={{fontFamily: 'LibreFranklin_800ExtraBold'}} className='text-left'>
                    Où puis-je trouver mon code de boîte à clés ?
                </StyledBoldTitle>

                <StyledText>
                    Nulla ipsum egestas odio non eget. Iaculis non gravida adipiscing fermentum. Nulla sem neque neque
                    cursus. Imperdiet at ut cursus mauris enim. Tortor quis ornare nulla ac dignissim tristique etiam.
                    Facilisi in laoreet velit pharetra. Ut lectus nisi in neque et duis viverra a id. Consectetur mauris
                    congue bibendum tellus vel. Blandit elementum sit quam orci. Elit pellentesque leo tincidunt
                    imperdiet nunc amet nunc vel lacus. Facilisis velit nunc tellus nunc tellus porta. Ut hendrerit in
                    iaculis massa semper duis. Et massa aliquam a nisi id integer enim fames. Aenean vulputate elit nisl
                    proin sit in amet.
                </StyledText>
            </StyledView>
        </StyledView>
    );
}