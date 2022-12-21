import React from 'react';
import Svg, {
    Path
} from 'react-native-svg';
import {TouchableOpacity, Text, Image, View} from 'react-native';
import {styled} from "nativewind";

const StyledView = styled(View);
const StyledButton = styled(TouchableOpacity, 'rounded-lg p-3 bg-neutral-100 bg-opacity-50 text-neutral-900 justify-between w-auto flex flex-row justify-between items-center space-x-4');

// Text
const StyledText = styled(Text, 'font-normal text-base text-neutral-900');
export default function Navbar(props) {
    const buttonSize = 'w-' + props.size;

    return (
        <StyledView className='absolute w-full flex flex-row justify-start items-end space-x-6 z-20'>
            <StyledView id='logo'>
                <Image
                    className='w-20 h-32 object-bottom'
                    source={require('../../assets/logo.jpg')}
                />
            </StyledView>

            {props.text.length > 0 &&
                <StyledButton className={buttonSize} onPress={() => props.navigation.goBack()}>
                    <Svg xmlns="http://www.w3.org/2000/svg"
                         viewBox="0 0 448 512"
                         className='w-5 h-5 fill-current text-neutral-900'>
                        <Path
                            d="M231.536 475.535l7.071-7.07c4.686-4.686 4.686-12.284 0-16.971L60.113 273H436c6.627 0 12-5.373 12-12v-10c0-6.627-5.373-12-12-12H60.113L238.607 60.506c4.686-4.686 4.686-12.284 0-16.971l-7.071-7.07c-4.686-4.686-12.284-4.686-16.97 0L3.515 247.515c-4.686 4.686-4.686 12.284 0 16.971l211.051 211.05c4.686 4.686 12.284 4.686 16.97-.001z"/>
                    </Svg>

                    <StyledText style={{fontFamily: 'Lato_400Regular'}}>{props.text}</StyledText>
                </StyledButton>
            }
        </StyledView>
    );
}