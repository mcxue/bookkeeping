import React from 'react';
import {Layout} from 'Components/Layout';
import {TopBar} from 'Components/TopBar';
import {ShowRecords} from '../Components/ShowRecords';



const Detail = () => {
  return (
    <Layout name='明细'>
      <TopBar name='全部收支'/>
      <ShowRecords/>
    </Layout>
  );
};

export {Detail};