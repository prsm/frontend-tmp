import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown'

function BlogTemplate({ content, data }) {

  const markdowndata = data;

  return (
    <div className="markdown container mx-auto ">
      <h1>{markdowndata.title}</h1>
      <article className=" prose prose-sm sm:prose lg:prose-lg xl:prose-xl ">
      <ReactMarkdown
        children={content}
      />
      </article>
    </div>
  );
}

BlogTemplate.getInitialProps = async (context) => {
  const { slug } = context.query

  const content = await import(`../../resources/content/${slug}.md`)

  const data = matter(content.default)

  return { ...data }

  return { slug }
}

export default BlogTemplate