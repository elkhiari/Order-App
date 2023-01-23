import { useEffect, useState } from "react"
import 'flowbite'
import { useParams } from "react-router-dom"
import '../App.css'
import axios from "axios"

export default function GetOne()
{
    const {id} = useParams()
    const [order,setOrder] = useState([])
    const getAllOrder = async () =>{
        try {
            const ordermsg = await axios.get("http://localhost:3030/api/v1/order/"+id)
            setOrder(ordermsg.data.order)
        } catch (error) {
            setOrder(null)

        }
    }
    const HandleDelete = async ()=>{
        try {
            await axios.delete("http://localhost:3030/api/v1/order/"+id)
            window.location.replace('http://localhost:3000/');
        } catch (error) {
            console.log(null)

        }
    }
    useEffect(() => {
        getAllOrder()
    })
    return (
        <div className="bg-gray-200 h-screen  snap-none w-full">
            <nav className="shadow-sm justify-between px-4 py-3 text-gray-700 border border-gray-200 rounded-lg sm:flex sm:px-5 bg-gray-50 dark:bg-gray-800 dark:border-gray-700" aria-label="Breadcrumb">
            <ol className="inline-flex items-center mb-3 space-x-1 md:space-x-3 sm:mb-0">
                <li>
                <div className="flex items-center">
                    <a href="/" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Home</a>
                </div>
                </li>
                <li aria-current="page">
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <a href="/" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">product</a>
                </div>
                </li>
                <li aria-current="page">
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <span className="mx-1 text-sm font-medium text-gray-500 md:mx-2 dark:text-gray-400">product #{id}</span><span className="bg-blue-100 text-blue-800 text-xs font-semibold mr-2 px-2 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 hidden sm:flex">v1.0</span>
                </div>
                </li>
            </ol>
            <div>
                <button id="dropdownDefault" data-dropdown-toggle="dropdown" className="inline-flex items-center px-3 py-2 text-sm font-normal text-center text-gray-600 bg-gray-200 rounded-lg hover:bg-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600 dark:text-gray-300 dark:focus:ring-gray-700">Settings<svg className="w-4 h-4 ml-1" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg></button>
                <div id="dropdown" className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700">
                <ul className="py-2 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                    <li>
                        <a href={'/update/'+id} className="text-center block px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Update</a>
                    </li>
                    <li>
                        <button data-modal-target="popup-modal" data-modal-toggle="popup-modal"  href="#" className="block px-4 py-2 hover:bg-red-100 hover:text-red-700 hover:font-bold dark:hover:bg-gray-600 dark:hover:text-white w-full">Delete</button>
                    </li>
                    
                </ul>
                </div>  
            </div>
            </nav>
        <div className="w-full  bg-gray-200">
            <div className="mobile">
                {order?<ORDER d={order}/>:<NOTFOUND />}
            </div>
        </div>
        <div id="popup-modal" tabindex="-1" class="fixed  top-0 left-0 right-0 z-50 hidden p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-modal  bg-gray-50  md:h-full">
    <div class="relative w-full h-full max-w-md md:h-auto">
        <div class="relative bg-white rounded-lg shadow dark:bg-gray-700">
            <button type="button" class="absolute top-3 right-2.5 text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800  dark:hover:text-white" data-modal-hide="popup-modal">
                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                <span class="sr-only">Close modal</span>
            </button>
            <div class="p-6 text-center">
                <svg aria-hidden="true" class="mx-auto mb-4 text-gray-400 w-14 h-14 dark:text-gray-200" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <h3 class="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">Are you sure you want to delete this product?</h3>
                <button onClick={HandleDelete} data-modal-hide="popup-modal" type="button" class="text-white bg-red-600 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2">
                    Yes, I'm sure
                </button>
                <button data-modal-hide="popup-modal" type="button" class="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-600">No, cancel</button>
            </div>
        </div>
    </div>
</div>
        </div>
    )
}

function ORDER(props)
{
    const data = props.d
    return (
        // <li>{data.OrderName}</li>

        <div className="lg:flex  m-6 bg-white shadow rounded ">
            <div className="lg:w-1/2 image w-full flex place-content-center place-items-center">
                <img className="rounded-l " src={data.OrderPicture} alt="" />
            </div>
            <div className="lg:w-1/2 p-10">
                <div>
                    <h1 className="text-4xl font-bold dark:text-white">{data.OrderName}<span class="bg-blue-100 text-blue-800 text-2xl font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-2">LIKE ({data.OrderLike})</span></h1>
                </div>
                <div className="mt-5 flex justify-between bg-gray-100 p-5 rounded-lg">
                    <div><h6 class="text-lg font-bold dark:text-white">Marque : {data.OrderMarque}</h6></div>
                    <div><h6 class="text-lg font-bold dark:text-white">Type : {data.OrderType}</h6></div>
                </div>

                <div className="mt-5  flex justify-center bg-gray-100 p-5 rounded-lg">
                    <h1 class="mb-4  text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white"> <span class="underline underline-offset-3  decoration-8 decoration-blue-400 dark:decoration-blue-600">{data.OrderPrice}</span> MAD</h1>
                </div>
                <div className="mt-5  flex justify-center bg-gray-100 p-5 rounded-lg">
                <p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">{data.orderDetails}</p>
                </div>
            </div>
        </div>
    )
}
function NOTFOUND()
{
    return (
        <div className="w-full absolute text-center top-1/2 font-bold text-md">
            404! product not found
        </div>
    )
}