import React from "react";
import {TouchableOpacity, Text, View} from 'react-native';
import {styled} from "nativewind";
import {useFonts, LibreFranklin_800ExtraBold, LibreFranklin_600SemiBold} from '@expo-google-fonts/libre-franklin';
import {Lato_400Regular, Lato_300Light} from '@expo-google-fonts/lato';
import Navbar from "../components/Navbar";

// Styled
const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity, 'rounded-lg p-4 bg-neutral-100 bg-opacity-50 text-neutral-900 justify-between w-1/2');
const StyledText = styled(Text, 'font-normal text-base text-neutral-900');
const StyledSubtitle = styled(Text, 'font-semibold text-lg text-neutral-900');
const StyledBoldTitle = styled(Text, 'font-extrabold text-5xl text-neutral-900');

export default function SpanishLandingScreen({navigation}) {
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
            <Navbar text='Retroceder' navigation={navigation} size='36' />

            <StyledView className='h-full flex justify-center items-center space-y-3 mt-8'>
                <StyledBoldTitle style={{fontFamily: 'LibreFranklin_800ExtraBold'}}>Cómo puedo
                    ayudarle?</StyledBoldTitle>

                <StyledSubtitle style={{fontFamily: 'Lato_400Regular'}} className='pt-8'>Para aquellos que quieren guía
                    paso a paso</StyledSubtitle>

                <StyledButton onPress={() => navigation.navigate('SpanishStepByStep')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>Presiona aquí para
                        ver video</StyledText>
                </StyledButton>

                <StyledSubtitle style={{fontFamily: 'Lato_400Regular'}} className='pt-8'>Preguntas
                    frecuentes</StyledSubtitle>

                <StyledButton onPress={() => navigation.navigate('SpanishKeyBoxCode')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>
                        ¿Dónde encuentro el código de mi caja de llaves?
                    </StyledText>
                </StyledButton>

                <StyledButton onPress={() => navigation.navigate('SpanishMissingKeyBox')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>
                        ¿Por qué no he recibido ningún código?
                    </StyledText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('SpanishAfterOpeningTheBox')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>
                        ¿Qué hago después de abrir la caja?</StyledText>
                </StyledButton>
                <StyledButton onPress={() => navigation.navigate('SpanishCarLocated')}>
                    <StyledText style={{fontFamily: 'LibreFranklin_600SemiBold'}} className='mx-auto'>¿Dónde se
                        encuentra mi coche?</StyledText>
                </StyledButton>
            </StyledView>
        </StyledView>
    );
}