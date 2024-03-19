import { useState } from "react";
import Link from "./Link/Link";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
    const [open,setOpen] = useState(false);
    const routes = [
        {
            "id": 1,
            "name": "Home",
            "path": "/path/to/file1"
        },
        {
            "id": 2,
            "name": "About",
            "path": "/path/to/file2"
        },
        {
            "id": 3,
            "name": "Services",
            "path": "/path/to/file3"
        }
    ]
    return (
       <nav>
        <div className="md:hidden text-2xl bg-yellow-500 ;" onClick={()=>setOpen(!open)}>
            {
            open===true? 
            <AiOutlineClose></AiOutlineClose>:
            <AiOutlineMenu></AiOutlineMenu>
       }      
        </div>
     
        <ul className={`md:flex gap-16 bg-red-500 duration-1000 absolute px-6  md:static 
        ${open ? 'top-6': '-top-60'}
           
           `}>
           {
                routes.map(route=><Link key={route.id} route={route}></Link>)
            }
           </ul>
       </nav>
    );
};

export default NavBar;