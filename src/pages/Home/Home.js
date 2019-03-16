import React, { Component } from 'react';

import AlbumSection from 'components/AlbumSection/AlbumSection';

export default class Home extends Component {
  render() {
    return (
      <>
        <AlbumSection></AlbumSection>
        <AlbumSection></AlbumSection>
        <AlbumSection></AlbumSection>
        <AlbumSection></AlbumSection>
      </>
    );
  }
}
