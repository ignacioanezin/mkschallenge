import React, { useState } from 'react';
import { ToggleContainer, Slider, HiddenCheckbox } from './Toggle.styles';

interface ToggleProps {
  initialValue?: boolean;
  onChange?: (value: boolean) => void;
}

const Toggle: React.FC<ToggleProps> = ({ initialValue = false, onChange }) => {
  const [checked, setChecked] = useState(initialValue);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked(isChecked);
    if (onChange) {
      onChange(isChecked);
    }
  };

  return (
    <ToggleContainer>
      <HiddenCheckbox checked={checked} onChange={handleChange} />
      <Slider checked={checked} />
    </ToggleContainer>
  );
};

export default Toggle;
