import Image from 'next/image'

const Tags = () => {
  return (  
    <>

      <div className="widget rounded">
        <div className="widget-header text-center">
          <h3 className="widget-title">Tag Clouds</h3>
          <Image
                src="images/wave.svg"
                alt="Popular"
                width={100}
                height={100}
              />
        </div>
        <div className="widget-content">
            <a href="#" className="tag">#Trending</a>
            <a href="#" className="tag">#Video</a>
            <a href="#" className="tag">#Featured</a>
            <a href="#" className="tag">#Gallery</a>
            <a href="#" className="tag">#Celebrities</a>
        </div>
      </div>

    </>

  );
}
 
export default Tags;