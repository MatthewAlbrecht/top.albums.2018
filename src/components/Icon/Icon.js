import React from 'react';
import Spotify from './Icons/Spotify';

export default function Icon(props) {
  const iconMap = {
    'Spotify': <Spotify/>,
  };

  return (
    <i className={props.className}>
      {iconMap[props.type]}
    </i>
  );
}
