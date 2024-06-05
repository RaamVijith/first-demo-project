import React from 'react';
import Link from 'next/link';

const Category = ({PopularCategoryData}) => {
  return (
    <>
      <section className='category-area pt-100 pb-0 bg-f5f5f5'>
        <div className='container'>
          <div className='section-title'>
            <h2>Popular Categories</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis
              ipsum suspendisse ultrices gravida. Risus commodo viverra.
            </p>
          </div>

          <div className='row'>
            <div className='col-lg-6 col-md-12'>
              <div className='category-image text-center'>
                <img src='/images/boy-girl2.png' alt='image' />
              </div>
            </div>

            <div className='col-lg-6 col-md-12'>
              <div className='category-item-list'>
                <div className='row'>


                {Array.isArray(PopularCategoryData.data) ? (
                  PopularCategoryData.data.map((popular_category, index) => (

                    <div className='col-lg-6 col-sm-6 col-md-6' key={index}>
                      <div className='single-category-item'>
                        <div className='row m-0'>
                          <div className='col-lg-4 col-md-4 p-0'>
                            <div className='image bg-img1'>
                              {/* <img
                                src={popular_category.cat_image}
                                alt={popular_category.cat_name}
                              /> */}
                              <img
                                src='/images/category/category1.jpg'
                                alt='image'
                              />
                              <i className='flaticon-cooking'></i>
                              {/* <img src={popular_category.cat_icon} alt={popular_category.cat_name} className="default-image"/> */}
                            </div>
                          </div>

                          <div className='col-lg-8 col-md-8 p-0'>
                            <div className='content'>
                              <h3>
                                <Link href='/categories'>{popular_category.cat_name}</Link>
                              </h3>
                              <span>{popular_category.businessCount} Places</span>
                            </div>
                          </div>
                        </div>
                        <Link href='/categories'>
                          <a className='link-btn'></a>
                        </Link>
                      </div>
                    </div>

                  ))
                  ) : (
                    <p>No category data available.</p>
                  )}

                  {/* <div className='col-lg-6 col-sm-6 col-md-6'>
                    <div className='single-category-item'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='image bg-img2'>
                            <img
                              src='/images/category/category2.jpg'
                              alt='image'
                            />
                            <i className='flaticon-hotel'></i>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='content'>
                            <h3>
                              <a href='#'>Hotel</a>
                            </h3>
                            <span>28 Places</span>
                          </div>
                        </div>
                      </div>
                      <Link href='/categories'>
                        <a className='link-btn'></a>
                      </Link>
                    </div>
                  </div>

                  <div className='col-lg-6 col-sm-6 col-md-6'>
                    <div className='single-category-item'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='image bg-img3'>
                            <img
                              src='/images/category/category3.jpg'
                              alt='image'
                            />
                            <i className='flaticon-shopping-bags'></i>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='content'>
                            <h3>
                              <a href='#'>Shopping</a>
                            </h3>
                            <span>20 Places</span>
                          </div>
                        </div>
                      </div>

                      <Link href='/categories'>
                        <a className='link-btn'></a>
                      </Link>
                    </div>
                  </div>

                  <div className='col-lg-6 col-sm-6 col-md-6'>
                    <div className='single-category-item'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='image bg-img4'>
                            <img
                              src='/images/category/category4.jpg'
                              alt='image'
                            />
                            <i className='flaticon-cleansing'></i>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='content'>
                            <h3>
                              <a href='#'>Beauty & Spa</a>
                            </h3>
                            <span>05 Places</span>
                          </div>
                        </div>
                      </div>

                      <Link href='/categories'>
                        <a className='link-btn'></a>
                      </Link>
                    </div>
                  </div>

                  <div className='col-lg-6 col-sm-6 col-md-6'>
                    <div className='single-category-item'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='image bg-img5'>
                            <img
                              src='/images/category/category5.jpg'
                              alt='image'
                            />
                            <i className='flaticon-heart-1'></i>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='content'>
                            <h3>
                              <a href='#'>Health Care</a>
                            </h3>
                            <span>11 Places</span>
                          </div>
                        </div>
                      </div>

                      <Link href='/categories'>
                        <a className='link-btn'></a>
                      </Link>
                    </div>
                  </div>

                  <div className='col-lg-6 col-sm-6 col-md-6'>
                    <div className='single-category-item'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='image bg-img6'>
                            <img
                              src='/images/category/category6.jpg'
                              alt='image'
                            />
                            <i className='flaticon-exercise'></i>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='content'>
                            <h3>
                              <a href='#'>Fitness</a>
                            </h3>
                            <span>20 Places</span>
                          </div>
                        </div>
                      </div>

                      <Link href='/categories'>
                        <a className='link-btn'></a>
                      </Link>
                    </div>
                  </div> */}



                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Category;
