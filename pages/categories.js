import Navbar from '../components/_App/Navbar';
import PageBanner from '../components/Common/PageBanner';
import CategoryTwo from '../components/Common/CategoryTwo';
import Category from '../components/Common/Category';
import Footer from '../components/_App/Footer';

import systemApiBaseUrl from "../utils/usDirectoryLinks";
import axios from "axios";

const Categories = ({ categoryData, PopularCategoryData }) => {
  return (
    <>
      <Navbar />

      <PageBanner 
        pageTitle='Listings Category' 
        pageName='Listings Category' 
      />

     <CategoryTwo 
				titleOne={true} 
				showMoreCategories={false}        
				categoryData={categoryData}
			/>

      <Category 
				PopularCategoryData={PopularCategoryData}
      />

      <Footer />
    </>
  );
};

export async function getServerSideProps({ query }) {
	const page = query.page ? query.page : "1";
	const keyword = query.keyword;
	const orderby = query.orderby;
	const featured = query.featured;

	const catPayload = {
		params: {
			page,
			orderby : 'CLICKZA',
			featured: 0,
		},
	};

  const PopularCatPayload = {
		params: {
			page,
			limit: 6,
			orderby : 'CLICKZA',
			featured: 0,
		},
	};


	const categoryUrl = `${systemApiBaseUrl.api.baseUrl}/api/v1/category/fetch`;
	const categoryResponse = await axios.get(categoryUrl,catPayload);

  const PopularCatUrl = `${systemApiBaseUrl.api.baseUrl}/api/v1/category/fetch`;
	const PopularCatResponse = await axios.get(PopularCatUrl,PopularCatPayload);

	return {
		props: {
			// listings: response.data.listings,
			// totalPages: response.data.totalPages,
			categoryData: categoryResponse.data,
			PopularCategoryData: PopularCatResponse.data,
		},
	};
}

export default Categories;
