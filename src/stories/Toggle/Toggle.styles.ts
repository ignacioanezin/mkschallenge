import styled from 'styled-components';

export const ToggleContainer = styled.label`
  display: inline-block;
  position: relative;
  width: 66px;
  height: 34px;
`;

export const Slider = styled.div<{ checked: boolean }>`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: ${props => (props.checked ? `linear-gradient(to right, ${props.theme.colors.primary.toggleLinearStart}, ${props.theme.colors.primary.toggleLinearEnd})` : props.theme.colors.primary.toggleOff)};
  transition: 0.4s;
  border-radius: 34px;

  &:hover {
    transition: 0.4s;
    background: ${props => (`linear-gradient(to right, ${props.theme.colors.primary.toggleLinearStart}, ${props.theme.colors.primary.toggleLinearEnd})`)};
  }

  &::before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    border-radius: 50%;
    transition: 0.4s;
    transform: ${props => (props.checked ? 'translateX(0px)' : 'translateX(32px)')};
  }
`;

export const HiddenCheckbox = styled.input.attrs({ type: 'checkbox' })`
  opacity: 0;
  width: 0;
  height: 0;
`;
