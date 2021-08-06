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


            <Topics />


            <Newsletter />
            

            <Ads />


            <div className="widget rounded">
            <div className="widget-header text-center">
                <h3 className="widget-title">Tag Clouds</h3>
                <img src="images/wave.svg" className="wave" alt="wave" />
            </div>
            <div className="widget-content">
                <a href="#" className="tag">#Trending</a>
                <a href="#" className="tag">#Video</a>
                <a href="#" className="tag">#Featured</a>
                <a href="#" className="tag">#Gallery</a>
                <a href="#" className="tag">#Celebrities</a>
            </div>		
            </div>

            </div>

        </>
    );
}
 
export default Sidebar;