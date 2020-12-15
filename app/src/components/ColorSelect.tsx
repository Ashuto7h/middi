import React, { useState } from 'react';
import env from '../env';

type ColorSelectProps = {
    onColorSelect: Function
}

const ColorSelect = ({ onColorSelect }: ColorSelectProps) => {
    const [selectedColor, setSelectedColor] = useState('');

    const handleSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSelectedColor(e.target.value);
        onColorSelect(e);
    }

    return (
        <div className="color-select">
            Color:
            <div className="color-select__options">
                {Object.values(env.habitColors).map((color: string) => (
                    <label 
                        key={color}
                        style={{backgroundColor: color}} 
                        className={color === selectedColor ? `color-select__option--selected` : 'color-select__option'}
                    >
                        <input type="radio" name="color" value={color} onChange={handleSelect} />
                    </label>
                ))}
            </div>
        </div>
    )
};

export default ColorSelect;