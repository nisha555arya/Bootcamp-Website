import { NavLink, useRouteError } from "react-router-dom"


export const ErrorPage =()=>{

    const error = useRouteError();
    console.log(error);
    
    return 
    (
    <>
    <div>

    <h1>error page</h1>
    <NavLink to="/"> Go yo home page</NavLink>
    </div>
    </>
    )
        
}