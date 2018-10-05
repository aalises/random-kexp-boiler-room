import * as React from 'react';

interface footerProps {
  emoji: string,
  author: string
}

export default (props: footerProps) => {
  return (
    <footer className="footer fl ma3 f6 ttu tracked fw4 white-90 bg-black-50">
      Made with {props.emoji} by <a target="_blank" className="dim white grow" href="https://github.com/aalises/random-kexp">{props.author}</a>
    </footer>
  )
}