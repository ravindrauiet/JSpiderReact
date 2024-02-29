import React from 'react'
import axios from 'axios'

const ApiHandelling = () => {

  let handleFetchRequest = async () => {
    let finalData = await axios.get("https://api.github.com/users")
    console.log(finalData.data);
  }

  return (
    <div>
      <button
        onClick={() => {
          handleFetchRequest()
        }}
        className="text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2"
      >
        Fetch Api
      </button>
    </div>
  )
}

export default ApiHandelling


