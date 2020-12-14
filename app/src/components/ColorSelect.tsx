import React, { useState } from 'react';
import env from '../env';

const ColorSelect = () => {

    const [selectedColor, setSelectedColor] = useState('');

    return (
        <div className="color-select">
            Color:
            <div className="color-select__options">
                {env.habitColors.map((color: string) => (
                    <label 
                        key={color}
                        style={{backgroundColor: color}} 
                        className={color === selectedColor ? `color-select__option--selected` : 'color-select__option'}
                    >
                        <input type="radio" name="color-select" value={color} onChange={e => setSelectedColor(e.target.value)} />
                    </label>
                ))}
            </div>
        </div>
    )
};

export default ColorSelect;