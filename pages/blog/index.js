import fs from 'fs';
import BlogPreview from 'components/blogPreview';
import matter from 'gray-matter';

export async function getStaticProps() {
  const fileNames = fs.readdirSync('resources/content/blog');
  var filemetadata = [];
  for (const index in fileNames) {
    const content = await import(`../../resources/content/blog/${fileNames[index]}`);
    const data = matter(content.default);
    data.data.filename = fileNames[index].slice(0, -3);
    filemetadata.push(data.data);
  }

  return {
    props: {
      arr: filemetadata
    }
  };
}

export default function Index(props) {
  return (
    <div className="pt-32">
      <h1 className="text-gray-100 font-bold text-3xl text-center">
        <span className="text-transparent text-4xl">Blog</span>
      </h1>
      <div className="grid grid-cols-3 gap-4">
        {props.arr.map(function (blog, index) {
          return (
            <BlogPreview
              key={index}
              name={blog.filename}
              filename={blog.filename}
              imageSrc={blog.author ? 'images/authors/' + blog.author + '.png' : ''}
              shortDesc={blog.description}
              image={blog.image}
            />
          );
        })}
      </div>
    </div>
  );
}
