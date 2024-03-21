import blogTextData from "../mockData/blogTextData";


const BlogText = () => {
  const { text} = blogTextData;
  const {title}  = text;

  return (
    <>
    <div className="blog__left">
    <h1 className="text_blog__left">{title}</h1>
    </div>
      <div className="blog__right">
      </div>
    </>
  );
};


  export default BlogText;