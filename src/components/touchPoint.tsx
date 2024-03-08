import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"

export interface TouchPointContent {
  x: string,
  y: string,
  onError: () => void
  onSucess: () => void
}

export const TouchPoint = ({ x, y, onSucess, onError }: TouchPointContent) => {

  const [scale, setScale] = useState(0.1);
  const [status, setStatus] = useState('pedding');
  const [animationInterval, setAnimationInterval] = useState<undefined | number>();

  const onTouch = () => {
    if (animationInterval) {
      clearInterval(animationInterval);
    }

    setStatus('sucess');
    onSucess();
  };

  useEffect(() => {

    if (animationInterval === undefined && status === 'pedding') {
      setAnimationInterval(setInterval(() => {
        setScale((ant) => {
          const nextScale = ant + 0.1;

          if (nextScale >= 1.2) {
            clearInterval(animationInterval);
            setStatus('error');
          }
          
          return nextScale;
        });
      }, 120));
    } else if (status !== 'pedding' && animationInterval) {
      clearInterval(animationInterval);
      onError();
    }

  }, [animationInterval, status, onError]);

  return (
    <Flex
      w={`${50 * scale}px`}
      h={`${50 * scale}px`}
      position={'absolute'}
      top={y}
      right={x}
      onClick={status === 'pedding' ? onTouch : () => { }}
      bg={status == 'error' ? 'red' : 'white'}
      cursor={'pointer'}
    >

    </Flex>
  )
}