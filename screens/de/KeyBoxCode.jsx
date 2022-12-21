import React from "react";
import Svg, {
    Path
} from 'react-native-svg';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {styled} from "nativewind";
import {useFonts, LibreFranklin_800ExtraBold, LibreFranklin_600SemiBold} from '@expo-google-fonts/libre-franklin';
import {Lato_400Regular, Lato_300Light} from '@expo-google-fonts/lato';

const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity, 'rounded-lg p-4 bg-neutral-100 bg-opacity-50 text-neutral-900 justify-between w-80');

// Text
const StyledText = styled(Text, 'font-normal text-base text-neutral-900');
const StyledBoldTitle = styled(Text, 'font-extrabold text-5xl text-neutral-900');

export default function GermanKeyBoxCode({navigation}) {
    let [fontsLoaded] = useFonts({
        LibreFranklin_800ExtraBold,
        Lato_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <StyledView id='container' className="max-w-screen-lg w-full mx-auto relative">
            <StyledView className='absolute w-full flex flex-row justify-start items-end space-x-6 z-20'>
                <StyledView id='logo'>
                    <Image
                        className='w-20 h-32 object-bottom'
                        source={require('../../assets/logo.jpg')}
                    />
                </StyledView>

                <StyledButton
                    className='w-36 rounded-lg p-3 bg-neutral-100 justify-between w-auto flex flex-row justify-between items-center space-x-4'
                    onPress={() => navigation.goBack()}
                >
                    <Svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 448 512"
                         className='w-5 h-5 fill-current text-neutral-900'>
                        <Path
                            d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"/>
                    </Svg>

                    <StyledText style={{fontFamily: 'Lato_400Regular'}}>Geh zurück</StyledText>
                </StyledButton>
            </StyledView>

            <StyledView className='h-full flex justify-center items-center space-y-3 max-w-screen-md mx-auto'>
                <StyledBoldTitle style={{fontFamily: 'LibreFranklin_800ExtraBold'}} className='text-left'>Wo finde ich meinen Schlüsselbox-Code?</StyledBoldTitle>

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