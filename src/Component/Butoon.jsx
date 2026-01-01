export default function Button({ children ,name }) {
    return (
        <>
            <button name={name}  className="bg-blue-500 text-white font-bold py-2 px-4 rounded">
                { children }
            </button>
        </>
    )
}