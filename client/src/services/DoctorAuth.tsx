import {Navigate} from 'react-router-dom';
const Auth = ({children}: any) => {
  
  const getData = localStorage.getItem("role")
  
  if(!getData || getData !== "doctor"){
    return <Navigate to='/login/doctor' />
  }

  return children

}

export default Auth