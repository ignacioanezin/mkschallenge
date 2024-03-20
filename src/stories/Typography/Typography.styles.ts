import styled from 'styled-components';
import { TypographyProps } from './Typography';
import React from 'react';

const defaultTypographyStyles = `
    font-family: Inter, sans-serif;
    margin: 0;
`;

const sizeMap = {
    extraSmall: '0.75rem',
    small: '0.875rem',
    medium: '1rem',
    large: '1.125rem',
    extraLarge: '1.5rem',
    huge: '1.875rem',
    giant: '3.125rem',
};

const StyledTypography = styled(({ tag = 'p', children, ...props }: TypographyProps & { tag?: string }) =>
    React.createElement(tag, props, children)
)<TypographyProps>`
    ${defaultTypographyStyles}
    font-size: ${(props) => sizeMap[props.size]};
    font-weight: ${(props) => (props.weight === 'regular' ? 400 : 700)};
    color: ${(props) => {
        switch (props.variant) {
            case 'primary':
                return props.theme.colors.neutral.textPrimary;
            case 'secondary':
                return props.theme.colors.neutral.textSecondary;
            case 'green':
                return props.theme.colors.primary.limeGreen;
            case 'red':
                return props.theme.colors.primary.brightRed;
            default:
                return 'inherit';
        }
    }};
    letter-spacing: ${(props) => (props.letterSpacing ? '.15rem' : '0')};
`;

export default StyledTypography;
