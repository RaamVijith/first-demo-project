import React from 'react';
import Link from 'next/link';

const Category = ({ titleOne, titleTwo, categoryData, showMoreCategories }) => {
  return (
    <>
      <section className='category-area pt-100 pb-70'>
        <div className='container'>
          {titleOne ? (
            <div className='section-title'>
              <h2>Popular Categories</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
                ipsum suspendisse ultrices gravida. Risus commodo viverra.
              </p>
            </div>
          ) : titleTwo ? (
            <div className='section-title text-left'>
              <h2>Explore by Category</h2>
              <a href='#' className='link-btn'>
                Show All <i className='flaticon-right-chevron'></i>
              </a>
            </div>
          ) : (
            ''
          )}

          <div className='row'>
          {Array.isArray(categoryData.data) ? (
              categoryData.data.map((category, index) => (
            
                <div className='col-lg-2 col-sm-6 col-md-4 mb-4' key={index}>
                  <div className='single-category-box'>
                    <div className='icon'>
                      {/* <i className='flaticon-cooking'></i> */}
                      <img src={category.cat_icon} alt={category.cat_name} className="default-image"/>
                      <img src={category.cat_icon_hover} alt={category.cat_name} className="hover-image"/>
                    </div>
                    <h3>{category.cat_name}</h3>
                    <span>{category.businessCount} Places</span>
                    <Link href='/listings/?title=&location=&category=Restaurants'>
                      <a className='link-btn'></a>
                    </Link>
                  </div>
                </div>
          ))
          ) : (
            <p>No category data available.</p>
          )}
          

            {showMoreCategories ? (
              <div className='col-lg-2 col-sm-6 col-md-4 mb-4'>
                <div className='single-category-box more-categories'>
                  <div className='icon'>
                    <i className='flaticon-more-1'></i>
                  </div>
                  <h3>More Categories</h3>
                  <Link href='/categories'>
                    <a className='link-btn'></a>
                  </Link>
                </div>
              </div> 
            ) : (
              ''
            )}


          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
