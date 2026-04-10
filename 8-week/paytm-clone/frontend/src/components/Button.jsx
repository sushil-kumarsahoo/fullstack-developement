
export function Button({label, onClick}){
    return <button onClick={onClick} type="button" className="w-full 
                 bg-gradient-to-r from-gray-800 to-gray-900 
                 hover:from-gray-900 hover:to-black 
                 text-white font-semibold 
                 py-3 px-4 
                 rounded-xl 
                 shadow-md 
                 transition-all duration-200 
                 transform hover:scale-[1.02] active:scale-[0.98]">{label}</button>
}