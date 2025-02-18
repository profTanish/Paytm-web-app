import { VscAccount } from 'react-icons/vsc'
import { UserBalance } from './Balance'
import { UserList } from './UsersFilter'
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { Appbar } from './Dashboard-Comps/Appbar';

export function Dashboard() {
    const navigate = useNavigate();
    useEffect(() => {
        if (window.location.pathname === "/home") {
            sessionStorage.clear();
            navigate("/home");
        } 
        
        if (localStorage.getItem('token') === null) {
            navigate("/signin");
        }
    }, [localStorage.getItem('token')]);
    return (
       <div>
            <Appbar/>
            <UserBalance/>
            <UserList/>
       </div>
    )
}