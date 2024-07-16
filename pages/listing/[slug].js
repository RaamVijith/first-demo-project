import React from 'react';
import axios from 'axios';
import Navbar from '../../components/_App/Navbar';
import baseUrl from '../../utils/baseUrl';
import Footer from '../../components/_App/Footer';
import StickyBox from "react-sticky-box";
import systemApiBaseUrl from "../../utils/usDirectoryLinks";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import Link from 'next/link';


const SingleListings = ({ user, listing, images }) => {
  return (
    <>
      <Navbar 
        userRole={user} 
      />

      <section className='listings-details-area pb-70'>
        <div className='listings-details-image'>
          <img src='/images/listings-details.jpg' alt='image' />

          <div className='container'>
            <div className='container'>
              <div className='listings-details-content'>
                <span className='meta'>
                  {/* <i className='flaticon-furniture-and-household'></i> */}
                   <img src={listing.category.icon} alt={listing.category.name} width={30} height={30}   />                   
              
                  .  { listing.category.name}
                </span>

                <h3>{listing.name}</h3>
               

                {/* <h2>${listing.pricing}</h2> */}

                <ul className='d-flex align-items-center'>
                  <li className='phone-number'>
                    <a href={`mailto:${listing.phone}`}>
                      <i className='bx bx-phone-call'></i> {listing.phone}
                    </a>
                  </li>

                  <li className='time'>
                    <i className='bx bx-time-five'></i>
                    <span>Currently Open</span>
                    {listing.openingTime}
                  </li>

                  <li className='location'>
                    <i className='bx bx-map'></i>
                    <span>Location</span>
                    {listing.address}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
 
        <div className='container'>
          <div className='row'>
            <div className='col-lg-8 col-md-12'>
              
              <div className='listings-details-desc'>
              <h3>{listing.name}</h3>
                <div 
                  className='listings_details_content'
                  dangerouslySetInnerHTML={{ __html: listing.description}} 
                />

                  {/* {listing.amenity.length > 0 && listing.amenity.map(
                    ( list, i ) => (
                      <ul className='amenities-list'>
                        <li>
                          <span>
                            <i className='bx bx-check'></i> Parking Street
                          </span>
                        </li>
                      </ul>
                    )
                  )
                    
                } */}


                {/* old Amenities */}
                {/* 
                <h3>Amenities</h3>
                <ul className='amenities-list'>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Parking Street
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Vegan Options
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Kids Activities Nearby
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Accepts Apple Pay
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Accepts Google Pay
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Wheelchair Accessible
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Takes Reservations
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Offers Takeout
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Bike Parking
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Good for Kids
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Accepts Cryptocurrency
                    </span>
                  </li>
                  <li>
                    <span>
                      <i className='bx bx-check'></i> Accepts Credit Cards
                    </span>
                  </li>
                </ul> */}


                  {/* Gallery part */}
                {/* <h3>Gallery</h3>
                <div id='gallery'>
                  <div className="row justify-content-center">
                    <div className="col-lg-4 col-md-6">
                      <div className='single-image-bpx'>
                        <img
                          src='/images/gallery/gallery1.jpg'
                          alt='image'
                        />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className='single-image-bpx'>
                        <img
                          src='/images/gallery/gallery2.jpg'
                          alt='image'
                        />
                      </div>
                    </div>

                    <div className="col-lg-4 col-md-6">
                      <div className='single-image-bpx'>
                        <img
                          src='/images/gallery/gallery3.jpg'
                          alt='image'
                        />
                      </div>
                    </div>
                  </div>
                </div> */}

                {/* pricing */}
                {/* <h3>Pricing</h3>
                <div id='pricing'>
                  <ul className='pricing-list'>
                    <li>
                      Pizza <span>$15</span>
                    </li>
                    <li>
                      Burger <span>$10</span>
                    </li>
                    <li>
                      Cool Drink <span>$12</span>
                    </li>
                    <li>
                      Fried Rice <span>$08</span>
                    </li>
                    <li>
                      Orange Juice <span>$05</span>
                    </li>
                  </ul>
                </div> */}

              {/* Review component */}
{/*               
                <h3>Review</h3>
                <div className='listings-review'>
                  <div className='rating d-flex align-items-center'>
                    <span className='bx bxs-star checked'></span>
                    <span className='bx bxs-star checked'></span>
                    <span className='bx bxs-star checked'></span>
                    <span className='bx bxs-star checked'></span>
                    <span className='bx bxs-star checked'></span>

                    <span className='overall-rating'>5.0</span>
                    <span className='rating-count'>(5 reviews)</span>
                  </div>

                  <div className='row'>
                    <div className='col-lg-6 col-md-6'>
                      <div className='row m-0'>
                        <div className='side'>
                          <div>Cleanliness</div>
                        </div>
                        <div className='middle'>
                          <div className='bar-container'>
                            <div className='bar-4'></div>
                          </div>
                        </div>
                        <div className='side right'>
                          <div>4.0</div>
                        </div>

                        <div className='side'>
                          <div>Accuracy</div>
                        </div>
                        <div className='middle'>
                          <div className='bar-container'>
                            <div className='bar-5'></div>
                          </div>
                        </div>
                        <div className='side right'>
                          <div>5.0</div>
                        </div>

                        <div className='side'>
                          <div>Location</div>
                        </div>
                        <div className='middle'>
                          <div className='bar-container'>
                            <div className='bar-5'></div>
                          </div>
                        </div>
                        <div className='side right'>
                          <div>5.0</div>
                        </div>
                      </div>
                    </div>

                    <div className='col-lg-6 col-md-6'>
                      <div className='row m-0'>
                        <div className='side'>
                          <div>Check-in</div>
                        </div>
                        <div className='middle'>
                          <div className='bar-container'>
                            <div className='bar-4'></div>
                          </div>
                        </div>
                        <div className='side right'>
                          <div>4.0</div>
                        </div>

                        <div className='side'>
                          <div>Communication</div>
                        </div>
                        <div className='middle'>
                          <div className='bar-container'>
                            <div className='bar-5'></div>
                          </div>
                        </div>
                        <div className='side right'>
                          <div>5.0</div>
                        </div>

                        <div className='side'>
                          <div>Value</div>
                        </div>
                        <div className='middle'>
                          <div className='bar-container'>
                            <div className='bar-5'></div>
                          </div>
                        </div>
                        <div className='side right'>
                          <div>5.0</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='write-a-review'>
                  <h4>Tell people what you think.</h4>
                  <p>
                    Help others by sharing your experience with this business.
                  </p>
                  <a href='#' className='default-btn'>
                    Write A Review
                  </a>
                </div>

                <div id='review'>
                  <div className='listings-review-comments'>
                    <div className='user-review'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='user'>
                            <div className='d-flex'>
                              <img src='/images/user1.jpg' alt='image' />
                              <div className='title'>
                                <h4>James Andy</h4>
                                <span>New York, USA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='comments'>
                            <div className='rating'>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo maecenas accumsan
                              lacus vel facilisis.
                            </p>
                            <div className='row m-0'>
                              <div className='col-lg-8 col-md-8 col-8 col-sm-8 p-0'>
                                <ul className='like-unlike'>
                                  <li>
                                    <a href='#'>Like</a>
                                  </li>
                                  <li>
                                    <a href='#'>Unlike</a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className='
                                col-lg-4 col-md-4 col-4 col-sm-4
                                p-0
                                text-right
                              '
                              >
                                <a href='#'>Comment</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='user-review'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='user'>
                            <div className='d-flex'>
                              <img src='/images/user2.jpg' alt='image' />
                              <div className='title'>
                                <h4>Sarah Taylor</h4>
                                <span>New York, USA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='comments'>
                            <div className='rating'>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo maecenas accumsan
                              lacus vel facilisis.
                            </p>
                            <div className='row m-0'>
                              <div className='col-lg-8 col-md-8 col-8 col-sm-8 p-0'>
                                <ul className='like-unlike'>
                                  <li>
                                    <a href='#'>Like</a>
                                  </li>
                                  <li>
                                    <a href='#'>Unlike</a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className='
                                col-lg-4 col-md-4 col-4 col-sm-4
                                p-0
                                text-right
                              '
                              >
                                <a href='#'>Comment</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className='user-review'>
                      <div className='row m-0'>
                        <div className='col-lg-4 col-md-4 p-0'>
                          <div className='user'>
                            <div className='d-flex'>
                              <img src='/images/user3.jpg' alt='image' />
                              <div className='title'>
                                <h4>Jason Smith</h4>
                                <span>New York, USA</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-8 col-md-8 p-0'>
                          <div className='comments'>
                            <div className='rating'>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                              <span className='bx bxs-star checked'></span>
                            </div>
                            <p>
                              Lorem ipsum dolor sit amet, consectetur adipiscing
                              elit, sed do eiusmod tempor incididunt ut labore
                              et dolore magna aliqua. Quis ipsum suspendisse
                              ultrices gravida. Risus commodo maecenas accumsan
                              lacus vel facilisis.
                            </p>
                            <div className='row m-0'>
                              <div className='col-lg-8 col-md-8 col-8 col-sm-8 p-0'>
                                <ul className='like-unlike'>
                                  <li>
                                    <a href='#'>Like</a>
                                  </li>
                                  <li>
                                    <a href='#'>Unlike</a>
                                  </li>
                                </ul>
                              </div>
                              <div
                                className='
                                col-lg-4 col-md-4 col-4 col-sm-4
                                p-0
                                text-right
                              '
                              >
                                <a href='#'>Comment</a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div id='add-review'>
                  <div className='review-form-wrapper'>
                    <h3>Add A Review</h3>
                    <p className='comment-notes'>
                      Your email address will not be published. Required fields
                      are marked <span>*</span>
                    </p>

                    <form>
                      <div className='row'>
                        <div className='col-lg-12 col-md-12'>
                          <div className='sub-ratings'>
                            <div className='row'>
                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Cleanliness</h4>
                                  <div className='cleanliness-rating'>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar5'
                                      name='cleanliness-rating'
                                      value='5'
                                    />
                                    <label htmlFor='cleanlinessStar5'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar4'
                                      name='cleanliness-rating'
                                      value='4'
                                    />
                                    <label htmlFor='cleanlinessStar4'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar3'
                                      name='cleanliness-rating'
                                      value='3'
                                    />
                                    <label htmlFor='cleanlinessStar3'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar2'
                                      name='cleanliness-rating'
                                      value='2'
                                    />
                                    <label htmlFor='cleanlinessStar2'></label>
                                    <input
                                      type='radio'
                                      id='cleanlinessStar1'
                                      name='cleanliness-rating'
                                      value='1'
                                    />
                                    <label htmlFor='cleanlinessStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Accuracy</h4>
                                  <div className='accuracy-rating'>
                                    <input
                                      type='radio'
                                      id='accuracyStar5'
                                      name='accuracy-rating'
                                      value='5'
                                    />
                                    <label htmlFor='accuracyStar5'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar4'
                                      name='accuracy-rating'
                                      value='4'
                                    />
                                    <label htmlFor='accuracyStar4'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar3'
                                      name='accuracy-rating'
                                      value='3'
                                    />
                                    <label htmlFor='accuracyStar3'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar2'
                                      name='accuracy-rating'
                                      value='2'
                                    />
                                    <label htmlFor='accuracyStar2'></label>
                                    <input
                                      type='radio'
                                      id='accuracyStar1'
                                      name='accuracy-rating'
                                      value='1'
                                    />
                                    <label htmlFor='accuracyStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Location</h4>
                                  <div className='location-rating'>
                                    <input
                                      type='radio'
                                      id='locationStar5'
                                      name='location-rating'
                                      value='5'
                                    />
                                    <label htmlFor='locationStar5'></label>
                                    <input
                                      type='radio'
                                      id='locationStar4'
                                      name='location-rating'
                                      value='4'
                                    />
                                    <label htmlFor='locationStar4'></label>
                                    <input
                                      type='radio'
                                      id='locationStar3'
                                      name='location-rating'
                                      value='3'
                                    />
                                    <label htmlFor='locationStar3'></label>
                                    <input
                                      type='radio'
                                      id='locationStar2'
                                      name='location-rating'
                                      value='2'
                                    />
                                    <label htmlFor='locationStar2'></label>
                                    <input
                                      type='radio'
                                      id='locationStar1'
                                      name='location-rating'
                                      value='1'
                                    />
                                    <label htmlFor='locationStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Check-in</h4>
                                  <div className='checkin-rating'>
                                    <input
                                      type='radio'
                                      id='checkInStar5'
                                      name='rating'
                                      value='5'
                                    />
                                    <label htmlFor='checkInStar5'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar4'
                                      name='rating'
                                      value='4'
                                    />
                                    <label htmlFor='checkInStar4'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar3'
                                      name='rating'
                                      value='3'
                                    />
                                    <label htmlFor='checkInStar3'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar2'
                                      name='rating'
                                      value='2'
                                    />
                                    <label htmlFor='checkInStar2'></label>
                                    <input
                                      type='radio'
                                      id='checkInStar1'
                                      name='rating'
                                      value='1'
                                    />
                                    <label htmlFor='checkInStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Communication</h4>
                                  <div className='communication-rating'>
                                    <input
                                      type='radio'
                                      id='communicationStar5'
                                      name='communication-rating'
                                      value='5'
                                    />
                                    <label htmlFor='communicationStar5'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar4'
                                      name='communication-rating'
                                      value='4'
                                    />
                                    <label htmlFor='communicationStar4'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar3'
                                      name='communication-rating'
                                      value='3'
                                    />
                                    <label htmlFor='communicationStar3'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar2'
                                      name='communication-rating'
                                      value='2'
                                    />
                                    <label htmlFor='communicationStar2'></label>
                                    <input
                                      type='radio'
                                      id='communicationStar1'
                                      name='communication-rating'
                                      value='1'
                                    />
                                    <label htmlFor='communicationStar1'></label>
                                  </div>
                                </div>
                              </div>

                              <div className='col-lg-4 col-md-4 col-6 col-sm-6'>
                                <div className='add-sub-rating'>
                                  <h4>Value</h4>
                                  <div className='value-rating'>
                                    <input
                                      type='radio'
                                      id='valueStar5'
                                      name='value-rating'
                                      value='5'
                                    />
                                    <label htmlFor='valueStar5'></label>
                                    <input
                                      type='radio'
                                      id='valueStar4'
                                      name='value-rating'
                                      value='4'
                                    />
                                    <label htmlFor='valueStar4'></label>
                                    <input
                                      type='radio'
                                      id='valueStar3'
                                      name='value-rating'
                                      value='3'
                                    />
                                    <label htmlFor='valueStar3'></label>
                                    <input
                                      type='radio'
                                      id='valueStar2'
                                      name='value-rating'
                                      value='2'
                                    />
                                    <label htmlFor='valueStar2'></label>
                                    <input
                                      type='radio'
                                      id='valueStar1'
                                      name='value-rating'
                                      value='1'
                                    />
                                    <label htmlFor='valueStar1'></label>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className='col-lg-6 col-md-6'>
                          <div className='form-group'>
                            <input
                              type='text'
                              className='form-control'
                              placeholder='Name *'
                            />
                          </div>
                        </div>

                        <div className='col-lg-6 col-md-6'>
                          <div className='form-group'>
                            <input
                              type='email'
                              className='form-control'
                              placeholder='Email *'
                            />
                          </div>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                          <div className='form-group'>
                            <textarea
                              placeholder='Your review'
                              className='form-control'
                              cols='30'
                              rows='6'
                            ></textarea>
                          </div>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                          <p className='comment-form-cookies-consent'>
                            <input type='checkbox' id='test1' />
                            <label htmlFor='test1'>
                              Save my name, email, and website in this browser
                              for the next time I comment.
                            </label>
                          </p>
                        </div>

                        <div className='col-lg-12 col-md-12'>
                          <button type='submit'>Submit</button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div> */}

                <h3>Other Nearby Services</h3>
                <div className='row'>
                  <div className='col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <img src='/images/listings/listings1.jpg' alt='image' />
                        <a href='#' className='link-btn'></a>
                        {/* <a href='#' className='bookmark-save'>
                          <i className='flaticon-heart'></i>
                        </a>
                        <a href='#' className='category'>
                          <i className='flaticon-cooking'></i>
                        </a> */}
                      </div>

                      <div className='listings-content'>
                        {/* <div className='author'>
                          <div className='d-flex align-items-center'>
                            <img src='/images/user1.jpg' alt='image' />
                            <span>Taylor</span>
                          </div>
                        </div> */}
                        <ul className='listings-meta'>
                          <li>
                            <a href='#'>
                              <i className='flaticon-furniture-and-household'></i>
                              Restaurant
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> New York, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <a href='#'>Chipotle Mexican Grill</a>
                        </h3>
                        <span className='status'>
                          <i className='flaticon-save'></i> Open Now
                        </span>
                        <div
                          className='
                          d-flex
                          align-items-center
                          justify-content-between
                        '
                        >
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <span className='count'>(45)</span>
                          </div>
                          <div className='price'>
                            Start From <span>$150</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className='col-lg-6 col-md-6'>
                    <div className='single-listings-box'>
                      <div className='listings-image'>
                        <Swiper 
                          loop={true}
                          navigation={true} 
                          modules={[Navigation]} 
                          className="listings-image-slides"
                        >
                          <SwiperSlide>
                          <div className='single-image'>
                            <img
                            src='/images/listings/listings4.jpg'
                            alt='image'
                            />
                            <Link href='/single-listings'>
                            <a className='link-btn'></a>
                            </Link>
                          </div>
                          </SwiperSlide>

                          <SwiperSlide>
                          <div className='single-image'>
                            <img
                            src='/images/listings/listings2.jpg'
                            alt='image'
                            />
                            <Link href='/single-listings'>
                            <a className='link-btn'></a>
                            </Link>
                          </div>
                          </SwiperSlide>
                        </Swiper>

                        {/* <a href='#' className='bookmark-save'>
                          <i className='flaticon-heart'></i>
                        </a>
                        <a href='#' className='category'>
                          <i className='flaticon-cooking'></i>
                        </a> */}
                      </div>

                      <div className='listings-content'>
                        {/* <div className='author'>
                          <div className='d-flex align-items-center'>
                            <img src='/images/user2.jpg' alt='image' />
                            <span>Sarah</span>
                          </div>
                        </div> */}
                        <ul className='listings-meta'>
                          <li>
                            <a href='#'>
                              <i className='flaticon-furniture-and-household'></i>
                              Hotel
                            </a>
                          </li>
                          <li>
                            <a href='#'>
                              <i className='flaticon-pin'></i> Los Angeles, USA
                            </a>
                          </li>
                        </ul>
                        <h3>
                          <a href='#'>The Beverly Hills Hotel</a>
                        </h3>
                        <span className='status'>
                          <i className='flaticon-save'></i> Open Now
                        </span>
                        <div
                          className='
                          d-flex
                          align-items-center
                          justify-content-between
                        '
                        >
                          <div className='rating'>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bxs-star'></i>
                            <i className='bx bx-star'></i>
                            <span className='count'>(10)</span>
                          </div>
                          <div className='price'>
                            Start From <span>$200</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='col-lg-4 col-md-12'>
              <StickyBox offsetTop={90} offsetBottom={20}>
                <div className='listings-sidebar'>
                  {/* <div className='listings-widget book_listings'>
                    <h3>Booking Online</h3>
                    <a href='#' className='default-btn'>
                      Book Now
                    </a>
                    <span>
                      By <a href='#'>Booking.com</a>
                    </span>
                  </div> */}

                  <div className='listings-widget listings_contact_details'>
                    <h3>Contact Details</h3>
                    <ul>
                      <li>
                        <i className='bx bx-envelope' ></i>
                        <a href={`mailto:${listing.email}`}>{listing.email}</a>
                      </li>

                      <li>
                        <i className='bx bx-phone-call'></i>
                        <a href={`tel:${listing.phone}`}>{listing.phone}</a>
                      </li>

                      <li>
                        <i className='bx bx-globe'></i>
                        <a href={`${listing.url}`}>{listing.url}</a>
                      </li>
                      
                      <li>
                        <i className='bx bx-map'></i> {listing.address}
                      </li>
                    </ul>
                  </div>

                  <div className='listings-widget listings_contact_details'>
                    <h3>Social Link</h3>
                    <ul>
                      <li>
                        <i className='bx bxl-facebook'></i>
                        <a 
                          href={`${listing.facebook}`} 
                          target="_blank" 
                          rel="noreferrer"
                        >
                          {listing.facebook}
                        </a>
                      </li>

                      <li>
                        <i className='bx bxl-twitter'></i>
                        <a 
                          href={`${listing.twitter}`}
                          target="_blank" 
                          rel="noreferrer"
                        >
                          {listing.twitter}
                        </a>
                      </li>

                      <li>
                        <i className='bx bxl-linkedin'></i>
                        <a 
                          href={`${listing.linkedin}`}
                          target="_blank" 
                          rel="noreferrer"
                        >
                          {listing.linkedin}
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </StickyBox>
            </div>
          </div>
        </div>
      </section>

      <Footer 
        bgColor='bg-f5f5f5' 
      />
    </>
  );
};  

// export async function getServerSideProps({ query }) {
//   const id = query.id;
//   const res = await axios.get(`${baseUrl}/api/v1/listings/${id}`);
//   const listing = await res.data;

//   return {
//     props: {
//       listing,
//     },
//   };
// }

export async function getServerSideProps({ query }) {
  const slug = query.slug;

  const res = await axios.get(`${systemApiBaseUrl.api.baseUrl}/api/v1/business/get-single-business/${slug}`);
  const listing = await res.data.listing[0];

  return {
    props: {
      listing,
    },
  };
}

export default SingleListings;
