import React from "react";
import Svg, {
    Path
} from 'react-native-svg';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {styled} from "nativewind";
import {useFonts, LibreFranklin_800ExtraBold, LibreFranklin_600SemiBold} from '@expo-google-fonts/libre-franklin';
import {Lato_400Regular, Lato_300Light} from '@expo-google-fonts/lato';
import Navbar from "../components/Navbar";

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
        <StyledView id='container' className="max-w-screen-md w-full mx-auto relative">
            <Navbar text='Geh zurück' navigation={navigation} size='36' />

            <StyledView className='h-full flex justify-center items-center space-y-3 mt-8'>
                <StyledBoldTitle style={{fontFamily: 'LibreFranklin_800ExtraBold'}}>Wie kann ich Ihnen helfen?</StyledBoldTitle>

                <StyledSubtitle style={{fontFamily: 'Lato_400Regular'}} className='pt-8'>Für diejenigen, die eine Schritt-für-Schritt-Anleitung wünschen</StyledSubtitle>
                <StyledButton onPress={() => navigation.navigate('GermanStepByStep')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>
                        Drücken Sie hier, um das Video zu sehen</StyledText>
                </StyledButton>

                <StyledSubtitle style={{fontFamily: 'Lato_400Regular'}} className='pt-8'>Häufig gestellte Fragen</StyledSubtitle>

                <StyledButton onPress={() => navigation.navigate('GermanKeyBoxCode')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>
                        Wo finde ich meinen Schlüsselbox-Code?
                    </StyledText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('GermanMissingKeyBox')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>Warum habe ich keinen Code bekommen?</StyledText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('GermanAfterOpeningTheBox')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>Was mache ich nach dem Öffnen der Box?</StyledText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('GermanCarLocated')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>Wo steht mein Auto?</StyledText>
                </StyledButton>
            </StyledView>
        </StyledView>
    );
}