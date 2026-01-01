
export default function Inputtextcomponent({type,placeholder,label}) {
    return (
        <>
            <input
                type={type}
                placeholder={placeholder}
                className="w-full px-4 py-2.5 text-sm
                border border-gray-300 rounded-md
                hover:border-indigo-400
                focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500
                transition duration-200"
                name={label}
            />
        </>
    )
}