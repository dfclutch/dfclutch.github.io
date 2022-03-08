import React from "react";

import {
  ProjectContainer,
  BigLink,
  ColorPickerContainer,
  ColorPickerOption,
  InverterContainer
} from './styles';

export function Link({
  href,
  children,
  className, // set by styled compnents
}) {
  return (
    <a href={href} target="_blank" className={className}>
      {children}
    </a>
  );
}

export function Project({
  description,
  link,
  title
}) {
  return (
    <ProjectContainer>
      <BigLink href={link}>
        {title}
      </BigLink>
      <p>
        {description}
      </p>
    </ProjectContainer>
  );
}

export function ColorPicker({ colors, currentColor, isMobile, setColor }) {
  return (
    <ColorPickerContainer isMobile={isMobile} >
      {colors.map(color => (
        <ColorPickerOption
          key={color}
          selected={color === currentColor}
          color={color}
          onClick={() => setColor(color)}
        />
      ))}
    </ColorPickerContainer>
  );
}

export function Inverter({ isInverted, setIsInvtered, color }) {
  const toggleIsInverted = () => setIsInvtered(!isInverted)

  return (
    <InverterContainer onClick={toggleIsInverted} isInverted={isInverted} color={color}>
      INVERT
    </InverterContainer>
  )
}