import { Flex, Text } from "@chakra-ui/react"
import { TouchPoint } from "./touchPoint"
import { useEffect, useState } from "react"

export const TouchComponents = () => {

  const [positionX, setPositionX] = useState<string>();
  const [positionY, setPositionY] = useState<string>();
  const [next, setNext] = useState<number>(0);

  const randomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  

  useEffect(() => {
    setPositionX(`${randomInt(0, 90)}%`);
    setPositionY(`${randomInt(0, 90)}%`);
  }, [next]);

  return (
    <Flex
      w={'100%'}
      h={'100%'}
      position={'absolute'}
      zIndex={'10'}
    >
      <Text color={"yellow"}>{next}</Text>
      <TouchPoint key={next} onError={() => {setNext((ant)=>ant!-1) }} onSucess={() => {setNext((ant)=>ant!+1) }} x={positionX!} y={positionY!} />
    </Flex>
  )
}