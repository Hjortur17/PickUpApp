import Svg, {
    Path,
    G,
} from 'react-native-svg';
import {TouchableOpacity, Image, Text, View} from 'react-native';
import {styled} from "nativewind";
import {useFonts, LibreFranklin_800ExtraBold, LibreFranklin_600SemiBold} from '@expo-google-fonts/libre-franklin';
import {Lato_400Regular, Lato_300Light} from '@expo-google-fonts/lato';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

// Pages
import HomeScreen from './screens/HomeScreen';
import EnglishLandingScreen from './screens/en/LandingScreen';
import EnglishKeyBoxCode from './screens/en/KeyBoxCode';
import EnglishMissingKeyBox from './screens/en/MissingKeyBox';

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

                {/* --- Pages --- */}
                <Stack.Screen name="EnglishLanding" component={EnglishLandingScreen}/>
                <Stack.Screen name="EnglishKeyBoxCode" component={EnglishKeyBoxCode}/>
                <Stack.Screen name="EnglishMissingKeyBox" component={EnglishMissingKeyBox}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}