import React, { ReactNode } from 'react';
import StyledTypography from './Typography.styles'; 

export interface TypographyProps {
    size: 'extraSmall' | 'small' | 'medium' | 'large' | 'extraLarge' | 'huge' | 'giant' ;
    weight: 'regular' | 'bold';
    variant: 'primary' | 'secondary' | 'green' | 'red';
    children: ReactNode;
    letterSpacing?: boolean;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    style?: React.CSSProperties;
}


const Typography = ({ tag = 'p', children, size, weight, variant, letterSpacing, style }: TypographyProps) => (
  <StyledTypography tag={tag} size={size} weight={weight} variant={variant} letterSpacing={letterSpacing} style={style}>
    {children}
  </StyledTypography>
)

export default Typography;

