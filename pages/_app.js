import React, { useState, useEffect } from 'react';
import { IndiceProvider } from '../contexts';

import '../styles/animate.min.css';
import '../styles/bootstrap.min.css';
import '../styles/boxicons.min.css';
import '../styles/flaticon.css';
import "swiper/css";
import "swiper/css/bundle";

// Global Style
import '../styles/style.css';
import '../styles/responsive.css';

import Layout from '../components/_App/Layout';
import Loader from '../components/Shared/Loader';
import GoTop from '../components/Shared/GoTop';

import { parseCookies, destroyCookie } from 'nookies';
import { redirectUser } from '../utils/auth';
import baseUrl from '../utils/baseUrl';
import axios from 'axios';

function MyApp({ Component, pageProps }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <>
      <Layout>
        <IndiceProvider>
          <Component {...pageProps} />
          <Loader loading={loading} />
          <GoTop 
            scrollStepInPx='100' 
            delayInMs='10.50' 
          />
        </IndiceProvider>
      </Layout>
    </>
  );
}

MyApp.getInitialProps = async ({ Component, ctx }) => {
  const { token } = parseCookies(ctx);
  let pageProps = {};

  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }

  if (!token) {
    const isProtectedRoute = [
      '/dashboard',
      '/dashboard/add-listing',
      '/dashboard/messages',
      '/dashboard/bookings',
      '/dashboard/wallet',
      '/dashboard/my-listing/active',
      '/dashboard/reviews',
    ].includes(ctx.pathname);

    if (isProtectedRoute) {
      redirectUser(ctx, '/');
    }
  } else {
    try {
      const payload = { headers: { Authorization: token } };
      const url = `${baseUrl}/api/v1/auth/account`;
      const response = await axios.get(url, payload);
      const user = response.data;
      pageProps.user = user;
    } catch (error) {
      destroyCookie(ctx, 'token');
    }
  }

  return {
    pageProps,
  };
};

export default MyApp;
