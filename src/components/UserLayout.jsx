import { NavLink, Outlet } from "react-router-dom";
import { Menu } from '@headlessui/react'

const navigation = [
    { name: 'Home', to: '/user' },
    { name: 'Roommate Matching', to: '/roommateMatch' },
    { name: 'Room Matching', to: '/roomMatch' },
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
            <div className="navbar">
                <img src='/src/assets/cozy_match_icon.png' alt="cozyMatch_Icon" className="navbar--icon" />
                <h3 className="navbar--projectName"><span className="font--bold">Cozy</span>Match</h3>
                <div className="navbar--navlink">
                    {navigation.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.to}
                            className={({ isActive }) => (
                                isActive ? 'active' : 'pending'
                            )}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                <Menu as="div" className="navbar--menu">
                    <div className="navbar--user">
                        <Menu.Button className="navbar--menu--button">
                            <img className="navbar--profile--pic" src={user.imageUrl} alt="" />
                        </Menu.Button>
                    </div>
                    <Menu.Items className="navbar--profile--pic--rounded">
                        <Menu.Item>
                            <a
                                href="#"
                                onClick={(ev) => logout(ev)}
                                className={'profile--picture--block'}
                            >
                                Sign Out
                            </a>
                        </Menu.Item>
                    </Menu.Items>
                    <div className="user--profile--info">
                        <div>{user.name}</div>
                        <div className="user--profile--type">{user.userType}</div>
                    </div>
                </Menu>
            </div>
            <Outlet />
        </>
    )
}