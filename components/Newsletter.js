const Newsletter = () => {
  return (  

    <>

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

    </>

  );
}
 
export default Newsletter;