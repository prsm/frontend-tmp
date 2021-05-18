import React from 'react'
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown'

function BlogTemplate({ content, data }) {

  const markdowndata = data;

  return (
    <div className="text-center">
      <h1>{markdowndata.title}</h1>
      <ReactMarkdown children={content}/>
    </div>
  )
}

BlogTemplate.getInitialProps = async (context) => {
  const { slug } = context.query

  const content = await import(`../../content/${slug}.md`)

  const data = matter(content.default)

  return { ...data }

  return { slug }
}

export default BlogTemplate