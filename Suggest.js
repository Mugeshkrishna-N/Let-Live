import React, { useState, useEffect } from 'react';
import './Suggest.css';

function Suggest() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    blog: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for your blog, we will update soon.');
    setFormData({ name: '', email: '', blog: '' });
  };

  useEffect(() => {
    document.body.classList.add('suggest-page');
    return () => {
      document.body.classList.remove('suggest-page');
    };
  }, []);

  return (
    <div className="suggest-container">
      <div className="suggest-content">
        <h1>Submit Your Blog</h1>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="blog">Your Blog</label>
            <textarea
              id="blog"
              name="blog"
              value={formData.blog}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default Suggest;
