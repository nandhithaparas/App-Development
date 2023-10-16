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
            <h1>WanderLenses</h1>
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
           {/* <img
              src="http://www.ivang-design.com/svg-load/portfolio/freel.jpg"
              alt=""
  />*/}
          </div>
          <div className="col-lg-8 text-center mt-4">
            <p style={{color:'white'}}>
            We've captured over 3 million memories for photographers across the globe with our <br/>
            team of 500+ talented, professional photographers.
            </p>
          </div>
          <div className="col-12 text-center">
            <p>
              <span>Wanderlenses</span>
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
              wanderlenses@photography.com
            </a>
          </div>
          <div className="col-12 text-center social mt-4">
            <a href="https://www.instagram.com/" className="hover-target">
              instagram
            </a>
            <a href="https://www.linkedin.com/" className="hover-target">
              LinkedIn
            </a>
            <a href="https://www.facebook.com/" className="hover-target">
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
        <div  className="col-12 mt-3 text-center">
          <p>
            <span>Canon PowerShot S95</span>
          </p>
        </div>
        <div  className="col-12 text-center">
          <p style={{color:'white'}}>
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
            src="https://www.hdwallpapers.in/download/eiffel_tower_with_background_of_clouds_hd_travel-HD.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://ntbrand-wp.s3.amazonaws.com/worldoftravel/wp-content/uploads/2021/03/31101955/WOT_England_59e7bb36521f3769239fb1d9.jpeg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs3/328426817/original/29e7db79e0b5395bb37da88507c7ae79cb9995c8/premium-royalty-free-stock-images-unlock-stunning-visuals-copyright.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://www.hdwallpapers.in/download/santorini_during_nighttime_hd_travel-HD.jpg"
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
            src="https://img.freepik.com/free-photo/beautiful-mountains-ratchaprapha-dam-khao-sok-national-park-surat-thani-province-thailand_335224-851.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://uhdwallpapers.org/uploads/cache/3303916991/travel-through-paris_600x338-mt-90.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://i.pinimg.com/736x/ce/75/ce/ce75ce616c2c92d8b4b5ac8ccbea656d.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://c0.wallpaperflare.com/preview/950/96/1014/train-sad-lonely-regret.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://cdn.pixabay.com/photo/2020/02/02/17/24/travel-4813658_1280.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://cdn.pixabay.com/photo/2016/10/10/14/44/train-1728537_640.jpg"
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
          <p style={{color:'white'}}>
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
            src="https://c4.wallpaperflare.com/wallpaper/577/323/667/5bd3801d1970f-wallpaper-preview.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://images.pexels.com/photos/459449/pexels-photo-459449.jpeg?cs=srgb&dl=pexels-pixabay-459449.jpg&fm=jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://wallpaperswide.com/download/wildlife_photography-wallpaper-960x600.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://www.thrillophilia.com/blog/wp-content/uploads/2017/04/shutterstock_694592521.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://i0.wp.com/digital-photography-school.com/wp-content/uploads/2014/06/9783923464_5e8518e1f9_o.jpg?w=600&h=1260&ssl=1"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://w0.peakpx.com/wallpaper/513/705/HD-wallpaper-kingfisher-fishing-close-up-wildlife-alcedinidae.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://cdn.visualwilderness.com/wp-content/uploads/2017/06/Mittal_160416_9238-Edit-845x321.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://cdn-7.nikon-cdn.com/Images/Learn-Explore/Photography-Techniques/2010/Chasing-Birds/Media/Michael-Miller_Peacock-birds.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://images.pexels.com/photos/247376/pexels-photo-247376.jpeg?cs=srgb&dl=pexels-pixabay-247376.jpg&fm=jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://whatdesigncando.s3.eu-central-1.amazonaws.com/app/uploads/20180709135809/InternetofElephants.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://cdn.fstoppers.com/styles/large-16-9/s3/lead/2021/04/8e126326f7ef795ded8fdbed85a67260.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8d2lsZGxpZmV8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
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
          <p style={{color:'white'}}>
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
            src="https://i.pinimg.com/736x/24/b2/9b/24b29b68b49f8fee07155e286fb50095.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://static.toiimg.com/photo/75579678.cms"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://cdn.pixabay.com/photo/2020/02/02/18/24/nature-4813787_960_720.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://e0.pxfuel.com/wallpapers/516/620/desktop-wallpaper-nature-real.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://media.istockphoto.com/id/611746924/photo/fresh-green-grass-with-dew-drops-closeup-nature-background.webp?b=1&s=170667a&w=0&k=20&c=UWqGbECKx-qqjgQ5BcuT4ZErcPMgPEBxJB1WKfgvJ_A="
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://previews.123rf.com/images/sereepai/sereepai1610/sereepai161000099/67806022-the-great-nawab-polyura-eudamippus-nigrobasalis-beautiful-butterfly-in-nature-with-real-background.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://e0.pxfuel.com/wallpapers/528/333/desktop-wallpaper-beautiful-greenery-of-real-nature-scene.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://media-cdn.tripadvisor.com/media/photo-s/0a/52/17/f9/cottage-in-the-real-nature.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://cdn.wallpapersafari.com/87/50/6ymNTl.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://storage.needpix.com/rsynced_images/rainbow-1286862_1280.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://wallpaperaccess.com/full/36342.jpg"
            alt=""
          />
        </div>
        <div className="col-md-6 col-lg-4">
          <img
            src="https://t3.ftcdn.net/jpg/05/35/47/38/360_F_535473874_OWCa2ohzXXNZgqnlzF9QETsnbrSO9pFS.jpg"
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
