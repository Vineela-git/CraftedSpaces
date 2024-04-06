import { Navigate } from 'react-router-dom';
import {Children, react} from 'react';

const Protected=(Children)=>{
const token = localStorage.getItem("token");
if(!token){
    return <Navigate to="/login" replace/>;
}
return Children;
};
export default Protected;