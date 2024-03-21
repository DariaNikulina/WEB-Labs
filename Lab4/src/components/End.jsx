import endData from "../mockData/endData";
 

const End = () => {
  const { endText} = endData;
    const {text} = endText;

  return (
    <>
     <p className="end_text">{text}</p>
    </>
  );
};


  export default End;