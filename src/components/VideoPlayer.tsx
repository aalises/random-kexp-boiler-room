import * as React from 'react';
import Youtube from 'react-youtube';

interface PlayerProps {
  options?: any,
  id: string,
  onEnd: Function
}

export default (props: PlayerProps) => {
  const { options, id, onEnd } = props;
  return (
    <div className="mb4">
      <Youtube onEnd={onEnd} videoId={id} opts={options} />
    </div>
  )
}