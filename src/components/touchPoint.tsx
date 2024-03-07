import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export const TouchPoint = () =>{

  const [scale, setScale] = useState(0.1);
  const [status, setStatus] = useState('pedding');
  const [animationInterval, setAnimationInterval] = useState<undefined|number>();

  const onTouch = () => {
    if(animationInterval){
      clearInterval(animationInterval);
    }

    setStatus('sucess');
  };
  
  useEffect(()=>{
    if(animationInterval === undefined){
      setAnimationInterval(setInterval(()=>{
        setScale((ant)=>{
          const nextScale = ant + 0.1;
          
          if(nextScale >= 1.2){
            clearInterval(animationInterval);
            setStatus('error');
          }
          
          return nextScale >= 1.2 ? 1.2 : nextScale;
        });
      }, 100));
    } 
  }, [animationInterval]);

  return (
    <Flex
      w={`${50 * scale}px`}
      h={`${50 * scale}px`}
      position={'absolute'}
      top={'50%'}
      right={'50%'}
      onClick={status === 'pedding' ? onTouch : ()=>{}}
      bg={ status == 'error' ? 'red': 'white'}
    >
      
    </Flex>
  )
}