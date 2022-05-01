import Topics from '../components/Topics';
import Ads from '../components/Ads';
import Tags from '../components/Tags';
import Bio from '../components/Bio';
import Popular from '../components/Popular';
import Newsletter from './Newsletter';


const Sidebar = () => {
    return (  
        <>

            <div className="sidebar">

                        
            <Bio />

            <Popular />


            {/*<Topics />*/}


            <Newsletter />
            

            <Ads />

            {/*<Tags />*/}


        </div>

        </>
    );
}
 
export default Sidebar;