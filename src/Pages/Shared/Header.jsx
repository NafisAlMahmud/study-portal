import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../providers/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  return (
    <header className="bg-gray-800 text-white py-4 px-8 md:px-16 lg:px-24 xl:px-32">
      <nav className="flex items-center justify-between">
        <div className="flex items-center">
          <span className="text-xl font-bold">Jobs Portal</span>
        </div>
        <div className="md:flex hidden space-x-4">
          <li href="#" className="hover:text-gray-300 list-none">
            <NavLink to="/">Home</NavLink>
          </li>

          <li href="#" className="hover:text-gray-300 list-none">
            <NavLink to="/college">College</NavLink>
          </li>
          <li href="#" className="hover:text-gray-300 list-none">
            <NavLink to="/admission">Admission</NavLink>
          </li>
          <li href="#" className="hover:text-gray-300 list-none">
            <NavLink to="/myCollege">My College</NavLink>
          </li>
          <div>
            {user ? (
              <img
                className="rounded-full w-10"
                title={user?.displayName}
                src={`${user?.photoURL}`}
                alt=""
              />
            ) : (
              ""
            )}
          </div>
          {user ? (
            <>
              <button onClick={handleLogOut} className="btn btn-secondary">
                LogOut
              </button>
            </>
          ) : (
            <>
              <Link to="/login">Login</Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
