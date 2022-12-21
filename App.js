import React from "react";
import {TouchableOpacity, Text, View} from 'react-native';
import {styled} from "nativewind";
import {useFonts, LibreFranklin_800ExtraBold, LibreFranklin_600SemiBold} from '@expo-google-fonts/libre-franklin';
import {Lato_400Regular, Lato_300Light} from '@expo-google-fonts/lato';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import HomeScreen from './screens/HomeScreen';

// English Pages
import EnglishLandingScreen from './screens/en/LandingScreen';
import EnglishStepByStep from './screens/en/StepByStep';
import EnglishKeyBoxCode from './screens/en/KeyBoxCode';
import EnglishMissingKeyBox from './screens/en/MissingKeyBox';
import EnglishCarLocated from './screens/en/CarLocated';
import EnglishAfterOpeningTheBox from './screens/en/AfterOpeningTheBox';

// Spanish Pages
import SpanishLandingScreen from './screens/es/LandingScreen';
import SpanishStepByStep from './screens/es/StepByStep';
import SpanishKeyBoxCode from './screens/es/KeyBoxCode';
import SpanishMissingKeyBox from './screens/es/MissingKeyBox';
import SpanishCarLocated from './screens/es/CarLocated';
import SpanishAfterOpeningTheBox from './screens/es/AfterOpeningTheBox';

// French Pages
import FrenchLandingScreen from './screens/fr/LandingScreen';
import FrenchStepByStep from './screens/fr/StepByStep';
import FrenchKeyBoxCode from './screens/fr/KeyBoxCode';
import FrenchMissingKeyBox from './screens/fr/MissingKeyBox';
import FrenchCarLocated from './screens/fr/CarLocated';
import FrenchAfterOpeningTheBox from './screens/fr/AfterOpeningTheBox';

// German Pages
import GermanLandingScreen from './screens/de/LandingScreen';
import GermanStepByStep from './screens/de/StepByStep';
import GermanKeyBoxCode from './screens/de/KeyBoxCode';
import GermanMissingKeyBox from './screens/de/MissingKeyBox';
import GermanCarLocated from './screens/de/CarLocated';
import GermanAfterOpeningTheBox from './screens/de/AfterOpeningTheBox';

// Views
const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity);

// Text
const StyledText = styled(Text, 'font-normal text-base');
const StyledSubtitle = styled(Text, 'font-semibold text-lg');
const StyledLightTitle = styled(Text, 'font-light text-2xl');
const StyledBoldTitle = styled(Text, 'font-extrabold text-5xl');

export default function App() {
    let [fontsLoaded] = useFonts({
        LibreFranklin_800ExtraBold,
        LibreFranklin_600SemiBold,
        Lato_400Regular,
        Lato_300Light
    });

    if (!fontsLoaded) {
        return null;
    }

    const Stack = createNativeStackNavigator();

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="HomaScreen" screenOptions={{
                headerShown: false
            }}>
                <Stack.Screen name="HomaScreen" component={HomeScreen}/>

                {/* --- English Pages --- */}
                <Stack.Screen name="EnglishLanding" component={EnglishLandingScreen}/>
                <Stack.Screen name="EnglishStepByStep" component={EnglishStepByStep}/>
                <Stack.Screen name="EnglishKeyBoxCode" component={EnglishKeyBoxCode}/>
                <Stack.Screen name="EnglishMissingKeyBox" component={EnglishMissingKeyBox}/>
                <Stack.Screen name="EnglishAfterOpeningTheBox" component={EnglishAfterOpeningTheBox}/>
                <Stack.Screen name="EnglishCarLocated" component={EnglishCarLocated}/>

                {/* --- Spanish Pages --- */}
                <Stack.Screen name="SpanishLanding" component={SpanishLandingScreen}/>
                <Stack.Screen name="SpanishStepByStep" component={SpanishStepByStep}/>
                <Stack.Screen name="SpanishKeyBoxCode" component={SpanishKeyBoxCode}/>
                <Stack.Screen name="SpanishMissingKeyBox" component={SpanishMissingKeyBox}/>
                <Stack.Screen name="SpanishAfterOpeningTheBox" component={SpanishAfterOpeningTheBox}/>
                <Stack.Screen name="SpanishCarLocated" component={SpanishCarLocated}/>

                {/* --- French Pages --- */}
                <Stack.Screen name="FrenchLanding" component={FrenchLandingScreen}/>
                <Stack.Screen name="FrenchStepByStep" component={FrenchStepByStep}/>
                <Stack.Screen name="FrenchKeyBoxCode" component={FrenchKeyBoxCode}/>
                <Stack.Screen name="FrenchMissingKeyBox" component={FrenchMissingKeyBox}/>
                <Stack.Screen name="FrenchAfterOpeningTheBox" component={FrenchAfterOpeningTheBox}/>
                <Stack.Screen name="FrenchCarLocated" component={FrenchCarLocated}/>

                {/* --- German Pages --- */}
                <Stack.Screen name="GermanLanding" component={GermanLandingScreen}/>
                <Stack.Screen name="GermanStepByStep" component={GermanStepByStep}/>
                <Stack.Screen name="GermanKeyBoxCode" component={GermanKeyBoxCode}/>
                <Stack.Screen name="GermanMissingKeyBox" component={GermanMissingKeyBox}/>
                <Stack.Screen name="GermanAfterOpeningTheBox" component={GermanAfterOpeningTheBox}/>
                <Stack.Screen name="GermanCarLocated" component={GermanCarLocated}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}