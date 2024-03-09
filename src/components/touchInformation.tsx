import { Flex, Image, Text } from "@chakra-ui/react"
import heart from "../assets/heart_life.png";
import buttonBackground from "../assets/button_background.png";

export interface ITouchInformation{
  life: number,
  points: number
}

export const TouchInformation = ({life, points}: ITouchInformation) =>{

  return (
    <Flex
      flexDirection={'column'}
      alignItems={'center'}
      w={'100%'}
      marginTop={'10px'}
    >

      <Flex
        backgroundImage={buttonBackground}
        h={'75px'}
        w={'150px'}
        backgroundSize={'cover'}
        backgroundRepeat={'no-repeat'}
        justifyContent={'center'}
        alignItems={'center'}
        gap={'5px'}
      >
        {Array.from({length: life}).map((_, index) =>(
          <Image key={index} src={heart} h={"20px"} w={"20px"} objectFit={'cover'}/>
        ))}
      </Flex>

      <Text fontSize={'42px'} fontWeight={600} color={'white'}>{points}</Text>

    </Flex>
  )
}