import { useState, useEffect } from "react"
import { Balance } from "./Dashboard-Comps/Balance";


export const UserBalance = ()=>{
    const [balance,setBalance] = useState(0);
    
    useEffect(()=>{
        const currentBalance = async ()=>{
        const response = await fetch("http://localhost:3000/api/v1/account/balance",{
                method : "GET",
                headers: {
                    'Accept' : 'application/json',
                    'credentials' : 'include',
                    'Authorization' : `Bearer ${localStorage.getItem('token')}`
                }
            })
            
            if(response.ok){
                const data = await response.json();
                setBalance(parseFloat(data.balance).toPrecision(8));
                return ;
            }
            else {
                throw new Error (`HTTP request failed status ${response.status}`);
            }
        }
        currentBalance().catch(e=>console.error(`Balance.jsx1 ${e}`))
    },[])
    

        return (
            <div><Balance value={balance}/></div>
        )
}