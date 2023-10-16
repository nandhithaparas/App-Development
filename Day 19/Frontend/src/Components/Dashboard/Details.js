import React, { useEffect } from 'react'
import './Details.css'
import $ from 'jquery';

export default function Details() {
    

/* Please ❤ this if you like it! */


useEffect(() => {
    // Your jQuery code here
    // Make sure to use jQuery functions inside this useEffect hook

    // Page cursors
    document.getElementsByTagName('body')[0].addEventListener('mousemove', function (n) {
      t.style.left = n.clientX + 'px';
      t.style .top = n.clientY + 'px';
      e.style.left = n.clientX + 'px';
      e.style.top = n.clientY + 'px';
      i.style.left = n.clientX + 'px';
      i.style.top = n.clientY + 'px';
    });
    var t = document.getElementById('cursor');
    var e = document.getElementById('cursor2');
    var i = document.getElementById('cursor3');
    
    function n(t) {
      e.classList.add('hover');
      i.classList.add('hover');
    }

    function s(t) {
      e.classList.remove('hover');
      i.classList.remove('hover');
    }
    s();
    for (var r = document.querySelectorAll('.hover-target'), a = r.length - 1; a >= 0; a--) {
      o(r[a]);
    }

    function o(t) {
      t.addEventListener('mouseover', n);
      t.addEventListener('mouseout', s);
    }

    // About page
    $('.about-text').on('click', function () {
      $('body').addClass('about-on');
    });

    $('.about-close').on('click', function () {
      $('body').removeClass('about-on');
    });

    // Contact page
    $('.contact-text').on('click', function () {
      $('body').addClass('contact-on');
    });

    $('.contact-close').on('click', function () {
      $('body').removeClass('contact-on');
    });

    // Travel portfolio page
    $('.travel').on('click', function () {
      $('body').addClass('travel-on');
    });

    $('.travel-close').on('click', function () {
      $('body').removeClass('travel-on');
    });

    // Wildlife portfolio page
    $('.wildlife').on('click', function () {
      $('body').addClass('wildlife-on');
    });

    $('.wildlife-close').on('click', function () {
      $('body').removeClass('wildlife-on');
    });

    // Nature portfolio page
    $('.nature').on('click', function () {
      $('body').addClass('nature-on');
    });

    $('.nature-close').on('click', function () {
      $('body').removeClass('nature-on');
    });
  }, []); // The empty array as the second argument ensures this effect runs once on component mount

  return (
    <div className='detailsbody'>

  <div className="hero-section">
    <div className="about-text hover-target">about</div>
    <div className="contact-text hover-target">contact</div>
    <div className="section-center">
      <div className="container-fluid">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <h1>Christian Arete</h1>
          </div>
          <div className="col-12 text-center mb-2">
            <div className="dancing">photography</div>
          </div>
          <div className="col-12 text-center mt-4 mt-lg-5">
            <p>
              <span className="travel hover-target">travel</span>
              <span className="wildlife hover-target">wildlife</span>
              <span className="nature hover-target">nature</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="about-section">
    <div className="about-close hover-target" />
    <div className="section-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <img
              src="http://www.ivang-design.com/svg-load/portfolio/freel.jpg"
              alt=""
            />
          </div>
          <div className="col-lg-8 text-center mt-4">
            <p>
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo.
            </p>
          </div>
          <div className="col-12 text-center">
            <p>
              <span>Christian Arete</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="contact-section">
    <div className="contact-close hover-target" />
    <div className="section-center">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 text-center">
            <a href="#" className="hover-target">
              arete@photography.com
            </a>
          </div>
          <div className="col-12 text-center social mt-4">
            <a href="#" className="hover-target">
              instagram
            </a>
            <a href="#" className="hover-target">
              flickr
            </a>
            <a href="#" className="hover-target">
              facebook
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="travel-section">
    <div className="travel-close hover-target" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h3>travel</h3>
        </div>
        <div className="col-12 mt-3 text-center">
          <p>
            <span>Canon PowerShot S95</span>
          </p>
        </div>
        <div className="col-12 text-center">
          <p>
            focal length: 22.5mm
            <br />
            aperture: ƒ/5.6
            <br />
            exposure time: 1/1000
            <br />
            ISO: 80
          </p>
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div className="wildlife-section">
    <div className="wildlife-close hover-target" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h3>wildlife</h3>
        </div>
        <div className="col-12 mt-3 text-center">
          <p>
            <span>Canon PowerShot S95</span>
          </p>
        </div>
        <div className="col-12 text-center">
          <p>
            focal length: 22.5mm
            <br />
            aperture: ƒ/5.6
            <br />
            exposure time: 1/1000
            <br />
            ISO: 80
          </p>
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div className="nature-section">
    <div className="nature-close hover-target" />
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h3>nature</h3>
        </div>
        <div className="col-12 mt-3 text-center">
          <p>
            <span>Canon PowerShot S95</span>
          </p>
        </div>
        <div className="col-12 text-center">
          <p>
            focal length: 22.5mm
            <br />
            aperture: ƒ/5.6
            <br />
            exposure time: 1/1000
            <br />
            ISO: 80
          </p>
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="http://www.ivang-design.com/svg-load/portfolio/photo-p.jpg"
            alt=""
          />
        </div>
      </div>
    </div>
  </div>
  <div className="cursor" id="cursor" />
  <div className="cursor2" id="cursor2" />
  <div className="cursor3" id="cursor3" />
  {/* Link to page
================================================== */}
  <a
    href="https://front.codes/"
    className="link-to-portfolio hover-target"
    target="”_blank”"
  />


    </div>
  )
}
