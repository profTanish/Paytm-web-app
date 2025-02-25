import { useState } from "react";

export function Transaction(){
    const [amount,setAmount] = useState(0);
    const[msg,setMsg] = useState("")
    
    const sendMoneyOnClick = (()=>{
            fetch(`https://paytm-web-app-host.vercel.app/api/v1/account/transfer`,{
                method: 'POST',
                headers : {
                    'Accept' : 'application/json',
                    'Content-Type' : 'application/json',
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`,
                    'credentials' : 'include'
                },
                body : JSON.stringify({
                    'amount' : amount,
                    'to' : sessionStorage.getItem('userId')
                 })
            }).then((response)=>{
                return response.json();
            }).then((data)=>{
                setMsg(data.message);
            }).catch((e)=>{
                setMsg(data.message);
                console.error(e);
            })
        })
     
   
    return (
        <div className=" flex justify-center h-screen bg-gray-100">
            <div className="h-full flex flex-col justify-center">
                <div className="border  h-min text-card-foreground max-w-md p-4 space-y-8 w-96 bg-white shadow-lg rounded-lg">
                    <div className="flex flex-col space-y-1.5 p-6">
                        <h2 className="text-3xl font-bold text-center translate-y-3">Send Money</h2>
                    </div>
                    <div className="p-6">
                        <div className="flex item-center space-x-4 pb-4 -translate-y-3">
                            <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center ">
                            <span className="text-2xl text-white">U</span>
                            </div>
                            <h3 className="text-2xl font-semibold py-2">{sessionStorage.getItem('fullName')}</h3>
                        </div>
                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medim leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70" htmlFor="amount"> Amount(in Rs)</label>
                                <input type="number" 
                                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
                                id="amount"
                                placeholder="Enter Amount"
                                onChange={e=>setAmount(e.target.value)}
                                ></input>
                            </div>
                            <button className="justify-center rounded-md text-sm font-medium ring-offset-background transition-colors h-10 px-4 py-2 w-full bg-blue-500 text-white"
                            onClick={sendMoneyOnClick}
                            >Transfer</button>
                        </div>
                        <div>
                            <p>{msg}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}