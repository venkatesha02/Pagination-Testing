import React from 'react'

export default function Home() {
    return (
        <div>
            <div id="carouselExampleFade" className="carousel slide carousel-fade" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://bit.ly/31i0Uzk" width="100%" height ="550px" className="d-block w-100" alt="image1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://bit.ly/2NsvYUN" width="100%" height ="550px" className="d-block w-100" alt="image2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://bit.ly/2Nvslxu"  width="100%" height ="550px" className="d-block w-100" alt="image3" />
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
            </div>
        </div>
    )
}
