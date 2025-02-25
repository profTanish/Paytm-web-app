import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Alreadyauserprompt(){
    return (<><p>Already a user?</p><span className="underline hover:text-color-600"><Link to={"/signin"}>Sign In</Link></span></>)
}
export function Signup() {
const [username, setUsername] = useState("");
const [password, setPassword] = useState("");
const [firstName, setFirstName] = useState("");
const [lastName, setLastName] = useState("");
const [msg, setMsg] = useState("");
const [link, setLink] = useState(<></>);

const navigate = useNavigate("/home")
    const submit = (() => {
        fetch("https://paytm-web-app-host.vercel.app/api/v1/user/signup", {
            method: "POST",
            headers: {
                'Application': 'application/json',
                'Content-Type': 'application/json',
                'Content-Length': JSON.stringify({
                    username: username,
                    password: password,
                    firstName: firstName,
                    lastName: lastName
                }).length.toString(),
                'credentials' : 'include',
            },
            body: JSON.stringify({
                username: username,
                password: password,
                firstName: firstName,
                lastName: lastName
            })
        }).then((response) => {
            if (response.ok) {
                return response.json();
            }
            else {
                setMsg(response.message)
                throw new Error("Invalid inputs");
            }
        }).then((data)=>{
            setMsg(data.message);
            localStorage.setItem('token',data.token);
            navigate("/home");
        }).catch((e) => {
            setMsg(e.message);
            setLink(<Alreadyauserprompt/>)
            console.error(`error : ${e.status,e}`);
        })
    })
    

    return (
        
            <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white text-center p-2 h-max px-4" style={{ width: 360}}>

            <div className="text-center text-4xl font-bold pt-6">Sign Up</div>
            <div className="text-center text-md pt-1 px-4 pb-4">SignUp with credentials</div>

            <div className="py-2 text-left">
            <label className="font-semibold text-2xl" htmlFor="email">Email:</label><br />
            <input className="text-sm border-2 border-r-2 rounded-md border-slate-800 w-full px-2 py-1"name="email" id="emailSignup" type="text" placeholder="email@gmail.com" onChange={(e) => {
                setUsername(e.target.value)
            }} />
            </div>
            <div className="py-2 text-left">
            <label className="font-semibold text-2xl" htmlFor="email">Password:</label><br />
            <input className="text-sm border-2 border-r-2 rounded-md border-slate-800 w-full px-2 py-1" name="password" id="passwordSignup" type="password" onChange={(e) => {
                setPassword(e.target.value)
            }} />
            </div>
            <div className="py-2 text-left">
            <label className="font-semibold text-2xl" htmlFor="email">First Name:</label><br />
            <input className="text-sm border-2 border-r-2 rounded-md border-slate-800 w-full px-2 py-1"name="email" id="firstNamesign" type="text" placeholder="Ledha" onChange={(e) => {
                setFirstName(e.target.value)
            }} />
            </div>
            <div className="py-2 text-left">
            <label className="font-semibold text-2xl" htmlFor="email">Last Name:</label><br />
            <input className="text-sm border-2 border-r-2 rounded-md border-slate-800 w-full px-2 py-1"name="email" id="lastNamesign" type="text" placeholder="Hai" onChange={(e) => {
                setLastName(e.target.value)
            }} />
            </div>
            <div className="py-2"><button onClick={submit} type="button" className =" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Sign Up</button></div>
            <p className="text-md font-medium pb-24">{msg}{link}</p>
            </div>
            </div>
            </div>
        
    )
}
