import exceedingExpectationData from "../mockData/exceedingExpectationData";
import Logo from "../assets/img/brands/girl_with_glasses.svg";


export const LogoTemplate = ({ logoData }) => {
  const { alt } = logoData;

  return (
    <div className="exceeding_expectation__left">
    <img className="girl_with_glasses__img" src={Logo} alt={alt} />
    </div>
  );
};
export const CreateDescriptionTemplate = ({text}) => {
    const { pretitle,title,description, links } = text;
    const { href,calling } = links;
    return (
    <div className="right__container">
    <p className="container__content_1">
    {pretitle}
    </p>
    <h2 className="right__header">
    {title}
    </h2>
    <p className="container__content_2">
    {description}
    </p>
           <a href={href} className="right__cta">{calling}</a>
    </div>
    );
  };

  
  
const Exceeding = () => {
  const { girlWithGlasses,text} = exceedingExpectationData;


  return (
    <>
    <LogoTemplate logoData={girlWithGlasses} />
    <div className="exceeding_expectation__right">
    <CreateDescriptionTemplate text={text}/>
    </div>
    </>
  );
};



  export default Exceeding;