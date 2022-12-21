import React from "react";
import {TouchableOpacity, Text, View} from 'react-native';
import {styled} from "nativewind";
import {useFonts, LibreFranklin_800ExtraBold, LibreFranklin_600SemiBold} from '@expo-google-fonts/libre-franklin';
import {Lato_400Regular} from '@expo-google-fonts/lato';
import Navbar from "../components/Navbar";

// Styled
const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity, 'rounded-lg p-4 bg-neutral-100 bg-opacity-50 text-neutral-900 justify-between w-80');
const StyledText = styled(Text, 'font-normal text-base text-neutral-900');
const StyledSubtitle = styled(Text, 'font-semibold text-lg text-neutral-900');
const StyledBoldTitle = styled(Text, 'font-extrabold text-5xl text-neutral-900');

export default function EnglishLandingScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        LibreFranklin_800ExtraBold,
        LibreFranklin_600SemiBold,
        Lato_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <StyledView id='container' className="max-w-screen-md w-full mx-auto relative">
            <Navbar text='Go Back' navigation={navigation} size='32' />

            <StyledView className='h-full flex justify-center items-center space-y-3 mt-8'>
                <StyledBoldTitle style={{fontFamily: 'LibreFranklin_800ExtraBold'}}>How can I assist you?</StyledBoldTitle>

                <StyledSubtitle style={{fontFamily: 'Lato_400Regular'}} className='pt-8'>For those who want step-by-step
                    guide</StyledSubtitle>
                <StyledButton onPress={() => navigation.navigate('EnglishStepByStep')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>
                        Press here to see video</StyledText>
                </StyledButton>

                <StyledSubtitle style={{fontFamily: 'Lato_400Regular'}} className='pt-8'>Frequently asked
                    questions</StyledSubtitle>

                <StyledButton onPress={() => navigation.navigate('EnglishKeyBoxCode')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>
                        Where do I find my key box code?
                    </StyledText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('EnglishMissingKeyBox')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>Why haven’t I
                        gotten any code?</StyledText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('EnglishAfterOpeningTheBox')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>What do I do after
                        opening the box?</StyledText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('EnglishCarLocated')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>Where is my car
                        located?</StyledText>
                </StyledButton>
            </StyledView>
        </StyledView>
    );
}