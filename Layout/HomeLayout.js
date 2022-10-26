import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeLayout = ({children}) => {
    return ( <div>
<Header />
{children}
<Footer />
    </div> );
}
 
export default HomeLayout;