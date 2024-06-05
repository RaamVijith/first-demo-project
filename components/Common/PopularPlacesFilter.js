import React, { useEffect, useState } from 'react';
import axios from "axios";
import { useRouter } from 'next/router';
import systemApiBaseUrl from '../../utils/usDirectoryLinks';

const PopularPlacesFilter = ({query}) => {
  //search
  const router = useRouter();
  const [title, setTitle] = useState(router.query.title);
  const [location, setLocation] = useState('');
  const [category, setCategory] = useState('');
  const [categoryOptions, setCategoryOptions] = useState('');

  const submitHandler = (e) => {
    e.preventDefault();
    if (title || location || category) {
      router.push(
        `/listings/?title=${title}&location=${location}&category=${category}`
      );
    } else {
      router.push('/');
    }
  };

  useEffect(()=>{
    fetchCategories();
  })

  const fetchCategories = async() => {
    if(!categoryOptions){

      const url = `${systemApiBaseUrl.api.baseUrl}/api/v1/category/fetch`;
      const page = router.query.page ? router.query.page : "1";
      const keyword = router.query.keyword;
      const title = router.query.title;
      const location = router.query.location;
      const category = router.query.category;
      const payload = {
        params: {
          page,
          limit: 18,
          keyword,
          title,
          location,
          category,
        },
      };
      // const url = `${baseUrl}/api/v1/listings`;
      const response = await axios.get(url,payload);
      setCategoryOptions(response.data.data);
    }
  }

  return (
    <>
      <div className='page-title-bg'>
        <div className='container'>
          <h2>Find Popular Places</h2>
          <form onSubmit={submitHandler}>
            <div className='row m-0 align-items-center'>
              <div className='col-lg-4 col-md-12 p-0'>
                <div className='form-group'>
                  <label>
                    <i className='flaticon-search'></i>
                  </label>
                  <input
                    value={title}
                    type='text'
                    className='form-control'
                    placeholder='What are you looking for?'
                    name='title'
                    onChange={(e) => setTitle(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className='col-lg-3 col-md-6 p-0'>
                <div className='form-group'>
                  <label>
                    <i className='flaticon-pin'></i>
                  </label>
                  <input
                    type='text'
                    className='form-control'
                    placeholder='Location'
                    name='location'
                    onChange={(e) => setLocation(e.target.value)}
                  />
                </div>
              </div>

              <div className='col-lg-3 col-md-6 p-0'>
                <div className='form-group category-select pagebanner-select-custom'>
                  <label className='category-icon'>
                    <i className='flaticon-category'></i>
                  </label>
                  <select
                    className='banner-form-select-pagebanner'
                    onChange={(e) => setCategory(e.target.value)}
                  >
                    <option value='0'>All Categories</option>
                    {categoryOptions && categoryOptions.map((category) => (
                      <option value={category.cat_id}>{category.cat_name}</option>
                    ))}
                    {/* <option>Restaurants</option>
                    <option>Events</option>
                    <option>Clothing</option>
                    <option>Bank</option>
                    <option>Fitness</option>
                    <option>Bookstore</option>
                    <option>Shopping</option>
                    <option>Hotels</option>
                    <option>Hospitals</option>
                    <option>Culture</option>
                    <option>Beauty</option> */}

                  </select>
                </div>
              </div>

              <div className='col-lg-2 col-md-12 p-0'>
                <div className='submit-btn'>
                  <button type='submit'>Search Now</button>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default PopularPlacesFilter;
