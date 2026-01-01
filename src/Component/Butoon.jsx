export default function Button({ children ,name ,type }) {
    return (
        <>
            <button name={name} type={type}  className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                { children }
            </button>
        </>
    )
}