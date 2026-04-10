
export default function Button(){

    function handler(){
        console.log("hi there");
        
    }

   return <button onClick={handler}
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-lg font-medium hover:bg-blue-700 transition"
          >
            Sign In
          </button>
}