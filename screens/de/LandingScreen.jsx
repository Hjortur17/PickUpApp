import React from "react";
import Svg, {
    Path
} from 'react-native-svg';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {styled} from "nativewind";
import {useFonts, LibreFranklin_800ExtraBold, LibreFranklin_600SemiBold} from '@expo-google-fonts/libre-franklin';
import {Lato_400Regular, Lato_300Light} from '@expo-google-fonts/lato';

const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity, 'rounded-lg p-4 bg-neutral-100 bg-opacity-50 text-neutral-900 justify-between w-96');

// Text
const StyledText = styled(Text, 'font-normal text-base text-neutral-900');
const StyledSubtitle = styled(Text, 'font-semibold text-lg text-neutral-900');
const StyledBoldTitle = styled(Text, 'font-extrabold text-5xl text-neutral-900');

export default function GermanLandingScreen({ navigation }) {
    let [fontsLoaded] = useFonts({
        LibreFranklin_800ExtraBold,
        LibreFranklin_600SemiBold,
        Lato_400Regular,
        Lato_300Light
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

            <StyledView className='h-full flex justify-center items-center space-y-3 mt-8'>
                <StyledBoldTitle style={{fontFamily: 'LibreFranklin_800ExtraBold'}}>Wie kann ich Ihnen helfen?</StyledBoldTitle>

                <StyledSubtitle style={{fontFamily: 'Lato_400Regular'}} className='pt-8'>Für diejenigen, die eine Schritt-für-Schritt-Anleitung wünschen</StyledSubtitle>
                <StyledButton onPress={() => navigation.navigate('EnglishStepByStep')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>
                        Drücken Sie hier, um das Video zu sehen</StyledText>
                </StyledButton>

                <StyledSubtitle style={{fontFamily: 'Lato_400Regular'}} className='pt-8'>Häufig gestellte Fragen</StyledSubtitle>

                <StyledButton onPress={() => navigation.navigate('EnglishKeyBoxCode')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>
                        Wo finde ich meinen Schlüsselbox-Code?
                    </StyledText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('EnglishMissingKeyBox')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>Warum habe ich keinen Code bekommen?</StyledText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('EnglishAfterOpeningTheBox')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>Was mache ich nach dem Öffnen der Box?</StyledText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('EnglishCarLocated')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>Wo steht mein Auto?</StyledText>
                </StyledButton>
            </StyledView>
        </StyledView>
    );
}