import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
export default function Datepicker(name,value,onchang){
    return(
        <>
        <DatePicker
        className="w-full px-4 py-2.5 text-sm
        border border-gray-300 rounded-md
        hover:border-indigo-400
        focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
        transition duration-200"
        placeholderText="กรุณาระบุวันเดือนปีเกิด"
        name={name}
        yearDropdownItemNumber={100}
        scrollableYearDropdown
        showYearDropdown
        showMonthDropdown
        
        />
        </>
    )
}