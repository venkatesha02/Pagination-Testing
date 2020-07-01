import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ReactPaginate from 'react-paginate';
import "./style.css";

export default function ShowData() {
    const [state, setstate] = useState({
        offset: 0,
        data: [],
        perPage: 10,
        currentPage: 0,
    })
    const [IsClicked, setIsClicked] = useState(false)

    useEffect(() => {
        receivedData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // useEffect(() => {
    //     receivedData()

    // }, [setstate]);

    const receivedData = async () => {
        await axios.get(`https://jsonplaceholder.typicode.com/photos`)
            .then(res => {

                const data = res.data;
                const slice = data.slice(state.offset, state.offset + state.perPage)
                const postData = slice.map(pd => <React.Fragment>
                    <p>{pd.title}</p>
                    <img src={pd.thumbnailUrl} alt="images" />
                </React.Fragment>)

                setstate({
                    ...state,
                    pageCount: Math.ceil(data.length / state.perPage),
                    postData,
                })
                
            });
    }

    const handlePageClick = async (e) => {

        const selectedPage = e.selected;
        const offset = selectedPage * state.perPage;

        //console.log(IsClicked)
        await receivedData()

        await setstate({
            ...state,
            currentPage: selectedPage,
            offset: offset,
        })

        console.log(state.offset)


    };


    return (
        <div>
            {state.postData}
            <ReactPaginate
                previousLabel={"prev"}
                nextLabel={"next"}
                breakLabel={"..."}
                breakClassName={"break-me"}
                pageCount={state.pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={"pagination"}
                subContainerClassName={"pages pagination"}
                activeClassName={"active"} />
        </div>
    )
}
