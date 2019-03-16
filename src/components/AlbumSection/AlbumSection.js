import React from 'react';
import PropTypes from 'prop-types';

import Txt from 'components/Txt/Txt';
import Box from 'components/Box/Box';
import Img from 'components/Img/Img';

export default function AlbumSection(props) {
  const songTitles = [
    "Singularity",
    "Emerald Rush",
    "Neon Pattern Drum",
    "Everything Connected",
    "Feel First Life",
    "C O S M",
    "Echo Dissolve",
    "Luminous Beings",
    "Recovery",
    "Singularity",
    "Emerald Rush",
    "Neon Pattern Drum",
    "Everything Connected",
    "Feel First Life",
    "C O S M",
    "Echo Dissolve",
    "Luminous Beings",
    "Recovery",
    "Singularity",
    "Emerald Rush",
    "Neon Pattern Drum",
    "Everything Connected",
    "Feel First Life",
    "C O S M",
    "Echo Dissolve",
    "Luminous Beings",
    "Recovery",
    "Singularity",
    "Emerald Rush",
    "Neon Pattern Drum",
    "Everything Connected",
    "Feel First Life",
    "C O S M",
    "Echo Dissolve",
    "Luminous Beings",
    "Recovery",
    "Singularity",
    "Emerald Rush",
    "Neon Pattern Drum",
    "Everything Connected",
    "Feel First Life",
    "C O S M",
    "Echo Dissolve",
    "Luminous Beings",
    "Recovery",
    "Singularity",
    "Emerald Rush",
    "Neon Pattern Drum",
    "Everything Connected",
    "Feel First Life",
    "C O S M",
    "Echo Dissolve",
    "Luminous Beings",
    "Recovery",
    "Singularity",
    "Emerald Rush",
    "Neon Pattern Drum",
    "Everything Connected",
    "Feel First Life",
    "C O S M",
    "Echo Dissolve",
    "Luminous Beings",
    "Recovery",
  ]

  function addRandomSpaces(n) {
    let result = [];
    for (let index = 0; index < Math.random()*n; index++) {
      result.push(<Txt
        key={index}
        tag="span"
        content="&nbsp;"
        size="24"
        line="10"
      />)
    }
    return result;
  }

  return (
    <section className="albumSection">
      <Txt
        tag="h2"
        content="50"
        size="70"
        color="GreyDark"
        line="10"
        uppercase
        bold
        outline
      />
      <Box classes="top4">
        <Txt
          tag="h1"
          content="Singularity"
          size="36"
          color="Lightest"
          space="1"
          bold
        />
      </Box>
      <Box classes="top1">
        <Txt
          tag="h3"
          content="Jon Hopkins"
          size="18"
          color="Lightest"
        />
      </Box>
      <Img
        name="singularity"
        className="albumSection-img"
      ></Img>
      <div className="albumSection-songTitles">
        {songTitles.map((song, i) => (
          <div
            key={i}
          >
            {addRandomSpaces(15)}
            <Txt
              tag="span"
              content={`${song} ${song}`}
              size="24"
              color="Lightest"
              line="10"
              uppercase
              bold
              noWrap
            />
          </div>
        ))}
      </div>
    </section>
  );
}

AlbumSection.propTypes = {
  'classes': PropTypes.string,
};
