import NavLink from "./NavLink";

const NavMenu = () => {

    const Links = [
        {label: 'Anon', path: '/'},
        {label: 'Auth', path: '/protected'},
        {label: 'Role', path: '/protected/role'},
        {label: 'Admin', path: '/admin/config'}
    ];

    return (
        <>
            {Links.map((link, i) => (
                <NavLink key={i} to={link.path}>{link.label}</NavLink>
            ))}
        </>
    );
};

export default NavMenu;
