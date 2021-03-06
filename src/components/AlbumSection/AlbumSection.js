import React from 'react';
import PropTypes from 'prop-types';

import Txt from 'components/Txt/Txt';
import Box from 'components/Box/Box';
import Img from 'components/Img/Img';
import Icon from 'components/Icon/Icon';

export default function AlbumSection(props) {
  const {
    name,
    artist,
    number,
    imageName,
    songTitles,
    genre,
    spotifyUrl,
    bgNumber,
  } = props;

  function get50SongTitles() {
    const totalTracks = songTitles.length;
    let songs = [...songTitles];

    for (let index = 0; index < Math.ceil(50/totalTracks); index++) {
      songs = songs.concat(songTitles)
    }

    return songs;
  }

  function addRandomSpaces(n) {
    let result = [];
    for (let index = 0; index < Math.random()*n; index++) {
      result.push(<Txt
        key={index}
        tag="span"
        content="&nbsp;"
        size="18"
        line="10"
      />)
    }
    return result;
  }

  const className = `albumSection albumSection_${bgNumber}`

  return (
    <section className={className}>
      <div className="albumSection-top">
        <Txt
          tag="h2"
          content={number}
          size="52"
          color="GreyDark"
          line="10"
          uppercase
          bold
          outline
        />
        <Box classes="top4">
          <Txt
            tag="h1"
            content={name}
            size="26"
            color="Lightest"
            space="1"
            bold
          />
        </Box>
        <Box classes="top1">
          <Txt
            tag="h3"
            content={artist}
            size="12"
            space="1"
            color="Lightest"
          />
        </Box>
      </div>
      <div className="albumSection-absolute">
        <Img
          name={imageName}
          className="albumSection-img"
        ></Img>
        <div className="albumSection-songTitles">
          {get50SongTitles().map((song, i) => (
            <div
              key={i}
            >
              {addRandomSpaces(25)}
              <Txt
                tag="span"
                content={`${song} ${song}`}
                size="18"
                color="Lightest"
                line="10"
                uppercase
                bold
                noWrap
              />
            </div>
          ))}
        </div>
      </div>
      <div className="albumSection-bottom">
        <a href={spotifyUrl} target="_blank" rel="noopener noreferrer">
          <Icon type="Spotify" className="icon icon_spotify icon_24"></Icon>
        </a>
        <Box classes="top1">
          <Txt
            tag="span"
            content={genre}
            size="12"
            color="Lightest"
            space="1"
          />
        </Box>
      </div>
    </section>
  );
}

AlbumSection.propTypes = {
  'classes': PropTypes.string,
};
