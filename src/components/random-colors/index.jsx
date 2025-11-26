import { useState } from "react";

const RandomColors = () => {
    const [typeOfColor, setTypeOfColor] = useState('hex')
    const [color, setColor] = useState('#000000')

    function handleCreateRandomHexColor() {
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F']
    }

    function handleCreateRandomRgbColor() {

    }

    return (
        <div className={` w-[100vw] h-[100vh] bg-${color} `}>
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>
            <button
                onClick={typeOfColor === 'hex' ?
                    handleCreateRandomHexColor()
                    : handleCreateRandomRgbColor()
                }
            >
                Generate Random Color
            </button>
        </div>
    )
}

export default RandomColors;