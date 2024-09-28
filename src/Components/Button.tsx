// function Button() {
//     return(
//         <main>
//             <div>
//                 <button className="bg-primaryColor hover:bg-secondaryColor text-white font-bold py-4 px-6 rounded">
//                     Shop Now
//                 </button>
//             </div>
//         </main>
//     )
// }

// export default Button;
import React from 'react'
function Button({ name }: { name: string }) {
    return (
        <button className="bg-primaryColor py-3 px-8 rounded-md text-white font-semibold">{name}</button>
    )
}

export default Button