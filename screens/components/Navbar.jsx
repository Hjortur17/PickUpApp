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
        <StyledView className='absolute w-full flex flex-row justify-between items-end z-20'>
            <StyledView className='flex flex-row space-x-6 items-end'>
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

            <StyledButton onPress={() => props.navigation.navigate('HomaScreen')}>
                <Svg xmlns="http://www.w3.org/2000/svg"
                     viewBox="0 0 512 512"
                     className='w-5 h-5 fill-current text-neutral-900'>
                    <Path
                        d="M512 256c0 88.225-71.775 160-160 160H110.628l68.201 68.201c4.686 4.686 4.686 12.284 0 16.971l-5.656 5.656c-4.686 4.686-12.284 4.686-16.971 0l-98.343-98.343c-4.686-4.686-4.686-12.284 0-16.971l98.343-98.343c4.686-4.686 12.284-4.686 16.971 0l5.656 5.656c4.686 4.686 4.686 12.284 0 16.971L110.628 384H352c70.579 0 128-57.421 128-128 0-28.555-9.403-54.952-25.271-76.268-3.567-4.792-3.118-11.462 1.106-15.686l5.705-5.705c5.16-5.16 13.678-4.547 18.083 1.271C499.935 186.438 512 219.835 512 256zM57.271 332.268C41.403 310.952 32 284.555 32 256c0-70.579 57.421-128 128-128h241.372l-68.201 68.201c-4.686 4.686-4.686 12.284 0 16.971l5.656 5.656c4.686 4.686 12.284 4.686 16.971 0l98.343-98.343c4.686-4.686 4.686-12.284 0-16.971L355.799 5.172c-4.686-4.686-12.284-4.686-16.971 0l-5.656 5.656c-4.686 4.686-4.686 12.284 0 16.971L401.372 96H160C71.775 96 0 167.775 0 256c0 36.165 12.065 69.562 32.376 96.387 4.405 5.818 12.923 6.432 18.083 1.271l5.705-5.705c4.225-4.224 4.674-10.893 1.107-15.685z"/>
                </Svg>

                <StyledText style={{fontFamily: 'Lato_400Regular'}}>Start Over</StyledText>
            </StyledButton>
        </StyledView>
    );
}