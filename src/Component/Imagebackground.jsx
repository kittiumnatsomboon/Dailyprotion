const Imagebackground = ({textinformation}) =>{
    return (
        <>
            <div className="relative w-full h-64 overflow-hidden">
                <img src="information-system-.jpg" alt="Background" className="w-full h-full object-cover" />
                <div className="absolute inset-0 flex items-center justify-center">
                    <h1 className="text-white text-4xl font-bold">{textinformation}</h1>
                </div>
            </div>
        </>
    )
}

export default Imagebackground