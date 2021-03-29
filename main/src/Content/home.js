import React from 'react';
import { ContentContainer } from './ContentContainer';
import { mobileCheck } from '../mobile_check';

export const HomeContent = () => {
    return (
        <ContentContainer
        	as={"img"}
            src={"./img/profile-image.jpeg"}
            mobile={ mobileCheck }
        />
    ); 
}
