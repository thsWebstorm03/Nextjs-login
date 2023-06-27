import React, { useEffect } from 'react';

import Header from './header'
import Footer from './footer'

const Layout = ({ children, pageprops }) => {

   return (
      <React.Fragment>
         <Header />
         <main className='w-full mt-[80px]'>
            {children}
         </main>
         <Footer />
      </React.Fragment>
   )
}

export default Layout;