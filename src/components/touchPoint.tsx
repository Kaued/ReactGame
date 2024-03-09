import { Flex } from "@chakra-ui/react"
import { useEffect, useState } from "react"
import ball from "../assets/ball.png";

export interface TouchPointContent {
  x: string,
  y: string,
  onError: () => void
  onSuccess: () => void
}

export const TouchPoint = ({ x, y, onSuccess, onError }: TouchPointContent) => {

  const [scale, setScale] = useState(0.1);
  const [status, setStatus] = useState('pending');
  const [animationInterval, setAnimationInterval] = useState<undefined | number>();

  const onTouch = () => {
    if (animationInterval) {
      clearInterval(animationInterval);
    }

    setStatus('success');
    onSuccess();
  };

  useEffect(() => {

    if (animationInterval === undefined && status === 'pending') {
      setAnimationInterval(setInterval(() => {
        setScale((ant) => {
          const nextScale = ant + 0.1;

          if (nextScale >= 1.7) {
            clearInterval(animationInterval);
            setStatus('error');
          }
          
          return nextScale;
        });
      }, 100));
    } else if (status !== 'pending' && animationInterval) {
      clearInterval(animationInterval);

      if(status === 'error'){
        setStatus('end');
        onError();
      }
    }

  }, [animationInterval, status, onError]);

  return (
    <Flex
      w={`${50 * scale}px`}
      h={`${50 * scale}px`}
      position={'absolute'}
      top={y}
      zIndex={11}
      right={x}
      onClick={status === 'pending' ? onTouch : () => { }}
      cursor={'pointer'}
      backgroundImage={ball}
      backgroundSize={'contain'}
    >

    </Flex>
  )
}