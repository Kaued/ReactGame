import { Flex } from "@chakra-ui/react"
import { TouchPoint } from "./touchPoint"

export const TouchComponents = () =>{

  return (
    <Flex
      w={'100%'}
      h={'100%'}
      position={'absolute'}
      zIndex={'10'}
    >
      <TouchPoint />
    </Flex>
  )
}