import { Link } from 'react-router-dom'

const Nav = () => {
    return (
        <>
            
           <div className="Nav">
                <Link className='NavItem' to="/index">Accueil</Link>
                <p className='NavItem'>-TRELOSE-</p>
                <Link className='NavItem' to="/todo">TODO</Link>
           </div>
        </>
    )
}

export default Nav