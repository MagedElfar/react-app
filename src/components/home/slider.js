import React from 'react';
import stadium from './../../Assets/stadium.jpg';
import tenis from './../../Assets/tenis.jpg';
import basketball from './../../Assets/basketball.jpg';
import{Link} from 'react-router-dom';
import './slider.css'


function Slider(){
    return(
        <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src={stadium} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            <button type="button" className="btn btn-danger"><Link className="btn-link" to="/foot-ball">Shop Now</Link></button>
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={tenis} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                        </div>
                    </div>
                    <div className="carousel-item">
                        <img src={basketball} className="d-block w-100" alt="..." />
                        <div className="carousel-caption d-none d-md-block">
                            
                        </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
    )
}

export default Slider;