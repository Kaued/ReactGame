import { Flex, Text } from "@chakra-ui/react"
import { useEffect, useState } from "react";
import { TouchComponents } from "../components/touchComponents";

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
    >
      <Text color={'white'}>
        {count > 0 ? count : count < 0 ? '' : 'Começou'}
      </Text>

      {count < 0 && (
        <TouchComponents />
      )}

      
    </Flex>
  );
}