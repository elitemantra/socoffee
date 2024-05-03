'use client'

import { useEffect } from 'react';
import Script from 'next/script';

const LoginPage = () => {


  useEffect(() => {
    window.otpless = (otplessUser) => {
      alert(JSON.stringify(otplessUser));
      window.location.href = '/';
    };
  }, []);

  return (
    <div>
      <Script
        id="otpless-sdk"
        src="https://otpless.com/v2/auth.js"
        data-appid="R388L6PKZGTMSOA4GZO2"
        strategy="lazyOnload"
      />
      <div id="otpless-login-page"></div>
    </div>
  );
};

export default LoginPage;