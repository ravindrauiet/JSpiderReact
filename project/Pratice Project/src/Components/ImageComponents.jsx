import React , {useState , useEffect} from 'react';

function ImageComponents(props) {
    const {src, placeholder,lazy,alt} = props;

    const [imgSrc,setImageSrc] = useState(placeholder);

    useEffect(() => {
        let image = new Image();
        image.src = src;
        image.onload = () => setImageSrc(src);
    },[src])
  return (
    <div>
      <img 
        src = {lazy ? placeholder : imgSrc}
        data-src = {lazy ? src : ''}
        alt={alt? alt :"image"}
        style={{ width: '20%', height: '30%' }}
      />
    </div>
  )
}

export default ImageComponents
