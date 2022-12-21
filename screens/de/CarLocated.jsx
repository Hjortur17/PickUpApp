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

export default function GermanCarLocated({navigation}) {
    let [fontsLoaded] = useFonts({
        LibreFranklin_800ExtraBold,
        Lato_400Regular,
    });

    if (!fontsLoaded) {
        return null;
    }

    return (
        <StyledView id='container' className="max-w-screen-lg w-full mx-auto relative">
            <Navbar text='Geh zurück' navigation={navigation} size='36' />

            <StyledView className='h-full flex justify-center items-center space-y-3 max-w-screen-md mx-auto'>
                <StyledBoldTitle style={{fontFamily: 'LibreFranklin_800ExtraBold'}} className='text-left'>
                    Wo steht mein Auto?
                </StyledBoldTitle>

                <StyledText>
                    Sed quisque accumsan vulputate nulla nisi a quis cursus. Purus sapien maecenas morbi vulputate
                    cursus a proin luctus. In suspendisse vitae sed mi mattis diam nec nulla. Id sit et erat gravida.
                    Quam cursus egestas cum ultrices donec lectus.
                    Ut scelerisque diam leo amet tellus aliquam sagittis tellus. At tellus ullamcorper vulputate
                    imperdiet scelerisque nibh mauris amet. Massa rhoncus dui arcu tincidunt id. Nibh nam iaculis enim
                    purus fusce consectetur sit egestas nulla. Facilisi lectus tellus pharetra mauris hendrerit ultrices
                    malesuada metus. Et vestibulum lacinia adipiscing sed a faucibus convallis convallis. Eu tellus
                    etiam a nisi luctus. Odio nulla est diam tincidunt et gravida id leo nisi. Risus lorem pharetra in
                    lacus nisl vitae sed augue in. Aliquam sed sapien vitae eros massa.
                </StyledText>
            </StyledView>
        </StyledView>
    );
}