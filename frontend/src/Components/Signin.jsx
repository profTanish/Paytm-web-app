
import { useState } from "react"
import { Link, useNavigate } from "react-router-dom";

function SignupText() {
    return <Link to={"/signup"}>Signup</Link>
}
export function Signin() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState("")
    const [link, setLink] = useState(<></>)
    const navigate = useNavigate()
    //Posting signing req
    const submit = () => {
        fetch("http://localhost:3000/api/v1/user/signin", {
            method: "POST",
            headers: {
                "Accept": 'application/json',
                'Content-Type': 'application/json',
                'credentials' : 'include'
            },
            body: JSON.stringify({
                username: username,
                password: password
            }),
        }).then((response) => {
            //Signup status msg
            if (response.ok) {
                return response.json();
            }
        }).then((data) => {
            localStorage.setItem('token', data.token);
            setMsg('Signed in succesfully, redirecting you to');
            navigate("/home")
        }).catch((e) => {
            setMsg(`Invalid inputs/signup instead`);
            setLink(<SignupText />);
            console.log(e);
        })

    }
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
    <div className="flex flex-col justify-center">
      <div className="rounded-lg bg-white text-center p-2 h-max px-4" style={{ width : 360}}>
            <div className="text-center text-4xl font-bold pt-6">SignIn</div>
            <div className="text-center text-md pt-1 px-4 pb-4">Signin with credentials</div>

            <div className="py-2 text-left">
            <label className="font-semibold text-2xl" htmlFor="email">Email:</label><br />
            <input className="text-sm border-2 border-r-2 rounded-md border-slate-800 w-full px-2 py-1"name="email" id="emailSignin" type="text" placeholder="email@gmail.com" onChange={(e) => {
                setUsername(e.target.value)
            }} />
            </div>

            <div className=" py-2 text-left">
            <label className="font-semibold text-left text-2xl" htmlFor="password">Password:</label><br />
            <input className="text-sm border-2 border-r-2 rounded-md border-slate-800 w-full px-2 py-1" name="password" id="passwordSignin" type="password" onChange={(e) => {
                setPassword(e.target.value)
            }} />
            </div>
            
            <div className="py-2"><button onClick={submit} type="button" className =" w-full text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">Signin</button></div>
            <p className="text-md font-medium pb-24">{msg} <span className=" underline hover:text-blue-600">{link}</span></p>
            </div>
            </div>
        </div>
    )
}
