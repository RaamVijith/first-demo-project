import React from 'react';
import axios from "axios";
import baseUrl from "../utils/baseUrl";
import Navbar from "../components/_App/Navbar";
import Banner from "../components/HomeOne/Banner";
import CategoryTwo from "../components/Common/CategoryTwo";
import ListingAreaTwo from "../components/Common/ListingAreaTwo";
import DestinationsOne from "../components/Common/DestinationsOne";
import Footer from "../components/_App/Footer";
import systemApiBaseUrl from "../utils/usDirectoryLinks";
import ListingArea from '../components/Listings/ListingArea';


const Index = ({ user, listings, categoryData }) => {
	return (
		<>
			<Navbar 
				userRole={user} 
			/> 

			<Banner />

			<CategoryTwo 
				titleOne={true} 
				categoryData={categoryData}
			/>

			{listings && (
				<ListingAreaTwo
					bgColor="bg-f9f9f9"
					titleOne={true}
					listings={listings}
				/>
			)}

			<DestinationsOne 
				titleOne={true} 
				paddingBottom70="pb-70" 
			/>			

			<Footer />
		</>
	);
};

export async function getServerSideProps({ query }) {
	const page = query.page ? query.page : "1";
	const keyword = query.keyword;
	

	const url = `${systemApiBaseUrl.api.baseUrl}/api/v1/business/fetch`;
	const response = await axios.get(url);

	const payload = {
		params: {
			page,
			limit: 11,
			keyword : 'order_clicks',
		},
	};	

	const categoryUrl = `${systemApiBaseUrl.api.baseUrl}/api/v1/category/fetch`;
	const categoryResponse = await axios.get(categoryUrl,payload);
	return {
		props: {
			//listings: response.data.listings,
			//totalPages: response.data.totalPages,
			categoryData: categoryResponse.data, 
		},
	};
}

export default Index;
