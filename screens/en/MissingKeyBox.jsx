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

export default function EnglishMissingKeyBox({navigation}) {
    let [fontsLoaded] = useFonts({
        LibreFranklin_800ExtraBold,
        Lato_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <StyledView id='container' className="max-w-screen-lg w-full mx-auto relative">
            <Navbar text='Go Back' navigation={navigation} size='32' />

            <StyledView className='h-full flex justify-center items-center space-y-3 max-w-screen-md mx-auto'>
                <StyledBoldTitle style={{fontFamily: 'LibreFranklin_800ExtraBold'}}>
                    Why haven’t I gotten any code?
                </StyledBoldTitle>

                <StyledText>
                    Aenean proin vestibulum tortor sed. Risus habitant ullamcorper bibendum sapien. Eget egestas varius
                    in orci est gravida ac amet sed. Consequat aliquet ultrices mauris commodo. Eget non proin et
                    adipiscing. Natoque cursus velit feugiat erat penatibus posuere tellus diam. Fames iaculis tellus
                    iaculis turpis. Auctor mattis suspendisse et nibh fringilla. Arcu eget eget euismod nisi. Hac mattis
                    at amet in ultrices. Mauris amet est habitasse dictumst condimentum nulla velit. Sed diam et velit
                    cras eu pulvinar enim. Eu morbi nibh blandit tellus faucibus et ultrices lectus vestibulum. Lacus
                    mattis eget morbi ultrices velit dui est.
                    Tellus viverra lorem rhoncus vitae elit. Lectus vulputate venenatis ac interdum. Sit congue viverra
                    sem ligula. Egestas faucibus fames egestas eget posuere. Sed duis posuere tellus accumsan nibh.
                </StyledText>
            </StyledView>
        </StyledView>
    );
}