import React, { useEffect } from 'react';
import Header from '../layout/header';

const Home = (props) => {
   return (
      <React.Fragment>
         <Header />
         <main className='min-h-[calc( 100vh - 80px)]'>
            <div className='row-span-1'>
               <div className='container col-span-12'>
                  <h1>Landing Page...</h1>
               </div>
            </div>
         </main>
      </React.Fragment>

   )
}

export default Home;
