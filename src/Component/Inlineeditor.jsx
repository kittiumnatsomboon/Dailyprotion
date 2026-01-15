import { useState } from "react"
import Button from "./Butoon";


export default function Inlineeditor({ initialValue }) {
    const [isEditing, setIsEditing] = useState(false);
    const [value, setValue] = useState(initialValue);

    const handleSave = (newValue) => {
        setValue(newValue);
        setIsEditing(false);
    };

    const handleCancel = () => {
        setIsEditing(false);
    };
    return (
        <>
                {isEditing ? (
                    <div  className="bg-white p-4 rounded-lg">
                        <div className="relative bg-inherit">
                            <input type="text" 
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                            className="peer bg-transparent h-10 w-72 rounded-lg text-gray-900 
                            placeholder-transparent ring-2 px-2 ring-gray-500 focus:ring-sky-600 focus:outline-none focus:border-rose-600" 
                            placeholder="Type inside me"
                            on
                            />
                            <div className="pt-4">
                                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={() => handleSave(value)} >
                                    บันทึก
                                </button>
                            </div>
                            <div className="pt-4">
                                <button className="bg-blue-500 text-white font-bold py-2 px-4 rounded" onClick={handleCancel}>
                                    ยกเลิก
                                </button>
                                
                            </div>
                            
                        </div>
                        
                    </div>
                ) : (
                    <span onClick={() => setIsEditing(true)} style={{ cursor: 'pointer' }}>
                        {value}
                    </span>
                )}
        </>
    )
}