import React, { useState } from "react";

export default function Widget () {
    const [color, setColor] = useState('');
    const handleChange = ({target}) => {
        const hex = target.value;
        if(hex.length !== 7) {
            return;
        }
        const rgb = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
        const convert = rgb ? `rgb(${parseInt(rgb[1], 16)}, ${parseInt(rgb[2], 16)}, ${parseInt(rgb[3], 16)})` : 'Ошибка';
        setColor(convert);
    }
    return (
        <div className="box_widget" style={{ background: color === 'Ошибка' ? 'red' : color }}>
            <input className="inp_color" type='text' onChange={ handleChange }></input>
            <div className="color_result">{ color }</div>
        </div>
    )
}