import Topics from '../components/Topics';
import Ads from '../components/Ads';
import Tags from '../components/Tags';
import Bio from '../components/Bio';
import Popular from '../components/Popular';


const Sidebar = () => {
    return (  
        <>

            <div className="sidebar">

                        
            <Bio />

            <Popular />





            <Topics />


            <div className="widget rounded">
            <div className="widget-header text-center">
                <h3 className="widget-title">Newsletter</h3>
                <img src="images/wave.svg" className="wave" alt="wave" />
            </div>
            <div className="widget-content">
                <span className="newsletter-headline text-center mb-3">Join 70,000 subscribers!</span>
                <form>
                <div className="mb-2">
                    <input className="form-control w-100 text-center" placeholder="Email address…" type="email" />
                </div>
                <button className="btn btn-default btn-full" type="submit">Sign Up</button>
                </form>
                <span className="newsletter-privacy text-center mt-3">By signing up, you agree to our <a href="#">Privacy Policy</a></span>
            </div>		
            </div>


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