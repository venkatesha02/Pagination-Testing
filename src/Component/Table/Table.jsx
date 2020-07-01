import React, { useState } from 'react';
import Axios from 'axios';
import { useEffect } from 'react';
import { MDBDataTableV5 } from 'mdbreact';

export default function Table() {
  const [datatable, setDataTable] = React.useState({
    columns: [
      {
        label: 'Candidate Name',
        field: 'userName',
        width: 150,
        attributes: {
          'aria-controls': 'DataTable',
          'aria-label': 'Candidate Name',
        },
      },
      {
        label: 'Email Address',
        field: 'userEmail',
        width: 270,
      },
      {
        label: 'Mobile Number',
        field: 'userMobile',
        width: 200,
      },
      {
        label: 'Gender',
        field: 'gender',
        sort: 'asc',
        width: 150,
      },
      
    ],
    rows: [],
  });

  useEffect(() => {
    getAllAccounts()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  let getAllAccounts = async () => {

    const url = `https://react-medical-app.firebaseio.com/addUser.json`

    try {
      const response = await Axios.get(url)
      if (response.status === 200) {
        let fetchedAccount = []
        //console.log("Response ==>", response.data)

        for (let key in response.data) {
          let data = response.data[key]
          //console.log("=======>", data)
          fetchedAccount.push({ ...data })

          setDataTable({
            ...datatable,
            rows: fetchedAccount,
          })
        }
      }
    }
    catch (err) {
      console.log("Erroo ", err)
    }
  }

  return (
    <>
      <div className="container">
        <MDBDataTableV5
          pagingTop
          searchTop
          searchBottom={false}
          hover
          filter 
          entriesOptions={[5, 10, 15, 20]}
          entries={30}
          pagesAmount={4}
          data={datatable}
          fullPagination
        />
      </div>
    </>
  )
}