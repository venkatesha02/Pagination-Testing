// import React, { useState } from 'react';
// import Axios from 'axios';
// import { useEffect } from 'react';
// import Filter from '../Filtering/Filter'
// // import Pagination from 'react-js-pagination'

// export default function FormData(props) {

//     const [items, setItems] = useState({ all: [], isEmpty:true })

//     const [newData, setnewData] = useState({ allnew: [] })

//     const [newFilterd, setNewFilterd] = useState({ filterd: [] })

//     /**
//      * 
//      *while mountion call to api
//      */
//     useEffect(() => {
//         getAllAccounts()
//         // eslint-disable-next-line react-hooks/exhaustive-deps
//     }, []);


//     let getAllAccounts = async () => {

//         const url = `https://react-medical-app.firebaseio.com/addUser.json`

//         try {
//             const response = await Axios.get(url)
//             if (response.status === 200) {
//                 let fetchedAccount = []
//                 // console.log("Response ==>", response.data)

//                 for (let key in response.data) {
//                     let data = response.data[key]
//                     // console.log("=======>",data)
//                     fetchedAccount.push({ ...data })

//                     setItems({
//                         ...items.all,
//                         all: fetchedAccount,
//                         isEmpty:true
//                     })
//                     setnewData({
//                         ...newData.allnew,
//                         allnew: fetchedAccount
//                     })
//                     setNewFilterd({
//                         ...newFilterd.filterd,
//                         filterd: fetchedAccount
//                     })
//                 }
//             }
//         }
//         catch (err) {
//             console.log("Erroo ", err)
//         }
//     }

//     const input = (event) => {

//         let oldData = [...newData.allnew]

//         console.log(event);
//         console.log(oldData);

//         const data = oldData.filter(val => val.userName.toLowerCase().startsWith(event))
//         let arr = [];
//         for (const key in data) {
//             arr.push({
//                 ...data[key],
//             })
//         }

//         if (arr) {

//             setItems({
//                 //...items.all,
//                 all: arr,
//                 isEmpty:true
//             })
//         }
//     }

//     const filterdData = (event) => {

//         let oldData = [...newFilterd.filterd]

//         console.log(event);
//         console.log(oldData);

//         const data = oldData.filter(val => val.userName.toLowerCase().includes(event))
//         let arr = [];
//         for (const key in data) {
//             arr.push({
//                 ...data[key],
//             })
//         } 

//         if (arr) {

//             setItems({
//                 //...items.all,
//                 all: arr
//             })
//         }
//     }

//     return (
//         <>
//             <Filter
//                 searchInput={input}
//                 filter={filterdData}
//             />
            
//             <div className='container-fluid mt-3'>
//                 <div class="table-responsive">
//                     <table className="table table-hover">
//                         <thead className="thead-dark">
//                             <tr>
//                                 <th scope="col" ># NO</th>
//                                 <th scope="col" >User ID</th>
//                                 <th scope="col" >Title</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {items.isEmpty?items.all.map((val) => {
//                                 return (
//                                     <>
//                                         <tr key={val.userMobile}>
//                                             <td>{val.userMobile}</td>
//                                             <td>{val.userName}</td>
//                                             <td>{val.userPass}</td>
//                                         </tr>

//                                     </>
//                                 )
//                             }):<p>No Data Found</p>
//                             }
//                         </tbody>
//                     </table>
//                 </div>
//             </div>
//             {/* <Pagination
//                 activePage={1}
//                 itemsCountPerPage={25}
//                 totalItemsCount={3}
//                 onChange={getAllAccounts}
//             /> */}
//         </>
//     ); 
// }

import React, {Component} from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';

export default class FormData extends Component {
  constructor(props) {
      super(props);
      this.state = {
          offset: 0,
          data: [],
          perPage: 10,
          currentPage: 0
      };
      this.handlePageClick = this
          .handlePageClick
          .bind(this);
  }
  receivedData() {
      axios
          .get(`https://jsonplaceholder.typicode.com/photos`)
          .then(res => {

              const data = res.data;
              const slice = data.slice(this.state.offset, this.state.offset + this.state.perPage)
              const postData = slice.map(pd => <React.Fragment>
                  <p>{pd.title}</p>
                  <img src={pd.thumbnailUrl} alt=""/>
              </React.Fragment>)

              this.setState({
                  pageCount: Math.ceil(data.length / this.state.perPage),
                  postData
              })
          });
  }
  handlePageClick = (e) => {
      const selectedPage = e.selected;
      const offset = selectedPage * this.state.perPage;

      this.setState({
          currentPage: selectedPage,
          offset: offset
      }
      , () => {
          console.log(this.state.offset)
          this.receivedData()
      });

  };

  componentDidMount() {
      this.receivedData()
  }
  render() {
      return (
          <div>
              {this.state.postData}
              <ReactPaginate
                  previousLabel={"prev"}
                  nextLabel={"next"}
                  breakLabel={"..."}
                  breakClassName={"break-me"}
                  pageCount={this.state.pageCount}
                  marginPagesDisplayed={2}
                  pageRangeDisplayed={5}
                  onPageChange={this.handlePageClick}
                  containerClassName={"pagination"}
                  subContainerClassName={"pages pagination"}
                  activeClassName={"active"}/>
          </div>

      )
  }
}
