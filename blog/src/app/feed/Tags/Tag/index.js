import React from 'react';
import { TagPill } from './styles';

function Tag({ label }) {
 return (
  <TagPill>
    { label }
  </TagPill>
 )
}

export default Tag;