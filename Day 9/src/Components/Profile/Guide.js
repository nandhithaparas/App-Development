import React from 'react'
import "./Profile"
import Navbar from '../NavBar/Navbar'
import { Link } from 'react-router-dom'

export default function Guide() {
  return (
    <div >
    <Navbar/>
    <div className='guide'>
    <div className="profcont">
        <div className="gallery">
         <div className="gallery-item" tabIndex={0}>
           <img
              src="https://media.istockphoto.com/id/838952106/photo/alger-by-night.jpg?s=612x612&w=0&k=20&c=sUiWH1xo9o9_umnjHV1RbDvah_mMJrXqLU8UKBH4REE="
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
                <li className="gallery-item-likes">
                  <span className="visually-hidden">Country:</span>
                  <i className="fas fa-heart" aria-hidden="true" /> <Link style={{textDecoration:'none',color:'white'}} to="/details">Algeria</Link>
                </li>
                <li className="gallery-item-comments">
                </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://c0.wallpaperflare.com/preview/37/753/222/cameroon-douala-bonassama-night.jpg"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
              <li className="gallery-item-likes">
              <span className="visually-hidden">Country:</span>
              <i className="fas fa-heart" aria-hidden="true" /> Cameroon
            </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://farm2.staticflickr.com/1390/5146069762_df5e2cc81b_o.jpg"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
              <li className="gallery-item-likes">
              <span className="visually-hidden">Country:</span>
              <i className="fas fa-heart" aria-hidden="true" /> Egypt
            </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://images.unsplash.com/photo-1624314138470-5a2f24623f10?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8ZXRoaW9waWF8ZW58MHx8MHx8fDA%3D&w=1000&q=80"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
              <li className="gallery-item-likes">
              <span className="visually-hidden">Country:</span>
              <i className="fas fa-heart" aria-hidden="true" /> Ethiopia
            </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://c4.wallpaperflare.com/wallpaper/504/77/190/angkor-wat-cambodia-historic-ruins-architecture-hd-wallpaper-preview.jpg"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
              <li className="gallery-item-likes">
              <span className="visually-hidden">Country:</span>
              <i className="fas fa-heart" aria-hidden="true" /> Combodia
            </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://static.toiimg.com/photo/56063204.cms"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
              <li className="gallery-item-likes">
              <span className="visually-hidden">Country:</span>
              <i className="fas fa-heart" aria-hidden="true" />India
            </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://praguetouristinformation.com/en/wp-content/uploads/2020/11/12-Attraktionen-in-Prag.jpg"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-type">
              <span className="visually-hidden">Gallery</span>
              <i className="fas fa-clone" aria-hidden="true" />
            </div>
            <div className="gallery-item-info">
              <ul>
              <li className="gallery-item-likes">
              <span className="visually-hidden">Country:</span>
              <i className="fas fa-heart" aria-hidden="true" /> Crezh Republic
            </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://paristickets.tours/wp-content/uploads/2022/09/france-eiffel-tower.jpg"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
              <li className="gallery-item-likes">
              <span className="visually-hidden">Country:</span>
              <i className="fas fa-heart" aria-hidden="true" /> Paris
            </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://media.istockphoto.com/id/1202816342/photo/landscape-with-beach-and-palma-de-mallorca-town.webp?b=1&s=170667a&w=0&k=20&c=BpWbZdvxHv_DZCsvc-bB3GCeKWgUbB8sD-2Dh_UaMcA="
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-type">
              <span className="visually-hidden">Gallery</span>
              <i className="fas fa-clone" aria-hidden="true" />
            </div>
            <div className="gallery-item-info">
              <ul>
              <li className="gallery-item-likes">
              <span className="visually-hidden">Country:</span>
              <i className="fas fa-heart" aria-hidden="true" /> Mallorca
            </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://imonkey-blog.imgix.net/blog/wp-content/uploads/2015/07/shutterstock_205246513.jpg"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
              <li className="gallery-item-likes">
              <span className="visually-hidden">Country:</span>
              <i className="fas fa-heart" aria-hidden="true" /> Lithuania
            </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://www.wildfrontierstravel.com/media/cache/page_image_large/upload/mirror/www-wildfrontierstravel-com/2e0a651f_Arenal-Volcano-dreamstime_m_104943315.jpeg"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
              <li className="gallery-item-likes">
              <span className="visually-hidden">Country:</span>
              <i className="fas fa-heart" aria-hidden="true" /> Costa Rica
            </li>
              </ul>
            </div>
          </div>
          <div className="gallery-item" tabIndex={0}>
            <img
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/15/33/f5/fd/inverness.jpg?w=700&h=500&s=1"
              className="gallery-image"
              alt=""
            />
            <div className="gallery-item-info">
              <ul>
              <li className="gallery-item-likes">
              <span className="visually-hidden">Country:</span>
              <i className="fas fa-heart" aria-hidden="true" /> Scotland
            </li>
              </ul>
            </div>
          </div>
        </div>
        </div>
        </div>
        <div className="loader" />
        <div id="footer">
        <div className="container footer-position">
          <div className="row">
            <div className="col-md-12">
              <span>© Photography Tips TV 2022</span>
            </div>
          </div>
        </div>
      </div>
        </div>
  )
}
