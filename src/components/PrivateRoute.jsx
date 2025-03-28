import { Navigate } from 'react-router-dom'
import { auth } from '../lib/firebase'
import { useAuthState } from 'react-firebase-hooks/auth';
import PropTypes from 'prop-types';

const PrivateRoute = ({children}) => {

    const[user,loading] = useAuthState(auth);

    if(loading){
        return<p>Loading...</p>
    }

    if(user){
        return children;
    }

    return <Navigate to="/login2" />
  
  
}
PrivateRoute.propTypes = {
    children: PropTypes.node.isRequired, // `node` allows any valid JSX inside
  };
  
export default PrivateRoute;