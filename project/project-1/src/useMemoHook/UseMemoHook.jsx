// import React, { useMemo } from 'react'

// const UseMemoHook = () => {

//     // let booleanval = () => {
//     //     return 10;
//     // }
//     // console.log(booleanval);

//     // let boolval = useMemo(() => {
//     //     return 10;
//     // })

//     // console.log(boolval);

    
    
//   return (
//     <div>
//       UseMemoHook
//     </div>
//   )
// }

// export default UseMemoHook


import React, { useMemo, useState } from 'react'

const UseMemoHook = () => {
    const [count , setCount] = useState(0)

    let increment = ()=>{
        setCount(count+1);
    }
    let value = useMemo(()=>{
        if(count%2 ==0){
            return true;
        }
        else{
            return false;
        }
    })
  return (
    <div className="flex-auto inline-flex justify-center">
      <h1>{value}</h1>
      <button onClick={increment} className="text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 content-center">{value ? "on" :"off"}</button>
    </div>
  )
}

export default UseMemoHook
