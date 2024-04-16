import React from 'react'

function ArticleComponent({ title, author, date, children }) {
    return (
        <article className="max-w-4xl mx-auto my-8 px-4">
          <h1 className="text-3xl font-bold mb-4">{title}</h1>
          <div className="flex justify-between text-gray-600 text-sm mb-4">
            <p>{author}</p>
            <p>{date}</p>
          </div>
          <div className="prose">{children}</div>
        </article>
      );
}

export default ArticleComponent
