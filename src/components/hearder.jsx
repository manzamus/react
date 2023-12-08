import umwezi from "../assets/umwezi.jpg";
import {Link} from "react-router-dom";

function hearder(){

    return(
        <>
        <nav className="nav">
            <div className="umwezi">
                <img src={umwezi} alt="umwezi" />
                 
            </div>
            <ul className="nav-links">
                    <li>
                        <a href="tel:+250785627690" className='nav-links_link'>Tel:+250787277392</a>
                    </li>
                    <li>
                     <Link to="#" className='nav-links_link btn'>Sign-In</Link>
                    </li>

                </ul>

        </nav>
        <div className='category'>
                <ul className='category-links'>
                <li><a href="@" className='category-links--link'>Home</a></li>
                    <li><a href="@" className='category-links--link'>Ubuzima</a></li>
                    <li><a href="@" className='category-links--link'>Politike</a></li>
                    <li><a href="@" className='category-links--link'>Ubukungu</a></li>
                    <li><a href="@" className='category-links--link'>Uburezi</a></li>
                    <li><a href="@" className='category-links--link'>Iyobokamana</a></li>
                    <li><a href="@" className='category-links--link'>imikino</a></li>
                </ul>
            </div>
       
        </>
        
    )
}
export default hearder