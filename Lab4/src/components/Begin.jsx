import beginData from "../mockData/beginData";


export const CreateDescriptionTemplate = ({text}) => {
    const  {title,description}  = text;
    
    return (
    <div className="begin__left">
    <p className="text_1">{title}</p>
    <p className="text_2">{description}</p>
    </div>
    );
  };


  export const CreateButtonTemplate = ({ buttonData }) => {
    const  {title,href}  = buttonData;
    return (
    <div className="start_button">
    <a href={href}><button className="text">{title}</button></a>
    </div>
    );
  };
  
 

const Begin = () => {
  const { text,buttonData} = beginData;


  return (
    <>
    <div className="begin_colon">
    <CreateDescriptionTemplate text={text} />
    <div className="begin__right">
    <CreateButtonTemplate buttonData={buttonData}/>
    </div>
    </div>
    </>
  );
};


  export default Begin;