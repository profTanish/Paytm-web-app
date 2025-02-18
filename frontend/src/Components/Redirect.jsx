import { Link } from "react-router-dom";

function RedirectSigninOrUp(){
    return <div className="bg-black text-white h-screen w-screen">
        <div className="flex flex-col justify-center space-y-36">
            <p className=" hover:text-blue-500 hover:underline text-center mt-40 text-4xl font-bold ">
                <Link to={"/signup"}>Sign Up</Link>
                </p>
                <p className=" hover:text-blue-500 hover:underline text-center pt-10  text-4xl font-bold">
                <Link to={"/signin"}>Sign In</Link>
                </p>
            </div>
        </div>
}
export function OrIn(){
    return <RedirectSigninOrUp/>
}