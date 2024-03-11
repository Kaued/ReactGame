import { Flex } from "@chakra-ui/react"
import { TouchPoint } from "./touchPoint"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom";
import { TouchInformation } from "./touchInformation";

export const TouchComponents = () => {

  const navigator = useNavigate();
  const [life, setLife] = useState<number>(3);
  const [touchGenerate, setTouchGenerate] = useState<number>(0);
  const [positionX, setPositionX] = useState<string>();
  const [positionY, setPositionY] = useState<string>();
  const [point, setPoint] = useState<number>(0);

  const randomInt = (min: number, max: number): number => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };
  
  const onFail = () =>{
    if( life > 1){
      setLife(life-1);
    }else{
      navigator("/tryAgain");
    }
  }

  const onSuccess = () =>{
    setPoint((ant) => ant+1);
  }

  useEffect(() => {
    if (point < 13){
      setPositionX(`${randomInt(0, 90)}%`);
      setPositionY(`${randomInt(0, 90)}%`);
      setTouchGenerate((ant)=>ant+1);
    }else{
      navigator("/endGame");
    }
  }, [point, life, navigator]);

  return (
    <Flex
      w={'100%'}
      h={'95%'}
      bottom={'5rem'}
      position={'absolute'}
      zIndex={'10'}
    >
      <TouchInformation life={life} points={point} />
      <TouchPoint key={touchGenerate} onError={onFail} onSuccess={onSuccess} x={positionX!} y={positionY!} />
    </Flex>
  )
}