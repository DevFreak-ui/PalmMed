import {Navigate} from 'react-router-dom';

const Auth = ({children}: any) => {
  
  const getData = localStorage.getItem("role")
  
  if(!getData){
    return <Navigate to='/login/patient' />
  }

  return children

}

export default Auth