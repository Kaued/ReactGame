import { Flex, Image, Text } from "@chakra-ui/react";
import buttonBackground from "../assets/button_background.png";
import endGame from "../assets/endGame.gif";

export const EndPage = () =>{
  
  return(
    <Flex
        flexDirection={'column'}
        position={'relative'}
        padding={'30px'}
        w={'100vw'}
        h={'100vh'}
        justifyContent={'center'}
        alignItems={'center'}
        background={'#ADD8E6'}
      >
        <Image 
          src={endGame}
          objectFit={'cover'}
          w={'250px'}
          h={'auto'}
        />
        <Text 
        backgroundImage={buttonBackground}
        backgroundSize={'cover'}
        padding={'25px'}
        display={'flex'}
        alignItems={'center'}
        h={'160px'}
        w={'300px'}
        textAlign={'center'}
        fontSize={'20px'}
        fontWeight={'700'}
      >
        {"Para Palloma <3, com carinho de Kauê"}
      </Text>
    </Flex>
  )
}