import { Button, Flex, Text } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom";

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
    >
      <Flex
        flexDirection={'column'}
      >
        <Text marginTop={'10px'}>
          Título
        </Text>
      </Flex>

      <Button bg={'red'} onClick={startPress}>Começar</Button>


    </Flex>
  );
}