import axios from 'axios'
import { useState } from 'react'
import '../index.css'
export default function Addone() 
{

    const [name,setName] = useState('')
    const [type,setType] = useState('')
    const [marque,setMarque] = useState('')
    const [price,setPrice] = useState('')
    const [picture,setPicture] = useState('')
    const [more,setMore] = useState('')


const  AddOneOrder = async ()=>{
    try {
        const ordermsg = await axios.post("http://localhost:3030/api/v1/order/",{"OrderName":name,OrderMarque:marque,OrderPrice:price,OrderPicture:picture,OrderType:type,orderDetails:more})
        // window.location.reload(true)
        window.location.replace('http://localhost:3000/'+ordermsg.data.Order._id);
    } catch (error) {
        alert("U have a probleme in this server or u have a probleme in format, please check format!!")
    }
}


    return(
        <div className=''>
            <form>
    <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
            <label for="Order_Name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Order Name</label>
            <input onChange={(e)=>setName(e.target.value)} type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="HP PROBOOK" required />
        </div>
        <div>
            <label for="Type" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Type</label>
            <input onChange={(e)=>setType(e.target.value)} type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ordinateur" required />
        </div>
        <div>
            <label for="marque" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Marque</label>
            <input onChange={(e)=>setMarque(e.target.value)} type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="HP" required />
        </div>  
        <div>
            <label for="Price" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Price</label>
            <input onChange={(e)=>setPrice(e.target.value)} type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="500"   required />
        </div>
        
    </div>
    <div class="mb-6">
        <label for="Picture" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Picture</label>
        <input onChange={(e)=>setPicture(e.target.value)} type="text" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Picture.jpeg" required />
    </div>
    <div class="mb-6">
        <label for="Details" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Details</label>
        <textarea onChange={(e)=>setMore(e.target.value)} type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Details" required />
    </div> 
    

    
       
    <button onClick={AddOneOrder} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Submit</button>
</form>
        </div>
    )
}