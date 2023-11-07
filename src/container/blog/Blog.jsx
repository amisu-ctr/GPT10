import "./blog.css";
import {blog01, blog02, blog03, blog04, blog05} from './imports'

//This is a short cut for Article from  ../../components/article/Article
import { Article } from "../../components";

function Blog() {
  return (
    <div className="gpt3__blog section__paddding" id="blog">
      <div className="gpt3__blog-heading">
        <h1 className="gradient__text">
          A lot is happening, We are blogging about it
        </h1>
      </div>
      <div className="gpt3__blog-container">
        <div className="gpt3__blog-container_groupA">
          <Article />
        </div>
        <div className="gpt3__blog-container_groupB">
          <Article />
          <Article />
          <Article />
          <Article />
        </div>
      </div>
    </div>
  );
}

export default Blog;
