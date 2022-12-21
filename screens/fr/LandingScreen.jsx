import React from "react";
import {TouchableOpacity, Text, View} from 'react-native';
import {styled} from "nativewind";
import {useFonts, LibreFranklin_800ExtraBold, LibreFranklin_600SemiBold} from '@expo-google-fonts/libre-franklin';
import {Lato_400Regular, Lato_300Light} from '@expo-google-fonts/lato';
import Navbar from "../components/Navbar";

// Styled
const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity, 'rounded-lg p-4 bg-neutral-100 bg-opacity-50 text-neutral-900 justify-between w-96');
const StyledText = styled(Text, 'font-normal text-base text-neutral-900');
const StyledSubtitle = styled(Text, 'font-semibold text-lg text-neutral-900');
const StyledBoldTitle = styled(Text, 'font-extrabold text-5xl text-neutral-900');

export default function SpanishLandingScreen({ navigation }) {
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
            <Navbar text='Retourner' navigation={navigation} size='36' />

            <StyledView className='h-full flex justify-center items-center space-y-3 mt-8'>
                <StyledBoldTitle style={{fontFamily: 'LibreFranklin_800ExtraBold'}}>Comment puis je vous aider?</StyledBoldTitle>


                <StyledSubtitle style={{fontFamily: 'Lato_400Regular'}} className='pt-8'>Pour ceux qui veulent un guide étape par étape</StyledSubtitle>
                <StyledButton onPress={() => navigation.navigate('FrenchStepByStep')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>Appuyez ici pour voir la vidéo</StyledText>
                </StyledButton>

                <StyledSubtitle style={{fontFamily: 'Lato_400Regular'}} className='pt-8'>Questions fréquemment posées</StyledSubtitle>

                <StyledButton onPress={() => navigation.navigate('FrenchKeyBoxCode')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>
                        Où puis-je trouver mon code de boîte à clés?
                    </StyledText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('FrenchMissingKeyBox')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>
                        Pourquoi n'ai-je pas reçu de code?
                    </StyledText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('FrenchAfterOpeningTheBox')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>
                        Que dois-je faire après avoir ouvert la boîte ?</StyledText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('FrenchCarLocated')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>Où se trouve ma voiture ?</StyledText>
                </StyledButton>
            </StyledView>
        </StyledView>
    );
}