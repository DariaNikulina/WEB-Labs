import blogData from "../mockData/blogData";

import oneSvg from "../assets/img/brands/one.svg";
import twoSvg from "../assets/img/brands/two.svg";
import threeSvg from "../assets/img/brands/three.svg";
import fourSvg from "../assets/img/brands/four.svg";
import fiveSvg from "../assets/img/brands/five.svg";


export const Image = ({ alt }) => {
    
    if (alt === "one")
      return <img src={oneSvg} alt={alt} />;
  
      if (alt === "two")
      return <img src={twoSvg} alt={alt} />;

      if (alt === "three")
      return <img src={threeSvg} alt={alt} />;

      if (alt === "four")
      return <img src={fourSvg} alt={alt} />;
      if (alt === "five")
      return <img src={fiveSvg} alt={alt} />;
  
  };

export const CreateInputTemplate = ({elements}) => {
    const {img,data, title, linkTitle, href, isPrimary, } = elements;
    const {alt} = img;
    switch (isPrimary) {
        case true:
            return (
        
        <div className="box_1">
          <Image alt={alt}/>
          <div className="one_1">
              <p className="text_start_1">
              {data}
              </p>
              <p className="text_1">
              {title}
              </p>
              <a href={href}>
              {linkTitle}
              </a>
          </div>
        </div>
       )
       case false:
        return ``;
  
        default:
          return ``;
      }
    };
 
  export const CreateInputTemplate2 = ({elements}) => {
    const {img,data, title, linkTitle, href, isPrimary, } = elements;
    const {alt} = img;
    switch (isPrimary) {
        case false:
            return (
            <div className="box_2">
              <Image alt={alt}/>
              <div className="one_2">
                  <p className="text_start_2">
                  {data}
                  </p>
                  <p className="text_2">
                  {title}
                  </p>
                  <a href={href}>
                  {linkTitle}
                  </a>
              </div>
            </div>
           );
           case true:
        return ``;
  
        default:
          return ``;
      }
    };
 

export const CreateMapTemplate= ({elements}) => {
    return elements.map((element, index) => (
        <CreateInputTemplate key={index} elements={element} />
      ));
};

export const CreateMapTemplate2= ({elements}) => {
    return elements.map((element, index) => (
        <CreateInputTemplate2 key={index} elements={element} />
      ));
};

const Blog = () => {
  const { elements} = blogData;


  return (
    <>
    <div className="blog__left">
    <CreateMapTemplate elements={elements} />
    </div>
    <div className="blog__middle">
    <CreateMapTemplate2 elements={elements}/>
    </div>
    </>
  );
};


  export default Blog;