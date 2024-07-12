import React, { useState } from "react";
import Link from "next/link";
import ListingPagination from "./ListingPagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { useRouter } from "next/router";

const ListingArea = ({ listings, totalPages }) => {

  const [ sortBy , setSortBy ] = useState('');
  
  const router = useRouter();

  const submitSortingHandler = (value) => {
    
    const title = router.query.title ? router.query.title : "";
    const location = router.query.location ? router.query.location : "";
    const category = router.query.category ? router.query.category : "";
    
    if (value) {
      router.push(
        `/listings/?title=${title}&location=${location}&category=${category}&sortBy=${value}`
      );
    } else {
      router.push('/');
    }

  };

  return (
    <>
      <section className="listings-area ptb-100 bg-f9f9f9">
        <div className="container">
          <div className="listings-grid-sorting row align-items-center">
            <div className="col-lg-5 col-md-6 result-count">
              <p>
                We found <span className="count">{listings.length}</span>{" "}
                listings available for you
              </p>
            </div>

            <div className="col-lg-7 col-md-6 ordering">
              <div className="d-flex justify-content-end">
                <div className="select-box">
                  <label>Sort By:</label>
                  <select className="blog-select" onChange={(e) => submitSortingHandler(e.target.value)}>
                    {/* <option>Default</option> */}
                    <option value="recommended" >Recommended</option>
                    <option value="popularity" >Popularity</option>
                    <option value="latest" >Latest</option>
                    <option value="nameAsc" >Business Name : A-Z</option>
                    <option value="nameDesc" >Business Name : Z-A</option>
                  </select>
                </div>

                <div className="select-box">
                  <label>Distance:</label>
                  <select className="blog-select">
                    <option>Driving (5 mi.)</option>
                    <option>Walking (1 mi.)</option>
                    <option>Biking (2 mi.)</option>
                    <option>Within 4 blocks</option>
                    <option>Bicycle (6 mi.)</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            {listings &&
              listings.map(
                (list) =>
                  list.status === "active" && (
                    <div className="col-xl-4 col-lg-6 col-md-6 mb-4" key={list.id}>
                      <div className="single-listings-box">
                        <div className="listings-image">

                        <div className="single-image">
													<img
														src={list.gallery.thumbnail}
														alt="image"
														/>
													<Link href={`/listing/${list.slug}`} >
														<a className="link-btn"></a>
													</Link>
												</div>

													{/* <Swiper 
														loop={true}
														navigation={true} 
														modules={[Navigation]} 
														className="listings-image-slides"
													>
                            {list.gallery.length > 0 &&
                              list.gallery.map((gal, i) => (
																<SwiperSlide key={i}>
																	<div className="single-image">
																		<img
																			src={gal.replace(/^http:\/\//i, "https://")}                                      
																			alt="image"
																		/>
																		<Link href={`/listing/${list.slug}`}>
																			<a className="link-btn"></a>
																		</Link>
																	</div>
																</SwiperSlide>
                              ))}
                          </Swiper> */}

                          {/* icons (setting, Bookmark) */}
                          {/* <a href="#" className="bookmark-save">
                            <i className="flaticon-heart"></i>
                          </a>
                          <a href="#" className="category">
                            <i className="flaticon-cooking"></i>
                          </a> */}
                        </div>

                        <div className="listings-content">
                          {/* <div className="author">
                            <div className="d-flex align-items-center">
                              <img src="/images/user4.jpg" alt="image" />
                              <span>Admin</span>
                            </div>
                          </div> */}
                          <ul className="listings-meta">
                            <li>
                              <a href="#">
                                <i className="flaticon-hotel"></i> {list.category.name}
                                {/* <img className="flaticon-hotel" src={list.category.icon} /> */}
                              </a>
                            </li>
                            <li>
                              <a href="#">
                                <i className="flaticon-pin"></i> {list.address}
                              </a>
                            </li>
                          </ul>
                          <h3>
                            <Link href={`/listing/${list.slug}`}>
                              <a>{list.listingTitle}</a>
                            </Link>
                          </h3>

                          {/* <span className="status">
                            <i className="flaticon-save"></i> 
                            {list.open_status}
                          </span> */}

                          <div className="d-flex align-items-center justify-content-between">
                            <div className="rating">
                              <i className={`bx ${list.ratings > 0 ? 'bxs-star' : 'bx-star' }`}></i>
                              <i className={`bx ${list.ratings > 2 ? 'bxs-star' : 'bx-star' }`}></i>
                              <i className={`bx ${list.ratings > 4 ? 'bxs-star' : 'bx-star' }`}></i>
                              <i className={`bx ${list.ratings > 6 ? 'bxs-star' : 'bx-star' }`}></i>
                              <i className={`bx ${list.ratings > 8 ? 'bxs-star' : 'bx-star' }`}></i>
                              {/* <span className="count">(10)</span> */}
                            </div>
                            {/* <div className="price">
                              Start From <span>${list.pricing}</span>
                            </div> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  )
              )}

            <div className="col-xl-12 col-lg-12 col-md-12">
              {listings.length > 0 && (
                <ListingPagination totalPages={totalPages} />
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ListingArea;
