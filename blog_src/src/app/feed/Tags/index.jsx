import React from 'react';

import Tag from './Tag';
import { TAGS } from './constants';
import { TagsContainer } from './styles';

function Tags() {
 return (
   <TagsContainer>
   {
    TAGS.map(tag => (
      <Tag
        label={tag}
      />
    ))
    }
   </TagsContainer>
 )
}

export default Tags;