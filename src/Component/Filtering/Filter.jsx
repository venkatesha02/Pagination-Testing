import React from 'react'

export default function Filter(props) {

    return (
        <>
            <div className="container-fluid ustify-content-between">
                <div className="col-md-6 mt-3">
                    <div className="row">
                        <div className="col-md-6">
                            <input
                                className="form-control"
                                type="text"
                                onChange={event => props.searchInput(event.target.value)}
                                placeholder="Search....."
                            />
                        </div>
                        <div className="col-md-6">
                            <fieldset>
                                <legend>Filter By</legend>
                                <input type="checkbox" onChange={(e) => props.filter(e.target.value)} value="manager" />
                                <lable>Manager</lable><br />

                                <input type="checkbox" onChange={(e) => props.filter(e.target.value)} value="business Unit" />
                                <lable>Bussiness Unit</lable><br />

                                <input type="checkbox" onChange={(e) => props.filter(e.target.value)} value="Employee" />
                                <lable>Employee</lable><br />

                            </fieldset>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}