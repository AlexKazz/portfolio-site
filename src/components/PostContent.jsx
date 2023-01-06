import React, { useState, useEffect } from 'react';

import ReactMarkdown from 'react-markdown';

const PostContent = () => {
  const apiCalls = 'apiCalls.md';
  const expressServer = 'expressServer.md';
  const UILayout = 'UILayout.md';

  const [post1, setPost1] = useState('');
  const [post2, setPost2] = useState('');
  const [post3, setPost3] = useState('');

  useEffect(() => {
    import(`../posts/${apiCalls}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost1(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    import(`../posts/${expressServer}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost2(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  useEffect(() => {
    import(`../posts/${UILayout}`)
      .then((res) => {
        fetch(res.default)
          .then((res) => res.text())
          .then((res) => setPost3(res))
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  });

  return (
    <div className='bg-custom-cream-500'>
      <div className='flex flex-col justify-center mx-5 mt-3'>
        <section id='post1'>
          <div className='bg-white p-5 rounded-2xl mb-10'>
            <ReactMarkdown className='markdown'>{post1}</ReactMarkdown>
          </div>
        </section>
        <section id='post2'>
          <div className='bg-white p-5 rounded-2xl mb-10'>
            <ReactMarkdown className='markdown'>{post2}</ReactMarkdown>
          </div>
        </section>
        <section id='post3'>
          <div className='bg-white p-5 rounded-2xl mb-10'>
            <ReactMarkdown className='markdown'>{post3}</ReactMarkdown>
          </div>
        </section>
      </div>
    </div>
  );
};

export default PostContent;
