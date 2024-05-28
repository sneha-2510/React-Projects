import { useEffect } from "react"

function App() {

 
  return (
    <div className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/6825703/pexels-photo-6825703.jpeg?auto=compress&cs=tinysrgb&w=600')`,
      }}
      >
      
      <div className="bg-white min-h-min rounded-md p-4 shadow-sm w-100 ">

        <div className="header ">
          <div className="searchBox font-lg w-full min-h-min flex justify-center items-center bg-slate-200 rounded-md" >

            <input className="bg-slate-200 px-4 py-4 rounded-lg text-black outline-none w-80"
              placeholder="Enter your location"
            />

            <button class="bg-blue-500 hover:bg-blue-600 p-5 rounded-md w-15 text-white cursor-pointer">
              search
            </button>

          </div>
        </div>

        <div className="weatherBody">

            <div className="weatherBox mt-4">
                <p>Temperature : 0°</p>
                <p>Description : Light Rain</p>
            </div>

        </div>


      </div>
    </div>
  )
}

export default App
