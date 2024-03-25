import React, { ReactNode } from 'react';
import {StyledTypography, IconWrapper} from './Typography.styles'; 
import IconDown from '../../assets/icon-down.svg';
import IconUp from '../../assets/icon-up.svg';

export interface TypographyProps {
    size: 'xs' | 's' | 'm' | 'l' | 'xl' | 'xxl' | 'xxxl' ;
    weight: 'regular' | 'bold';
    variant?: 'primary' | 'secondary' | 'green' | 'red';
    children: ReactNode;
    letterSpacing?: boolean;
    tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span';
    style?: React.CSSProperties;
    positive?: boolean;
    percentage?: boolean;
}


const Typography = ({
  tag = 'p',
  children,
  size,
  weight,
  variant,
  letterSpacing,
  style,
  positive,
  percentage
}: TypographyProps) => {
  const renderIcon = positive ? IconUp : IconDown;
  return (
      <StyledTypography
          tag={tag}
          size={size}
          weight={weight}
          variant={variant}
          letterSpacing={letterSpacing}
          style={style}
          positive={positive}
      >
          {positive !== undefined && (
              <IconWrapper src={renderIcon}/>
          )}
          {children}
          {percentage && '%'}
      </StyledTypography>
  );
};

export default Typography;

