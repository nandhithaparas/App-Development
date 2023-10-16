import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Dashboard() {
  const nav=useNavigate();
  const token=localStorage.getItem("jwtToken")
  if(token===null){
    nav("/")
   
  }
  const [user, setuser] = useState([]);
  useEffect(() => {
    const storeduser = JSON.parse(localStorage.getItem('userData')) || [];
    setuser(storeduser);
  }, []);

  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Fetch all data using Axios when the component mounts
    axios
      .get('http://localhost:5054/contact/get')
      .then((response) => {
        setDataList(response.data);
        setLoading(false); // Set loading to false once data is fetched
      })
      .catch((error) => {
        console.error('Failed to fetch data:', error);
        setLoading(false); // Set loading to false in case of an error
      });
  }, []);
  
  return (
  <div>
    <meta charSet="utf-8" />
    <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
    <meta httpEquiv="Content-Language" content="en" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <title>
      Analytics Dashboard
    </title> 
    <link
      href="https://demo.dashboardpack.com/architectui-html-free/main.css"
      rel="stylesheet"
    />
    <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
      <div className="app-header header-shadow">
        <div className="app-header__logo">
          
          <div className="header__pane ml-auto">
            <div>
             
            </div>
          </div>
        </div>
        <div className="app-header__mobile-menu">
          <div>
            
          </div>
        </div>
        <div className="app-header__menu">
          <span>
            <button
              type="button"
              className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
            >
              <span className="btn-icon-wrapper">
                <i className="fa fa-ellipsis-v fa-w-6" />
              </span>
            </button>
          </span>
        </div>{" "}
        <div className="app-header__content">
          <div className="app-header-left">
            <div className="search-wrapper">
             
              <button className="close" />
            </div>
            <ul className="header-menu nav">
             
            </ul>{" "}
          </div>
          <div className="app-header-right">
            <div className="header-btn-lg pr-0">
              <div className="widget-content p-0">
                <div className="widget-content-wrapper">
                  <div className="widget-content-left">
                   
                  </div>
                  <div className="widget-content-left  ml-3 header-user-info">
                    <div className="widget-heading">Kirubha Palanisamy</div>
                    <div className="widget-subheading">Admin</div>
                  </div>
                  <div className="widget-content-right header-user-info ml-3">
                    <button
                      type="button"
                      className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example"
                    >
                      <i className="fa text-white fa-calendar pr-1 pl-1" />
                    </button>
                  </div>
                </div>
              </div>
            </div>{" "}
          </div>
        </div>
      </div>{" "}
      <div className="ui-theme-settings">
        <button
          type="button"
          id="TooltipDemo"
          className="btn-open-options btn btn-warning"
        >
          <i className="fa fa-cog fa-w-16 fa-spin fa-2x" />
        </button>
        <div className="theme-settings__inner">
          <div className="scrollbar-container">
            <div className="theme-settings__options-wrapper">
              <h3 className="themeoptions-heading">Layout Options</h3>
              <div className="p-3">
                <ul className="list-group">
                  <li className="list-group-item">
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-3">
                          <div
                            className="switch has-switch switch-container-class"
                            data-class="fixed-header"
                          >
                            <div className="switch-animate switch-on">
                              <input
                                type="checkbox"
                                defaultChecked=""
                                data-toggle="toggle"
                                data-onstyle="success"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="widget-content-left">
                          <div className="widget-heading">Fixed Header</div>
                          <div className="widget-subheading">
                            Makes the header top fixed, always visible!
                          </div>
                        </div>
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-3">
                          <div
                            className="switch has-switch switch-container-class"
                            data-class="fixed-sidebar"
                          >
                            <div className="switch-animate switch-on">
                              <input
                                type="checkbox"
                                defaultChecked=""
                                data-toggle="toggle"
                                data-onstyle="success"
                              />
                            </div>
                          </div>
                        </div>
                       
                      </div>
                    </div>
                  </li>
                  <li className="list-group-item">
                    <div className="widget-content p-0">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left mr-3">
                          <div
                            className="switch has-switch switch-container-class"
                            data-class="fixed-footer"
                          >
                            <div className="switch-animate switch-off">
                              <input
                                type="checkbox"
                                data-toggle="toggle"
                                data-onstyle="success"
                              />
                            </div>
                          </div>
                        </div>
                        <div className="widget-content-left">
                        </div>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
              
            
              <div className="p-3">
                <ul className="list-group">
                  <li className="list-group-item">
                    <h5 className="pb-2">Choose Color Scheme</h5>
                    <div className="theme-settings-swatches">
                      <div
                        className="swatch-holder bg-primary switch-sidebar-cs-class"
                        data-class="bg-primary sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-secondary switch-sidebar-cs-class"
                        data-class="bg-secondary sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-success switch-sidebar-cs-class"
                        data-class="bg-success sidebar-text-dark"
                      ></div>
                      <div
                        className="swatch-holder bg-info switch-sidebar-cs-class"
                        data-class="bg-info sidebar-text-dark"
                      ></div>
                      <div
                        className="swatch-holder bg-warning switch-sidebar-cs-class"
                        data-class="bg-warning sidebar-text-dark"
                      ></div>
                      <div
                        className="swatch-holder bg-danger switch-sidebar-cs-class"
                        data-class="bg-danger sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-light switch-sidebar-cs-class"
                        data-class="bg-light sidebar-text-dark"
                      ></div>
                      <div
                        className="swatch-holder bg-dark switch-sidebar-cs-class"
                        data-class="bg-dark sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-focus switch-sidebar-cs-class"
                        data-class="bg-focus sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-alternate switch-sidebar-cs-class"
                        data-class="bg-alternate sidebar-text-light"
                      ></div>
                      <div className="divider"></div>
                      <div
                        className="swatch-holder bg-vicious-stance switch-sidebar-cs-class"
                        data-class="bg-vicious-stance sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-midnight-bloom switch-sidebar-cs-class"
                        data-class="bg-midnight-bloom sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-night-sky switch-sidebar-cs-class"
                        data-class="bg-night-sky sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-slick-carbon switch-sidebar-cs-class"
                        data-class="bg-slick-carbon sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-asteroid switch-sidebar-cs-class"
                        data-class="bg-asteroid sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-royal switch-sidebar-cs-class"
                        data-class="bg-royal sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-warm-flame switch-sidebar-cs-class"
                        data-class="bg-warm-flame sidebar-text-dark"
                      ></div>
                      <div
                        className="swatch-holder bg-night-fade switch-sidebar-cs-class"
                        data-class="bg-night-fade sidebar-text-dark"
                      ></div>
                      <div
                        className="swatch-holder bg-sunny-morning switch-sidebar-cs-class"
                        data-class="bg-sunny-morning sidebar-text-dark"
                      ></div>
                      <div
                        className="swatch-holder bg-tempting-azure switch-sidebar-cs-class"
                        data-class="bg-tempting-azure sidebar-text-dark"
                      ></div>
                      <div
                        className="swatch-holder bg-amy-crisp switch-sidebar-cs-class"
                        data-class="bg-amy-crisp sidebar-text-dark"
                      ></div>
                      <div
                        className="swatch-holder bg-heavy-rain switch-sidebar-cs-class"
                        data-class="bg-heavy-rain sidebar-text-dark"
                      ></div>
                      <div
                        className="swatch-holder bg-mean-fruit switch-sidebar-cs-class"
                        data-class="bg-mean-fruit sidebar-text-dark"
                      ></div>
                      <div
                        className="swatch-holder bg-malibu-beach switch-sidebar-cs-class"
                        data-class="bg-malibu-beach sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-deep-blue switch-sidebar-cs-class"
                        data-class="bg-deep-blue sidebar-text-dark"
                      ></div>
                      <div
                        className="swatch-holder bg-ripe-malin switch-sidebar-cs-class"
                        data-class="bg-ripe-malin sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-arielle-smile switch-sidebar-cs-class"
                        data-class="bg-arielle-smile sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-plum-plate switch-sidebar-cs-class"
                        data-class="bg-plum-plate sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-happy-fisher switch-sidebar-cs-class"
                        data-class="bg-happy-fisher sidebar-text-dark"
                      ></div>
                      <div
                        className="swatch-holder bg-happy-itmeo switch-sidebar-cs-class"
                        data-class="bg-happy-itmeo sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-mixed-hopes switch-sidebar-cs-class"
                        data-class="bg-mixed-hopes sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-strong-bliss switch-sidebar-cs-class"
                        data-class="bg-strong-bliss sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-grow-early switch-sidebar-cs-class"
                        data-class="bg-grow-early sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-love-kiss switch-sidebar-cs-class"
                        data-class="bg-love-kiss sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-premium-dark switch-sidebar-cs-class"
                        data-class="bg-premium-dark sidebar-text-light"
                      ></div>
                      <div
                        className="swatch-holder bg-happy-green switch-sidebar-cs-class"
                        data-class="bg-happy-green sidebar-text-light"
                      ></div>
                    </div>
                  </li>
                </ul>
              </div>
              <h3 className="themeoptions-heading">
                <div>Main Content Options</div>
                <button
                  type="button"
                  className="btn-pill btn-shadow btn-wide ml-auto active btn btn-focus btn-sm"
                >
                  Restore Default
                </button>
              </h3>
              <div className="p-3">
                <ul className="list-group">
                  <li className="list-group-item">
                    <h5 className="pb-2">Page Section Tabs</h5>
                    <div className="theme-settings-swatches">
                      <div role="group" className="mt-2 btn-group">
                        <button
                          type="button"
                          className="btn-wide btn-shadow btn-primary btn btn-secondary switch-theme-class"
                          data-class="body-tabs-line"
                        >
                          Line
                        </button>
                        <button
                          type="button"
                          className="btn-wide btn-shadow btn-primary active btn btn-secondary switch-theme-class"
                          data-class="body-tabs-shadow"
                        >
                          Shadow
                        </button>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>{" "}
      <div className="app-main">
        <div className="app-sidebar sidebar-shadow">
          <div className="app-header__logo">
            <div className="logo-src" />
            <div className="header__pane ml-auto">
              <div>
                <button
                  type="button"
                  className="hamburger close-sidebar-btn hamburger--elastic"
                  data-class="closed-sidebar"
                >
                  <span className="hamburger-box">
                    <span className="hamburger-inner" />
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="app-header__mobile-menu">
            <div>
              <button
                type="button"
                className="hamburger hamburger--elastic mobile-toggle-nav"
              >
                <span className="hamburger-box">
                  <span className="hamburger-inner" />
                </span>
              </button>
            </div>
          </div>
          <div className="app-header__menu">
            <span>
              <button
                type="button"
                className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
              >
                <span className="btn-icon-wrapper">
                  <i className="fa fa-ellipsis-v fa-w-6" />
                </span>
              </button>
            </span>
          </div>{" "}
          <div className="scrollbar-sidebar">
            <div className="app-sidebar__inner">
              <ul className="vertical-nav-menu">
                <li className="app-sidebar__heading">Dashboards</li>
                <li>
                  <Link to="/" className="mm-active">
                    <i className="metismenu-icon pe-7s-rocket" />
                    Dashboard Example 1
                  </Link>
                </li>
                <li>
                 
                  <ul>
                    
                  </ul>
                </li>
                <li>
                <Link to="/">
                   
                    <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                  </Link>
                  <ul>
                  </ul>
                </li>
                <Link to="/home"><li className="app-sidebar__heading">Home</li></Link>
                <br />
                <Link to="/"><li className="app-sidebar__heading">Logout</li></Link>
                <br />
                <Link to="/profile"><li className="app-sidebar__heading">Profile</li></Link>
              </ul>
            </div>
          </div>
        </div>{" "}
        <div className="app-main__outer">
          <div className="app-main__inner">
            <div className="app-page-title">
              <div className="page-title-wrapper">
                <div className="page-title-heading">
                  <div className="page-title-icon">
                    <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                  </div>
                  <div>
                    Analytics Dashboard
                  </div>
                </div>
                <div className="page-title-actions">
                  
                  <div className="d-inline-block dropdown">
                 
                    <div
                      tabIndex={-1}
                      role="menu"
                      aria-hidden="true"
                      className="dropdown-menu dropdown-menu-right"
                    >
                      <ul className="nav flex-column">
                        <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="nav-link-icon lnr-inbox" />
                            <span>Inbox</span>
                            <div className="ml-auto badge badge-pill badge-secondary">
                              86
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/" className="nav-link">
                            <i className="nav-link-icon lnr-book" />
                            <span>Book</span>
                            <div className="ml-auto badge badge-pill badge-danger">
                              5
                            </div>
                          </Link>
                        </li>
                        <li className="nav-item">
                        <Link to="/"className="nav-link">
                            <i className="nav-link-icon lnr-picture" />
                            <span>Picture</span>
                          </Link>
                        </li>
                        <li className="nav-item">
                          <Link
                            disabled=""
                            to="/"
                            className="nav-link disabled"
                          >
                            <i className="nav-link-icon lnr-file-empty" />
                            <span>File Disabled</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
              </div>
            </div>{" "}
            <div className="row">
              <div className="col-md-6 col-xl-4">
                <div className="card mb-3 widget-content bg-midnight-bloom">
                  <div className="widget-content-wrapper text-white">
                    <div className="widget-content-left">
                      <div className="widget-heading">Total Orders</div>
                      <div className="widget-subheading">Last year expenses</div>
                    </div>
                    <div className="widget-content-right">
                      <div className="widget-numbers text-white">
                        <span>1896</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="card mb-3 widget-content bg-arielle-smile">
                  <div className="widget-content-wrapper text-white">
                    <div className="widget-content-left">
                      <div className="widget-heading">Clients</div>
                      <div className="widget-subheading">
                        Total Clients Profit
                      </div>
                    </div>
                    <div className="widget-content-right">
                      <div className="widget-numbers text-white">
                        <span>$ 568</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="card mb-3 widget-content bg-grow-early">
                  <div className="widget-content-wrapper text-white">
                    <div className="widget-content-left">
                      <div className="widget-heading">Followers</div>
                      <div className="widget-subheading">People Interested</div>
                    </div>
                    <div className="widget-content-right">
                      <div className="widget-numbers text-white">
                        <span>46%</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                <div className="card mb-3 widget-content bg-premium-dark">
                  <div className="widget-content-wrapper text-white">
                    <div className="widget-content-left">
                      <div className="widget-heading">Products Sold</div>
                      <div className="widget-subheading">Revenue streams</div>
                    </div>
                    <div className="widget-content-right">
                      <div className="widget-numbers text-warning">
                        <span>$14M</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12 col-lg-6">
                <div className="mb-3 card">
                  <div className="card-header-tab card-header-tab-animation card-header">
                    <div className="card-header-title">
                      <i className="header-icon lnr-apartment icon-gradient bg-love-kiss">
                        {" "}
                      </i>
                      Sales Report
                    </div>
                    <ul className="nav">
                      <li className="nav-item">
                      <Link to="/" className="active nav-link">
                          Last
                        </Link>
                      </li>
                      <li className="nav-item">
                      <Link to="/"
                          className="nav-link second-tab-toggle"
                        >
                          Current
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <div className="card-body">
                    <div className="tab-content">
                      <div className="tab-pane fade show active" id="tabs-eg-77">
                        <div className="card mb-3 widget-chart widget-chart2 text-left w-100">
                          <div className="widget-chat-wrapper-outer">
                            <div className="widget-chart-wrapper widget-chart-wrapper-lg opacity-10 m-0">
                              <canvas id="canvas" />
                            </div>
                          </div>
                        </div>
                        <h6 className="text-muted text-uppercase font-size-md opacity-5 font-weight-normal">
                          Top Authors
                        </h6>
                        <div className="scroll-area-sm">
                          <div className="scrollbar-container">
                            <ul className="rm-list-borders rm-list-borders-scroll list-group list-group-flush">
                              <li className="list-group-item">
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <img
                                        width={42}
                                        className="rounded-circle"
                                        src="assets/images/avatars/9.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="widget-content-left">
                                      <div className="widget-heading">
                                        Ella-Rose Henry
                                      </div>
                                      <div className="widget-subheading">
                                        Web Developer
                                      </div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="font-size-xlg text-muted">
                                        <small className="opacity-5 pr-1">
                                          $
                                        </small>
                                        <span>129</span>
                                        <small className="text-danger pl-2">
                                          <i className="fa fa-angle-down" />
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item">
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <img
                                        width={42}
                                        className="rounded-circle"
                                        src="assets/images/avatars/5.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="widget-content-left">
                                      <div className="widget-heading">
                                        Ruben Tillman
                                      </div>
                                      <div className="widget-subheading">
                                        UI Designer
                                      </div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="font-size-xlg text-muted">
                                        <small className="opacity-5 pr-1">
                                          $
                                        </small>
                                        <span>54</span>
                                        <small className="text-success pl-2">
                                          <i className="fa fa-angle-up" />
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item">
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <img
                                        width={42}
                                        className="rounded-circle"
                                        src="assets/images/avatars/4.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="widget-content-left">
                                      <div className="widget-heading">
                                        Vinnie Wagstaff
                                      </div>
                                      <div className="widget-subheading">
                                        Java Programmer
                                      </div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="font-size-xlg text-muted">
                                        <small className="opacity-5 pr-1">
                                          $
                                        </small>
                                        <span>429</span>
                                        <small className="text-warning pl-2">
                                          <i className="fa fa-dot-circle" />
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item">
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <img
                                        width={42}
                                        className="rounded-circle"
                                        src="assets/images/avatars/3.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="widget-content-left">
                                      <div className="widget-heading">
                                        Ella-Rose Henry
                                      </div>
                                      <div className="widget-subheading">
                                        Web Developer
                                      </div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="font-size-xlg text-muted">
                                        <small className="opacity-5 pr-1">
                                          $
                                        </small>
                                        <span>129</span>
                                        <small className="text-danger pl-2">
                                          <i className="fa fa-angle-down" />
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                              <li className="list-group-item">
                                <div className="widget-content p-0">
                                  <div className="widget-content-wrapper">
                                    <div className="widget-content-left mr-3">
                                      <img
                                        width={42}
                                        className="rounded-circle"
                                        src="assets/images/avatars/2.jpg"
                                        alt=""
                                      />
                                    </div>
                                    <div className="widget-content-left">
                                      <div className="widget-heading">
                                        Ruben Tillman
                                      </div>
                                      <div className="widget-subheading">
                                        UI Designer
                                      </div>
                                    </div>
                                    <div className="widget-content-right">
                                      <div className="font-size-xlg text-muted">
                                        <small className="opacity-5 pr-1">
                                          $
                                        </small>
                                        <span>54</span>
                                        <small className="text-success pl-2">
                                          <i className="fa fa-angle-up" />
                                        </small>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6">
                <div className="mb-3 card">
                  <div className="card-header-tab card-header">
                    <div className="card-header-title">
                      <i className="header-icon lnr-rocket icon-gradient bg-tempting-azure">
                        {" "}
                      </i>
                      Contact Reports
                    </div>
                    <div className="btn-actions-pane-right">
                      
                        <Link to="/"
                          className="ml-1 btn-pill btn-wide border-0 btn-transition  btn btn-outline-alternate second-tab-toggle-alt"
                        >
                          Delete
                        </Link>
                      
                    </div>
                  </div>
                  <div className="tab-content">
                    <div className="tab-pane fade active show" id="tab-eg-55">
                      <div className="widget-chart p-3">
                     
                        
                            <i className="fa fa-arrow-left" />
                            <span className="pl-1"></span>
                            <span className="text-muted opacity-8 pl-1">
                            {loading ? (
                              <p>Loading data...</p>
                            ) : (
                              <div className="data-table">
                                <h2>Data Table</h2>
                                <table>
                                  <thead>
                                    <tr>
                                      <th>Name</th>
                                      <th>Email</th>
                                      <th>Message</th>
                                    </tr>
                                  </thead>
                                  <tbody>
                                    {dataList.map((data, index) => (
                                      <tr key={index}>
                                        <td>{data.name || 'N/A'}</td>
                                        <td>{data.email || 'N/A'}</td>
                                        <td>{data.msg || 'N/A'}</td>
                                      </tr>
                                    ))}
                                  </tbody>
                                </table>
                              </div>
                            )}
                            
                            </span>
                          
                      </div>
                      <div className="pt-2 card-body">
                        <div className="row">
                          <div className="col-md-6">
                            <div className="widget-content">
                              <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left">
                                    <div className="widget-numbers fsize-3 text-muted">
                                      {/*63%*/}
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="text-muted opacity-6">
                                      Generated Leads
                                    </div>
                                  </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                  <div className="progress-bar-sm progress-bar-animated-alt progress">
                                    <div
                                      className="progress-bar bg-danger"
                                      role="progressbar"
                                      aria-valuenow={63}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                      style={{ width: "63%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="widget-content">
                              <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left">
                                    <div className="widget-numbers fsize-3 text-muted">
                                     {/*63%*/}
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="text-muted opacity-6">
                                      Submitted Tickers
                                    </div>
                                  </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                  <div className="progress-bar-sm progress-bar-animated-alt progress">
                                    <div
                                      className="progress-bar bg-success"
                                      role="progressbar"
                                      aria-valuenow={32}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                      style={{ width: "32%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="widget-content">
                              <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left">
                                    <div className="widget-numbers fsize-3 text-muted">
                                      {/*63%*/}
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="text-muted opacity-6">
                                      Server Allocation
                                    </div>
                                  </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                  <div className="progress-bar-sm progress-bar-animated-alt progress">
                                    <div
                                      className="progress-bar bg-primary"
                                      role="progressbar"
                                      aria-valuenow={71}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                      style={{ width: "71%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-md-6">
                            <div className="widget-content">
                              <div className="widget-content-outer">
                                <div className="widget-content-wrapper">
                                  <div className="widget-content-left">
                                    <div className="widget-numbers fsize-3 text-muted">
                                     {/*63%*/}
                                    </div>
                                  </div>
                                  <div className="widget-content-right">
                                    <div className="text-muted opacity-6">
                                      Generated Leads
                                    </div>
                                  </div>
                                </div>
                                <div className="widget-progress-wrapper mt-1">
                                  <div className="progress-bar-sm progress-bar-animated-alt progress">
                                    <div
                                      className="progress-bar bg-warning"
                                      role="progressbar"
                                      aria-valuenow={41}
                                      aria-valuemin={0}
                                      aria-valuemax={100}
                                      style={{ width: "41%" }}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-xl-4">
                <div className="card mb-3 widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left">
                        <div className="widget-heading">Total Orders</div>
                        <div className="widget-subheading">
                          Last year expenses
                        </div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-success">1896</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="card mb-3 widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left">
                        <div className="widget-heading">Products Sold</div>
                        <div className="widget-subheading">Revenue streams</div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-warning">$3M</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-xl-4">
                <div className="card mb-3 widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left">
                        <div className="widget-heading">Followers</div>
                        <div className="widget-subheading">People Interested</div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-danger">45,9%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-xl-none d-lg-block col-md-6 col-xl-4">
                <div className="card mb-3 widget-content">
                  <div className="widget-content-outer">
                    <div className="widget-content-wrapper">
                      <div className="widget-content-left">
                        <div className="widget-heading">Income</div>
                        <div className="widget-subheading">Expected totals</div>
                      </div>
                      <div className="widget-content-right">
                        <div className="widget-numbers text-focus">$147</div>
                      </div>
                    </div>
                    <div className="widget-progress-wrapper">
                      <div className="progress-bar-sm progress-bar-animated-alt progress">
                        <div
                          className="progress-bar bg-info"
                          role="progressbar"
                          aria-valuenow={54}
                          aria-valuemin={0}
                          aria-valuemax={100}
                          style={{ width: "54%" }}
                        />
                      </div>
                      <div className="progress-sub-label">
                        <div className="sub-label-left">Expenses</div>
                        <div className="sub-label-right">100%</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="main-card mb-3 card">
                  <div className="card-header">
                    Active Users
                    <div className="btn-actions-pane-right">
                      <div role="group" className="btn-group-sm btn-group">
                        <button className="active btn btn-focus">
                          Last Week
                        </button>
                        <button className="btn btn-focus">All Month</button>
                      </div>
                    </div>
                  </div>
                  <div className="table-responsive">
                    <table className="align-middle mb-0 table table-borderless table-striped table-hover">
                      <thead>
                        <tr>
                          <th className="text-center">#</th>
                          <th>Name</th>
                          <th className="text-center">City</th>
                          <th className="text-center">Status</th>
                          <th className="text-center">Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="text-center text-muted">#345</td>
                          <td>
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-3">
                                  <div className="widget-content-left">
                                    <img
                                      width={40}
                                      className="rounded-circle"
                                      src="assets/images/avatars/4.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="widget-content-left flex2">
                                  <div className="widget-heading">John Doe</div>
                                  <div className="widget-subheading opacity-7">
                                    Web Developer
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">Madrid</td>
                          <td className="text-center">
                            <div className="badge badge-warning">Pending</div>
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              id="PopoverCustomT-1"
                              className="btn btn-primary btn-sm"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center text-muted">#347</td>
                          <td>
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-3">
                                  <div className="widget-content-left">
                                    <img
                                      width={40}
                                      className="rounded-circle"
                                      src="assets/images/avatars/3.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="widget-content-left flex2">
                                  <div className="widget-heading">
                                    Ruben Tillman
                                  </div>
                                  <div className="widget-subheading opacity-7">
                                    Etiam sit amet orci eget
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">Berlin</td>
                          <td className="text-center">
                            <div className="badge badge-success">Completed</div>
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              id="PopoverCustomT-2"
                              className="btn btn-primary btn-sm"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center text-muted">#321</td>
                          <td>
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-3">
                                  <div className="widget-content-left">
                                    <img
                                      width={40}
                                      className="rounded-circle"
                                      src="assets/images/avatars/2.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="widget-content-left flex2">
                                  <div className="widget-heading">
                                    Elliot Huber
                                  </div>
                                  <div className="widget-subheading opacity-7">
                                    Lorem ipsum dolor sic
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">London</td>
                          <td className="text-center">
                            <div className="badge badge-danger">In Progress</div>
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              id="PopoverCustomT-3"
                              className="btn btn-primary btn-sm"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                        <tr>
                          <td className="text-center text-muted">#55</td>
                          <td>
                            <div className="widget-content p-0">
                              <div className="widget-content-wrapper">
                                <div className="widget-content-left mr-3">
                                  <div className="widget-content-left">
                                    <img
                                      width={40}
                                      className="rounded-circle"
                                      src="assets/images/avatars/1.jpg"
                                      alt=""
                                    />
                                  </div>
                                </div>
                                <div className="widget-content-left flex2">
                                  <div className="widget-heading">
                                    Vinnie Wagstaff
                                  </div>
                                  <div className="widget-subheading opacity-7">
                                    UI Designer
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                          <td className="text-center">Amsterdam</td>
                          <td className="text-center">
                            <div className="badge badge-info">On Hold</div>
                          </td>
                          <td className="text-center">
                            <button
                              type="button"
                              id="PopoverCustomT-4"
                              className="btn btn-primary btn-sm"
                            >
                              Details
                            </button>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="d-block text-center card-footer">
                    <button className="mr-2 btn-icon btn-icon-only btn btn-outline-danger">
                      <i className="pe-7s-trash btn-icon-wrapper"> </i>
                    </button>
                    <button className="btn-wide btn btn-success">Save</button>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="card-shadow-danger mb-3 widget-chart widget-chart2 text-left card">
                  <div className="widget-content">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left pr-2 fsize-1">
                          <div className="widget-numbers mt-0 fsize-3 text-danger">
                            71%
                          </div>
                        </div>
                        <div className="widget-content-right w-100">
                          <div className="progress-bar-xs progress">
                            <div
                              className="progress-bar bg-danger"
                              role="progressbar"
                              aria-valuenow={71}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "71%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="widget-content-left fsize-1">
                        <div className="text-muted opacity-6">Income Target</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card-shadow-success mb-3 widget-chart widget-chart2 text-left card">
                  <div className="widget-content">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left pr-2 fsize-1">
                          <div className="widget-numbers mt-0 fsize-3 text-success">
                            54%
                          </div>
                        </div>
                        <div className="widget-content-right w-100">
                          <div className="progress-bar-xs progress">
                            <div
                              className="progress-bar bg-success"
                              role="progressbar"
                              aria-valuenow={54}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "54%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="widget-content-left fsize-1">
                        <div className="text-muted opacity-6">
                          Expenses Target
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card-shadow-warning mb-3 widget-chart widget-chart2 text-left card">
                  <div className="widget-content">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left pr-2 fsize-1">
                          <div className="widget-numbers mt-0 fsize-3 text-warning">
                            32%
                          </div>
                        </div>
                        <div className="widget-content-right w-100">
                          <div className="progress-bar-xs progress">
                            <div
                              className="progress-bar bg-warning"
                              role="progressbar"
                              aria-valuenow={32}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "32%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="widget-content-left fsize-1">
                        <div className="text-muted opacity-6">
                          Spendings Target
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="card-shadow-info mb-3 widget-chart widget-chart2 text-left card">
                  <div className="widget-content">
                    <div className="widget-content-outer">
                      <div className="widget-content-wrapper">
                        <div className="widget-content-left pr-2 fsize-1">
                          <div className="widget-numbers mt-0 fsize-3 text-info">
                            89%
                          </div>
                        </div>
                        <div className="widget-content-right w-100">
                          <div className="progress-bar-xs progress">
                            <div
                              className="progress-bar bg-info"
                              role="progressbar"
                              aria-valuenow={89}
                              aria-valuemin={0}
                              aria-valuemax={100}
                              style={{ width: "89%" }}
                            />
                          </div>
                        </div>
                      </div>
                      <div className="widget-content-left fsize-1">
                        <div className="text-muted opacity-6">Totals Target</div>
                      </div>
                    </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="app-wrapper-footer">
          </div>{" "}
        </div>
      </div>
    </div>
 
    )
  }