import Image from 'next/image'

const Ads = () => {
  return (  
    <>

      <div className="widget no-container rounded text-md-center">
        <span className="ads-title">- Sponsored Ad -</span>
        <a href="#" className="widget-ads">
          <Image
            src="images/ads/ad-360.png"
            alt="Ads"
            width={100}
            height={100}
          />
        </a>
        </div>
    </>

  );
}
 
export default Ads;