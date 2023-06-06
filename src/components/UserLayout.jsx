import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Menu } from '@headlessui/react'
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../redux/userSlice';
import { removePreferences } from "../redux/preferenceSlice";


const navigation = [
    { name: 'Home', to: '/renter' },
    { name: 'Roommate Match', to: '/roommateMatchQuestion' },
    { name: 'Room Matching', to: '/renterHomePage' },
    { name: 'Chat', to: '/chat1' },
]

const selectUser = (state) => state.auth.user;

export default function UserLayout() {
    const dispatch = useDispatch();
    const user = useSelector(selectUser);
    const navigate = useNavigate();
    const signout = (ev) => {
        ev.preventDefault();
        dispatch(logout());
        dispatch(removePreferences());
        navigate("/");
    }
    return (
        <>
            <div className="flex items-center h-16 text-black mb-8 shadow-lg py-10 px-5">
                <img src='/src/assets/cozy_match_icon.png' alt="cozyMatch_Icon" className="mr-1 h-12" />
                <h3 className="h-6 font-hairline"><span className="font-bold">Cozy</span>Match</h3>
                <div className="ml-12">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.to}
                            className={({ isActive }) => (
                                isActive
                                ? 'bg-gray-900 text-white'
                                : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                              'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                
                <Menu as="div" className="relative ml-auto flex items-center text-sm">
                    <div className="navbar--user">
                        <Menu.Button className="flex text-sm leading-5 items-center max-w-xs rounded-full">
                            <img className="w-12 h-12 rounded-full" src={user.imageUrl} alt="" />
                        </Menu.Button>
                    </div>
                    <Menu.Items className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                              <a
                                href="#"
                                onClick={(ev) => signout(ev)}
                                className={'block px-4 py-2 text-sm text-gray-700'}
                              >
                                Sign Out
                              </a>
                        </Menu.Item>
                    </Menu.Items>
                    <div className="flex flex-col pl-2">
                        <div>{user.name}</div>
                        <div className="text-xs text-sky-600">{user.userType}</div>
                    </div>
                </Menu>
            </div>
            <Outlet />
        </>
    )
}