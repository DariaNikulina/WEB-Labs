import footerData from "../mockData/footerData";


export const CreateInputTemplate = ({elements}) => {
    const {classname, title, links } = elements;
  
    return (
        
        <div className={classname}>
            <p className={classname + "_1"}>
                {title}
            </p>
            <CreateLinksTemplate links={links}/>
            
        </div>
       )
    };

    export const CreateLinkTemplate = ({link})=> {
        const {title,href,classname} = link;
        return (
            <p className={classname + "_2"}>
                <a href={href}> {title}</a>
            </p>
        )
        ;
      };

    export const CreateLinksTemplate= ({links}) => {
        return links.map((link, index) => (
            
            <CreateLinkTemplate key = {index} link={link} />
            
          ));
    };

const Footer = () => {
  const { one,two,three,four,text, buttonData} = footerData;
 const {title} = text;
 const {calling,href} = buttonData;
  return (
    <>
    <h1 className="footer_end">
        {title}
    </h1>
    <div className="footer_button"><a href={href} className="footer_button_text"><button>{calling}</button></a>
    </div>
    <div className="colonki">
    <CreateInputTemplate elements={one} />
    <CreateInputTemplate elements={two} />
    <CreateInputTemplate elements={three} />
    <CreateInputTemplate elements={four} />
    </div>
    </>
  );
};


  export default Footer;