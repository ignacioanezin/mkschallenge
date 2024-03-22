import styled from 'styled-components';
import { TypographyProps } from './Typography';
import React from 'react';

const defaultTypographyStyles = `
    font-family: Inter, sans-serif;
    margin: 0;
`;


const sizeMap = {
    xs: '0.75rem',       // 12px
    s: '0.875rem',           // 14px
    m: '1.125rem',              // 18px
    l: '1.5rem',        // 24px
    xl: '1.875rem',            // 30px
    xxl: '2.75rem',            // 44px
    xxxl: '3.25rem',           // 52px
};

export const IconWrapper = styled.img`
    margin-right: 4px;
    width: 12px;
`;

export const StyledTypography = styled(
    ({ tag = 'p', children, ...props }: TypographyProps & { tag?: string }) =>
        React.createElement(tag, props, children)
)<TypographyProps>`
    ${defaultTypographyStyles}
    font-size: ${(props) => sizeMap[props.size]};
    font-weight: ${(props) => (props.weight === 'regular' ? 400 : 700)};
    color: ${(props) => {
        if (props.positive !== undefined) {
            return props.positive ? props.theme.colors.primary.limeGreen : props.theme.colors.primary.brightRed;
        }
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
    display: flex;
    align-items: center;
`;


