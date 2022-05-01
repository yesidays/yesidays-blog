import Image from 'next/image'

const Ads = () => {
  return (  
    <>

      <div className="widget no-container rounded text-md-center">
        <span className="ads-title"></span>
        <a href="#" className="widget-ads">
        {/* Google Ads */}
        <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        <ins className="adsbygoogle"
          style={{display: 'block'}}
          data-ad-client="ca-pub-1435995620378131"
          data-ad-slot="9654868246"
          data-ad-format="auto"
          data-full-width-responsive="true"></ins>
        <script>
          (adsbygoogle = window.adsbygoogle || []).push({});
        </script>


        </a>
        </div>
    </>

  );
}
 
export default Ads;