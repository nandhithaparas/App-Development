import React from 'react'
import './Photographer.css'
import $ from 'jquery'

export default function Photographer() {
  // for animation 

$(document).ready(function(){
  $('.pp-quote').click(function(){
    $('.pp-quote').removeClass("active");
    $(this).addClass("active");
});
});

$(document).ready(function(){
    
       // hide-top

        $('.li-quote-1').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');
            $('.quote-text-1').addClass('show');
            $('.quote-text-1').removeClass('hide-bottom');             
        });

        $('.li-quote-2').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');
            $('.quote-text-2').addClass('show');             
            $('.quote-text-2').removeClass('hide-bottom');
        });

        $('.li-quote-3').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');         
            $('.quote-text-3').addClass('show');             
            $('.quote-text-3').removeClass('hide-bottom');
        });
        $('.li-quote-4').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');      
            $('.quote-text-4').addClass('show');             
            $('.quote-text-4').removeClass('hide-bottom');
        });
        $('.li-quote-5').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');      
            $('.quote-text-5').addClass('show');             
            $('.quote-text-5').removeClass('hide-bottom');
        });
        $('.li-quote-6').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');      
            $('.quote-text-6').addClass('show');             
            $('.quote-text-6').removeClass('hide-bottom');
        });
        $('.li-quote-7').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');      
            $('.quote-text-7').addClass('show');             
            $('.quote-text-7').removeClass('hide-bottom');
        });
        $('.li-quote-8').click(function(e){ 
            e.stopPropagation();
            $(".show").addClass('hide-top');
            $(".hide-top").removeClass('show');      
            $('.quote-text-8').addClass('show');             
            $('.quote-text-8').removeClass('hide-bottom');
        });
           
    
});


$(document).ready(function(){
    
       // hide-top

        $('.li-quote-1').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-1').addClass('look');
            $('.dp-name-1').removeClass('hide-dp-bottom');             
        });

        $('.li-quote-2').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-2').addClass('look');
            $('.dp-name-2').removeClass('hide-dp-bottom');             
        });

        $('.li-quote-3').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-3').addClass('look');
            $('.dp-name-3').removeClass('hide-dp-bottom');             
        });
		$('.li-quote-4').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-4').addClass('look');
            $('.dp-name-4').removeClass('hide-dp-bottom');             
        });
		
        $('.li-quote-5').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-5').addClass('look');
            $('.dp-name-5').removeClass('hide-dp-bottom');             
        });
		
        $('.li-quote-6').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-6').addClass('look');
            $('.dp-name-6').removeClass('hide-dp-bottom');             
        });
        $('.li-quote-7').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-7').addClass('look');
            $('.dp-name-7').removeClass('hide-dp-bottom');             
        });
        $('.li-quote-8').click(function(e){ 
            e.stopPropagation();
            $(".look").addClass('hide-dp-top');
            $(".hide-dp-top").removeClass('look');
            $('.dp-name-8').addClass('look');
            $('.dp-name-8').removeClass('hide-dp-bottom');             
        });
           
    
});
  return (
    <div>
    <>
  <title>Bootstrap Example</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link
    rel="stylesheet"
    href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css"
  />
  <section className="op-section op-eight-section section" id="section5">
    <div className="ocean-2">
      <div className="wave-2" />
      <div className="wave-2" />
    </div>
    <div className="section-eight">
      <div className="container">
        <div className="row">
          <div className="col-md-3 col-sm-3">
            <div className="container-pe-quote left">
              <div className="pp-quote li-quote-1">
                <img
                  src="http://nanaetben.fr/animation/assets/images/website/Ben-1.png"
                  alt=""
                />
              </div>
              <div className="pp-quote li-quote-2">
                <img
                  src="http://nanaetben.fr/animation/assets/images/website/Ben-2.png"
                  alt=""
                />
              </div>
              <div className="pp-quote li-quote-3">
                <img
                  src="http://nanaetben.fr/animation/assets/images/website/Ben-3.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div className="col-md-6 col-sm-6">
            <div className="sec-eight-text-area">
              {/* <img class="" src="assets/images/website/Nana-4.png" alt="">
		    							<h1>MADGE JENNINGS</h1> */}
              <div className="container-dp-name">
                <div className="box-dpname dp-name-1 hide-dp-top">
                  <img
                    className=""
                    src="http://nanaetben.fr/animation/assets/images/website/Ben-1.png"
                    alt=""
                  />
                  <h1>MADGE JENNINGS</h1>
                </div>
                <div className="box-dpname dp-name-2 hide-dp-top">
                  <img
                    className=""
                    src="http://nanaetben.fr/animation/assets/images/website/Ben-2.png"
                    alt=""
                  />
                  <h1>MADGE JENNINGS</h1>
                </div>
                <div className="box-dpname dp-name-3 hide-dp-top">
                  <img
                    className=""
                    src="http://nanaetben.fr/animation/assets/images/website/Ben-3.png"
                    alt=""
                  />
                  <h1>MADGE JENNINGS</h1>
                </div>
                <div className="box-dpname dp-name-4 hide-dp-bottom">
                  <img
                    className=""
                    src="http://nanaetben.fr/animation/assets/images/website/Nana-4.png"
                    alt=""
                  />
                  <h1>MADGE JENNINGS</h1>
                </div>
                <div className="box-dpname dp-name-5 hide-dp-top">
                  <img
                    className=""
                    src="http://nanaetben.fr/animation/assets/images/website/Nana-2.png"
                    alt=""
                  />
                  <h1>MADGE JENNINGS</h1>
                </div>
                <div className="box-dpname dp-name-6 hide-dp-top">
                  <img
                    className=""
                    src="http://nanaetben.fr/animation/assets/images/website/Nana-3.png"
                    alt=""
                  />
                  <h1>MADGE JENNINGS</h1>
                </div>
                <div className="box-dpname dp-name-7 look">
                  <img
                    className=""
                    src="http://nanaetben.fr/animation/assets/images/website/Nana-1.png"
                    alt=""
                  />
                  <h1>MADGE JENNINGS</h1>
                </div>
              </div>
              {/* <img class="" src="assets/images/website/quote.png" alt="">		    							
		    							<p>Whether you enjoy city breaks or extended holidays in the sun, you
											can always improve your travel experiences by staying in a small,
											charming hotel, where the atmosphere is welcoming and friendly and
										</p> */}
              <div className="container-quote">
                <div className="quote quote-text-1 hide-top">
                  <img
                    className=""
                    src="assets/images/website/quote.png"
                    alt=""
                  />
                  <p>
                    Whether you enjoy city breaks or extended holidays in the
                    sun, you can always improve your travel experiences by
                    staying in a small, charming hotel, where the atmosphere is
                    welcoming and friendly and
                  </p>
                </div>
                <div className="quote quote-text-2 hide-top">
                  <img
                    className=""
                    src="http://nanaetben.fr/animation/assets/images/website/quote.png"
                    alt=""
                  />
                  <p>
                    Whether you enjoy city breaks or extended holidays in the
                    sun, you can always improve your travel experiences by
                    staying in a small, charming hotel, where the atmosphere is
                    welcoming and friendly and
                  </p>
                </div>
                <div className="quote quote-text-3 hide-top">
                  <img
                    className=""
                    src="http://nanaetben.fr/animation/assets/images/website/quote.png"
                    alt=""
                  />
                  <p>
                    Whether you enjoy city breaks or extended holidays in the
                    sun, you can always improve your travel experiences by
                    staying in a small, charming hotel, where the atmosphere is
                    welcoming and friendly and
                  </p>
                </div>
                <div className="quote quote-text-4 hide-bottom">
                  <img
                    className=""
                    src="assets/images/website/quote.png"
                    alt=""
                  />
                  <p>
                    Whether you enjoy city breaks or extended holidays in the
                    sun, you can always improve your travel experiences by
                    staying in a small, charming hotel, where the atmosphere is
                    welcoming and friendly and
                  </p>
                </div>
                <div className="quote quote-text-5 hide-top">
                  <img
                    className=""
                    src="assets/images/website/quote.png"
                    alt=""
                  />
                  <p>
                    Whether you enjoy city breaks or extended holidays in the
                    sun, you can always improve your travel experiences by
                    staying in a small, charming hotel, where the atmosphere is
                    welcoming and friendly and
                  </p>
                </div>
                <div className="quote quote-text-6 hide-top">
                  <img
                    className=""
                    src="http://nanaetben.fr/animation/assets/images/website/quote.png"
                    alt=""
                  />
                  <p>
                    Whether you enjoy city breaks or extended holidays in the
                    sun, you can always improve your travel experiences by
                    staying in a small, charming hotel, where the atmosphere is
                    welcoming and friendly and
                  </p>
                </div>
                <div className="quote quote-text-7 show">
                  <img
                    className=""
                    src="http://nanaetben.fr/animation/assets/images/website/quote.png"
                    alt=""
                  />
                  <p>
                    Whether you enjoy city breaks or extended holidays in the
                    sun, you can always improve your travel experiences by
                    staying in a small, charming hotel, where the atmosphere is
                    welcoming and friendly and
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-3 col-sm-3">
            <div className="container-pe-quote right">
              <div className="pp-quote li-quote-4">
                <img
                  src="http://nanaetben.fr/animation/assets/images/website/Nana-4.png"
                  alt=""
                />
              </div>
              <div className="pp-quote li-quote-5">
                <img
                  src="http://nanaetben.fr/animation/assets/images/website/Nana-2.png"
                  alt=""
                />
              </div>
              <div className="pp-quote li-quote-6">
                <img
                  src="http://nanaetben.fr/animation/assets/images/website/Nana-3.png"
                  alt=""
                />
              </div>
              <div className="pp-quote li-quote-7 active">
                <img
                  src="http://nanaetben.fr/animation/assets/images/website/Nana-1.png"
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="jumbotron text-center">
    <p>Create by Yatin Gondha | gondhayatin@gmail.com</p>
  </div>
</>

    </div>
  )
}
