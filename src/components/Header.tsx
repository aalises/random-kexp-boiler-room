import * as React from 'react';

interface HeaderProps {
  onClick: any;
}

export default (props: HeaderProps) => {
  return (
    <span className="ma4">
      <h2 className="f2 ttu tracked fw6 white-90 bg-black-50"> Random KEXP Performance </h2>
      <button className="f7 br3 ba pa2 ttu tracked fw6 white-90 bg-black-50" onClick={props.onClick}>Get me another session!</button>
    </span>
  )
}