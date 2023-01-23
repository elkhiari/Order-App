import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import '../index.css'
export default function Updateone() 
{
    const {id} = useParams()
    const [order,setOrder] = useState('')

    const getAllOrder = async () =>{
        try {
            const ordermsg = await axios.get("http://localhost:3030/api/v1/order/"+id)
            setOrder(ordermsg.data.order)
        } catch (error) {
            setOrder(null)

        }
    }
    useEffect(() => {
        getAllOrder()
    })
    const [name,setName] = useState(order.orderName)
    const [type,setType] = useState(order.OrderType)
    const [marque,setMarque] = useState(order.OrderMarque)
    const [price,setPrice] = useState(order.OrderPrice)
    const [picture,setPicture] = useState(order.OrderPicture)
    const [more,setMore] = useState(order.orderDetails)

    const  AddOneOrder = async ()=>{
        try {
            const ordermsg = await axios.patch("http://localhost:3030/api/v1/order/"+id,{"OrderName":name,OrderMarque:marque,OrderPrice:price,OrderPicture:picture,OrderType:type,orderDetails:more})
            window.location.replace('http://localhost:3000/'+ordermsg.data._id);
        } catch (error) {
            console.log(error)
            alert("U have a probleme in this server or u have a probleme in format, please check format!!")
        }
    }

    return(
        <div className=''>
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
                    <a href={'/'+id} className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">product</a>
                </div>
                </li>
                <li aria-current="page">
                <div className="flex items-center">
                    <svg aria-hidden="true" className="w-6 h-6 text-gray-400" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                    <a href="#" className="ml-1 text-sm font-medium text-gray-700 hover:text-blue-600 md:ml-2 dark:text-gray-400 dark:hover:text-white">Update</a>
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
                
            </div>
            </nav>
            <form className='mt-5 p-5'>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="Order_Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Order Name</label>
            <input onChange={(e)=>setName(e.target.value)} defaultValue={order.OrderName} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="HP PROBOOK" required />
        </div>
        <div>
            <label for="Type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
            <input onChange={(e)=>setType(e.target.value)} defaultValue={order.OrderType} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ordinateur" required />
        </div>
        <div>
            <label for="marque" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marque</label>
            <input onChange={(e)=>setMarque(e.target.value)} defaultValue={order.OrderMarque} type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="HP" required />
        </div>  
        <div>
            <label for="Price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input onChange={(e)=>setPrice(e.target.value)} defaultValue={order.OrderPrice} type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="500"   required />
        </div>
        
    </div>
    <div class="mb-6">
        <label for="Picture" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture</label>
        <input onChange={(e)=>setPicture(e.target.value)} defaultValue={order.OrderPicture} type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Picture.jpeg" required />
    </div>
    <div class="mb-6">
        <label for="Details" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
        <textarea onChange={(e)=>setMore(e.target.value)} defaultValue={order.orderDetails} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Details" required />
    </div> 
    

    
       
    <button onClick={AddOneOrder} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
        </div>
    )
}