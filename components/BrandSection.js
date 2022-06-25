// import { ChevronLeftIcon } from '@heroicons/react/outline'

import { useState } from "react"


const BrandSection = () => {
    const [counter, setCounter] = useState(0)

    function handleIncrease() {
     setCounter(counter + 1)
     if(counter > 1) {
        setCounter(0)
     }
    } 

    function handleDecrease() {
        setCounter(counter - 1)
        if(counter < 1) {
            setCounter(2)
        }
    } 
  return (
    <div className="flex flex-col md:flex-row">
        <div className="flex-1 bg-black text-white">
            <div className="p-8 px-12">
                <h1 className="text-3xl md:text-6xl font-semibold mb-8">
                {
                counter == 0 && 'Brand naming & guidelines' ||
                counter == 1 && 'Brand identity & merchandise' ||
                counter == 2 && 'Brand identity & web design'
            }
                </h1>
                <div className="flex space-x-6">
                    <div className="cursor-pointer hover:opacity-50" onClick={handleDecrease}>
                        <img src="./assets/desktop/icon-arrow-previous.svg" alt="" />
                    </div>
                    <div className="cursor-pointer hover:opacity-50" onClick={handleIncrease}>
                        <img src="./assets/desktop/icon-arrow-next.svg" alt="" />
                    </div>
                </div>
            </div>
        </div>
        <div className="flex-1 relative">
            {
                counter == 0 && (
                    <div>
                        <img src="./assets/desktop/image-slide-1.jpg" alt="" />
                        <div className="text-white absolute bottom-2 right-8">
                            <h6 className="text-xl font-semibold">
                                Learn Product Roadmap
                            </h6>
                            <p>
                                2019 Project
                            </p>
                        </div>
                    </div>
                ) ||
                counter == 1 && (
                    <div>
                        <img src="./assets/desktop/image-slide-2.jpg" alt="" />
                        <div className="text-white absolute bottom-2 right-8">
                            <h6 className="text-xl font-semibold">
                                New Majest Hotel
                            </h6>
                            <p>
                                2018 Project
                            </p>
                        </div>
                    </div>
                ) ||
                counter == 2 && (
                    <div>
                        <img src="./assets/desktop/image-slide-3.jpg" alt="" />
                        <div className="text-white absolute bottom-2 right-8">
                            <h6 className="text-xl font-semibold">
                                Crypot Dashboard
                            </h6>
                            <p>
                                2016 Project
                            </p>
                        </div>
                    </div>
                ) 
            }
        </div>
    </div>
  )
}

export default BrandSection