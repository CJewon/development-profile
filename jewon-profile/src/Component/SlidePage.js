import React from 'react'
import neneWeb from '../img/neneWeb.png'
import profile from '../img/profile.png'

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import { Link } from 'react-router-dom'

export default function SlidePage() {

  const settings = {
    centerMode : true,
    centerPadding : '0px',
    dots: true,
    infinite: true,
    draggable : false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };



  return (

    <Slider {...settings}>
      <div className="slide-list">
          <img src={neneWeb} alt="네네홈페이지" />
          <div className='website-explain-text'>
          <h4>네네치킨</h4>
          <p>네네치킨 메인 홈페이지 리뉴얼</p>
          <div className="summary-rect-container">
            <div className="summary-rect-text">
              <div className="summary-rect">
                <p>#디자인</p>
              </div>
              <div className="summary-rect">
                <p>#Javascript</p>
              </div>
              <div className="summary-rect">
                <p>#리뉴얼페이지</p>
              </div>
              <div className="summary-rect">
                <p>#PC전용</p>
              </div>
            </div>
          </div>
          <Link to='/development-profile/NeneRenewalSite' className='website-click-button'>상세보기</Link>                       
          </div>
      </div>
      <div className="slide-list">
          <img src={profile} alt="포트폴리오사이트" />
          <div className='website-explain-text'>
          <h4>개인 포트폴리오</h4>
          <p>개인 프로필 및 작업 정리공간</p>
          <div className="summary-rect-container">
            <div className="summary-rect-text">
              <div className="summary-rect">
                <p>#React</p>
              </div>
              <div className="summary-rect">
                <p>#Javascript</p>
              </div>
              <div className="summary-rect">
                <p>#포트폴리오</p>
              </div>
              <div className="summary-rect">
                <p>#반응형웹</p>
              </div>
            </div>
          </div>
          <Link to='/development-profile/NeneRenewalSite' className='website-click-button'>상세보기</Link>                       
          </div>
      </div>
    </Slider>
  )
}
