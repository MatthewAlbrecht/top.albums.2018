import React, { Component } from 'react';
import albums from './albums';

import AlbumSection from 'components/AlbumSection/AlbumSection';

export default class Home extends Component {
  render() {
    return (
      <div className="albumsWrapper">
        <div className="albums">
          {albums.map((album, i) => (
            <AlbumSection key={i} {...album}></AlbumSection>
          ))}
        </div>
      </div>
    );
  }
}
