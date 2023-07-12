const {useSelector} = require('react-redux');
const {Authenticated, NonAuthenticated} = require('./MainNavigation');

const RootNAvigation = () => {
  const user = useSelector(state => state.user);
  return user.isLoggedIn ? <Authenticated /> : <NonAuthenticated />;
};

export default RootNAvigation;
