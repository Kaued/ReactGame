import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { TouchComponents } from "../components/touchComponents";
import gameBackground from "../assets/game_background.png";
import buttonBackground from "../assets/button_background.png";

export const GamePage = () => {

  const [count, setCount] = useState<number>(3);
  const [countInterval, setCounInterval] = useState<undefined | number>();

  useEffect(() => {
    if (countInterval === undefined) {
      setCounInterval(setInterval(() => {
        setCount((ant: number) => {
          const nextCount = ant - 1;

          if (nextCount < 0) {
            clearInterval(countInterval);
          }

          return nextCount < 0 ? -1 : nextCount;
        });

      }, 1000))
    }
  }, [countInterval]);

  return (
    <Flex
      bg={'black'}
      w={'100vw'}
      h={'100vh'}
      overflow={'auto'}
      backgroundImage={gameBackground}
      backgroundSize={'cover'}
      backgroundPosition={'center'}
      justifyContent={'center'}
      alignItems={'center'}
    >
      {count > 0 &&(
        <Flex 
          color={'black'} 
          fontSize={'40px'} 
          fontWeight={600}
          justifyContent={'center'}
          alignItems={'center'}
          verticalAlign={'center'}
          backgroundImage={buttonBackground}
          backgroundSize={'cover'}
          w={'250px'}
          h={'130px'}
        >
          {count > 0 ? count : count < 0 ? '' : 'Começou'}
        </Flex>
      )}

      {count < 0 && (
        <TouchComponents />
      )}

      
    </Flex>
  );
}