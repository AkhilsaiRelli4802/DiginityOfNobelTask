import React from 'react'
import Footerpage from './footerSection/Footerpage'
import NewsAndBlogs from './News&&Blogs/NewsAndBlogs'
import Testimonials1 from './Testimonials/Testimonials1'
const Naveen = () => {
  return (
    <div className='pages-container'>
      <div><Testimonials1/></div>
      <div className='appnews'> <NewsAndBlogs/></div>
      <div className='appfooter'><Footerpage/></div>
      </div>
  )
}

export default Naveen