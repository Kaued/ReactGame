import { Button, Flex, Image } from "@chakra-ui/react"
import buttonBackground from "../assets/button_background.png";
import tryAgain from "../assets/tryAgain.gif";
import { useNavigate } from "react-router-dom";

export const TryAgainPage = () =>{

  const navigator = useNavigate();

  const tryAgainPress = () =>{
    navigator("/game");
  }

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
          src={tryAgain}
          objectFit={'cover'}
          w={'250px'}
          h={'auto'}
        />
        <Button 
        backgroundImage={buttonBackground}
        backgroundSize={'cover'}
        padding={'25px'}
        h={'160px'}
        fontSize={'28px'}
        fontWeight={'600'}
        onClick={tryAgainPress}
      >
        Tentar Novamente
      </Button>
    </Flex>
  )
}