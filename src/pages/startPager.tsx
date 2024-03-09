import { Button, Flex, Image, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";
import homeBackground from "../assets/home_background.jpg";
import titleBackground from "../assets/title_background.png";
import buttonBackground from "../assets/button_background.png";

export const StartPage = () => {

  const navigate = useNavigate();

  const startPress = () =>{
    navigate("/game");
  }

  return (
    <Flex
      bg={'#000141'}
      w={'100vw'}
      h={'100vh'}
      overflow={'auto'}
      flexDirection={'column'}
      justifyContent={'space-around'}
      align={'center'}
      bgImage={homeBackground}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
    >
      <Flex
        flexDirection={'column'}
        position={'relative'}
        padding={'30px'}
        justifyContent={'center'}
        alignItems={'center'}
      >
        <Image 
          src={titleBackground}
          position={'absolute'}
          objectFit={'cover'}
          top={0}
          right={0}
          w={'100%'}
          h={'auto'}
          zIndex={1}
        />
        <Text 
          marginTop={'30px'} 
          zIndex={2} 
          position={'relative'}
          fontSize={'32px'}
          color={'white'}
          fontWeight={'700'}
        >
          Surprise Point
        </Text>
      </Flex>

      <Button 
        backgroundImage={buttonBackground}
        backgroundSize={'cover'}
        padding={'70px'}
        fontSize={'32px'}
        fontWeight={'600'}
        onClick={startPress}
      >
        Começar
      </Button>


    </Flex>
  );
}