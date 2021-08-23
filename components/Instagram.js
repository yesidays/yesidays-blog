import Image from 'next/image'

const Instagram = () => {
    return (  

        <>

<div className="instagram">
      <div className="container-xl">
        
        <a href="#" className="btn btn-default btn-instagram">@Yesidays on Instagram</a>
        
        <div className="instagram-feed d-flex flex-wrap">
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
              <Image
                src="images/insta/insta-1.jpg"
                alt="Instagram"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
            <Image
                src="images/insta/insta-1.jpg"
                alt="Instagram"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
            <Image
                src="images/insta/insta-1.jpg"
                alt="Instagram"
                width={100}
                height={100}
              />
            </a>
          </div>
          <div className="insta-item col-sm-2 col-6 col-md-2">
            <a href="#">
            <Image
                src="images/insta/insta-1.jpg"
                alt="Instagram"
                width={100}
                height={100}
              />
            </a>
          </div>
        </div>
      </div>
    </div>

        </>

    );
}
 
export default Instagram;