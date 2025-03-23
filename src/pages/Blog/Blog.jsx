import { useParams } from "react-router-dom";
import BlogContent from "./BlogContent/BlogContent";
import BlogFooter from "./BlogLayout/BlogFooter/BlogFooter";
import BlogHeader from "./BlogLayout/BlogHeader/BlogHeader";

function Blog() {
  const { content } = useParams();
  return (
    <>
      <BlogHeader />

      <BlogContent content={content} />

      <BlogFooter />
    </>
  );
}

export default Blog;
