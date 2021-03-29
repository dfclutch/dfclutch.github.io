import React from 'react';

import { MapContainer } from '../../components/map';

export default {
    title: "Columbus Row Houses",
    id: "row_houses",
    previewText: "An article on row houses",
    date: "",
    fullContent: (
      <div>
        <p>
          This article was inspired by an article written on univdiscol.com. 
        </p>
        <p>
          Below is a map of my current work in documenting row houses in North Columbus.
        </p>
        <MapContainer>
        <iframe src="https://www.google.com/maps/d/embed?mid=17Ub2PapQXQLXpd0IDmvLUMy-KGHSdw_x&hl=en"></iframe>
        </MapContainer>
      </div>
    )
};

/*
  NOTES:
*/