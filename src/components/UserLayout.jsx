import { NavLink, Outlet } from "react-router-dom";
import { Menu } from '@headlessui/react'

const navigation = [
    { name: 'Home', to: '/user' },
    { name: 'Roommate Matching', to: '/roommateMatch' },
    { name: 'Room Matching', to: '/renterHomePage' },
]

const user = {
    name: 'Gray Young',
    userType: 'Renter',
    email: 'gray_Young@example.com',
    imageUrl:
        'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
}

const logout = (ev) => {
    ev.preventDefault();
    console.log("logout");
}


export default function UserLayout() {
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
                                onClick={(ev) => logout(ev)}
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