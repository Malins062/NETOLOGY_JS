import { useState } from 'react'
import './Hex2rgb.css'

const DEFAULT_HEX = '#008599', // Первоначальный цвет в формате HEX
    ERROR_MESSAGE = 'Ошибка!', // Сообщение об ошибке
    ERROR_RGB = '#ff0000'; // Цвет фона в формате RGB при ошибке

// функция перевода HEX в RGB
const hexToRgbString = (hex: string) => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result 
        ? `rgb(${parseInt(result[1], 16)}, ${parseInt(result[2], 16)}, ${parseInt(result[3], 16)})`
        : ERROR_MESSAGE;
}

const Hex2rgb = () => {
    const initState = {
        hex: DEFAULT_HEX,
        rgb: hexToRgbString(DEFAULT_HEX),
        color: DEFAULT_HEX
    }
    const [values, setValues] = useState(initState);
    
    const handleHexChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { value } = event.target;
        const rgbColor = hexToRgbString(value);
        (value.length === 7) 
            ? setValues({...values, 
                hex: value, 
                rgb: rgbColor, 
                color: (rgbColor === ERROR_MESSAGE) ? ERROR_RGB : rgbColor})
            : setValues({...values, hex: value});
    }

    return (
        <div 
            className='hex-overlay'
            style={{
                backgroundColor: values.color
            }}
        >
            <form className='hex-form'>
                <input 
                    className='hex-input'
                    id='codeHex' name='codeHex'
                    type='text'
                    value={values.hex}
                    maxLength={7}
                    onChange={handleHexChange}
                    required
                >
                </input>
                <input 
                    className='rgb-input'                    
                    id='codeRgb' name='codeRgb'
                    style={{
                        backgroundColor: values.color
                    }}
                    type='text' 
                    value={values.rgb}
                    readOnly
                >
                </input>
            </form>
        </div>
    )
}

export default Hex2rgb
