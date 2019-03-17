import React, { Component } from 'react';
import albums from './albums';
import HorizontalScroll from 'react-scroll-horizontal';

import AlbumSection from 'components/AlbumSection/AlbumSection';

export default class Home extends Component {
  render() {
    return (
      <div className="albums">
        <HorizontalScroll reverseScroll>
          {albums.reverse().map((album, i) => (
            <AlbumSection key={i} {...album}></AlbumSection>
          ))}
        </HorizontalScroll>
      </div>
    );
  }
}
