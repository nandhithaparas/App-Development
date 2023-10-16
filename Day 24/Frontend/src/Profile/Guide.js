import React from 'react'
import './Guide.css'

export default function Guide() {
  return (
    <div>
    <>
  <header className="headercity">
    <div className="containercity">
      
        <h1 style={{color:'white'}}>Wanderlenses</h1>
     
      <nav className="menu">
        <ul className="menu-list">
          <li className="menu-list-item">
            <a className="menu-link" href="#tower">
              TOWER
            </a>
          </li>
          <li className="menu-list-item">
            <a className="menu-link" href="#aenso">
              AENSO JI
            </a>
          </li>
          <li className="menu-list-item">
            <a className="menu-link" href="#ueno">
              UENO PARK
            </a>
          </li>
          <li className="menu-list-item">
            <a className="menu-link" href="#asakusa">
              ASAKUSA
            </a>
          </li>
          <li className="menu-list-item">
            <a className="menu-link" href="#skytree">
              SKYTREE
            </a>
          </li>
          <li className="menu-list-item">
            <a className="menu-link" href="#ginza">
              GINZA
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <div className="header-title">
      <h1 className="header-title-about">
        Let's Explore JAPAN
      </h1>
    </div>
  </header>
  <div className="page">
    <main className="main-content">
      <div className="travel-articles">
        <article className="travel">
          <div className="travel-preview">
            <img
              className="travel-img"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0a/2a/41/27/photo0jpg.jpg?w=500&h=-1&s=1" height='290px'
              alt="Идущий по линии прибоя силуэт"
            />
          </div>
          <div className="travel-info">
            <ul className="tags-list">
              <li>
                <a className="tag-list" href="#0">
                  TRAVEL
                </a>
              </li>
              <li>
                <a className="tag-list" href="#0">
                  NIGHT
                </a>
              </li>
            </ul>
            <h3 className="travel-name">
              <a className="page-link" id="tower" href="#0">
                TOKYO TOWER
              </a>
            </h3>
            <ul className="date-autor-list">
              <li className="date-autor-list">
                <time className="card-date" Time="10:30 a.m -8:00 p.m">
                  All Days
                </time>
              </li>
              <li className="date-autor-list">
                <p className="author">Best place to visit in night</p>
              </li>
            </ul>
            <div className="travel-description">
              <p>
              One of the most striking places to visit in Tokyo is the Tokyo Tower, perhaps the most recognizable structure in all of Japan.  
               The tower is a symbol of Japanese recovery after the Second World War and the fact that the country has now become a major economic superpower.
              </p>
            </div>
          </div>
        </article>
        <article className="travel">
          <div className="travel-preview">
            <img
              className="travel-img"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1a/3d/a5/07/caption.jpg?w=500&h=400&s=1" height='300px'
              alt="Йога на пляже"
            />
          </div>
          <div className="travel-info">
            <ul className="tags-list">
              <li>
                <a className="tag-list" href="#0">
                  DEVINE
                </a>
              </li>
              <li>
                <a className="tag-list" href="#0">
                  CALM
                </a>
              </li>
            </ul>
            <h3 className="travel-name">
              <a className="page-link" id="aenso" href="#0">
               AENSO JI TEMPLE
              </a>
            </h3>
            <ul className="date-autor-list">
              <li className="date-autor-list">
                <time className="card-date" dateTime="2019-06-10">
                  All Days
                </time>
              </li>
              <li className="author">Place of Divine</li>
            </ul>
            <div className="travel-description">
              <p>
              It’s Tokyo’s oldest temple, built in the 628 and 
              rebuilt after it was completely destroyed during the war.
              According to legend, two brothers kept trying to return a statue of Kannon, the goddess of mercy,
               to the Sumida River only to have it returned to them the next day.
               This temple located in Tokyo's Asakusa district was built to honor her.
              </p>
            </div>
          </div>
        </article>
        <article className="travel">
          <div className="travel-preview">
            <img
              className="travel-img"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/2a/94/c5/2a/caption.jpg?w=500&h=400&s=1" height='300px'
              alt="Девушка на летнем концерте"
            />
          </div>
          <div className="travel-info">
            <ul className="tags-list">
              <li>
                <a className="tag-list" href="#0">
                  NATURE AND FUN
                </a>
              </li>
            </ul>
            <h3 className="travel-name">
              <a className="page-link" id="ueno" href="#0">
                UENO PARK
              </a>
            </h3>
            <ul className="date-autor-list">
              <li className="date-autor-list">
                <time className="card-date" dateTime="2019-06-10">
                  WeekEnd
                </time>
              </li>
              <li className="date-autor-list">
                <p className="author">Do whatever you want without fear</p>
              </li>
            </ul>
            <div className="travel-description">
              <p>
              This large park is a favorite destination of Tokyo residents, and within can be found many of the city's main attractions 
              including the Tokyo National Museum, Ueno Zoo and the National Museum of Western Art.
              </p>
            </div>
          </div>
        </article>
        <article className="travel">
          <div className="travel-preview">
            <img
              className="travel-img"
              src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/80/7a/35/caption.jpg?w=500&h=400&s=1" height='300px'
              alt="Красивый обед на деревянном столе"
            />
          </div>
          <div className="travel-info">
            <ul className="tags-list">
              <li>
                <a className="tag-list" href="#0">
                  Lifestyle
                </a>
              </li>
              <li>
                <a className="tag-list" href="#0">
                  Food
                </a>
              </li>
            </ul>
            <h3 className="travel-name">
              <a className="page-link" id="asakusa" href="#0">
                ASAKUSA
              </a>
            </h3>
            <ul className="date-autor-list">
              <li className="date-autor-list">
                <time className="card-date" dateTime="2019-06-10">
                  All Days
                </time>
              </li>
              <li className="date-autor-list">
                <p className="author">Explore your mind</p>
              </li>
            </ul>
            <div className="travel-description">
              <p>
              The 10th century Sensoji temple, destroyed in WWII and rebuilt to resemble the original in 1960, 
              is the centre piece of this vast complex. The Kaminarimon Gate's front entrance 
              is adorned with huge paper lanterns as well as massive statues of two deities.
              </p>
            </div>
          </div>
        </article>
        <article className="travel">
          <div className="travel-preview">
            <img
              className="travel-img"
              src="https://netology-code.github.io/html-2-diploma/sources/images/last-post5.jpg"
              alt="Модная подушка"
            />
          </div>
          <div className="travel-info">
            <ul className="tags-list">
              <li>
                <a className="tag-list" href="#">
                  Lifestyle
                </a>
              </li>
              <li>
                <a className="tag-list" href="#">
                  Interior
                </a>
              </li>
              <li>
                <a className="tag-list" href="#">
                  Art
                </a>
              </li>
            </ul>
            <h3 className="travel-name">
              <a className="page-link" id="skytree" href="#0">
                делаем модные принты на подушках
              </a>
            </h3>
            <ul className="date-autor-list">
              <li className="date-autor-list">
                <time className="card-date" dateTime="2019-06-10">
                  10 июня 2019
                </time>
              </li>
              <li className="date-autor-list">
                <p className="author">Неизвестный автор</p>
              </li>
            </ul>
            <div className="travel-description">
              <p>
              The 10th century Sensoji temple, destroyed in WWII and rebuilt to resemble the original in 1960, 
              is the centre piece of this vast complex. The Kaminarimon Gate's front entrance 
              is adorned with huge paper lanterns as well as massive statues of two deities.
              </p>
            </div>
          </div>
        </article>
        <article className="travel">
          <div className="travel-preview">
            <img
              className="travel-img"
              src="https://netology-code.github.io/html-2-diploma/sources/images/last-post6.jpg"
              alt="Два человека в горах"
            />
          </div>
          <div className="travel-info">
            <ul className="tags-list">
              <li>
                <a className="tag-list" href="#0">
                  TRAVEL
                </a>
              </li>
              <li>
                <a className="tag-list" href="#0">
                  Lifestyle
                </a>
              </li>
            </ul>
            <h3 className="travel-name">
              <a className="page-link" id="ginza" href="#0">
                Как первый раз отправиться в горы?
              </a>
            </h3>
            <ul className="date-autor-list">
              <li className="date-autor-list">
                <time className="card-date" dateTime="2019-06-10">
                  10 июня 2019
                </time>
              </li>
              <li className="date-autor-list">
                <p className="author">Неизвестный автор</p>
              </li>
            </ul>
            <div className="travel-description">
              <p>
              The 10th century Sensoji temple, destroyed in WWII and rebuilt to resemble the original in 1960, 
              is the centre piece of this vast complex. The Kaminarimon Gate's front entrance 
              is adorned with huge paper lanterns as well as massive statues of two deities.
              </p>
            </div>
          </div>
        </article>
        <article className="travel">
          <div className="travel-preview">
            <img
              className="travel-img"
              src="https://netology-code.github.io/html-2-diploma/sources/images/last-post4.jpg"
              alt="Красивый обед на деревянном столе"
            />
          </div>
          <div className="travel-info">
            <ul className="tags-list">
              <li>
                <a className="tag-list" href="#0">
                  Lifestyle
                </a>
              </li>
              <li>
                <a className="tag-list" href="#0">
                  Food
                </a>
              </li>
            </ul>
            <h3 className="travel-name">
              <a className="page-link" href="#0">
                Наукоёмкий подход к кулинарии
              </a>
            </h3>
            <ul className="date-autor-list">
              <li className="date-autor-list">
                <time className="card-date" dateTime="2019-06-10">
                  10 июня 2019
                </time>
              </li>
              <li className="date-autor-list">
                <p className="author">Неизвестный автор</p>
              </li>
            </ul>
            <div className="travel-description">
              <p>
              The 10th century Sensoji temple, destroyed in WWII and rebuilt to resemble the original in 1960, 
              is the centre piece of this vast complex. The Kaminarimon Gate's front entrance 
              is adorned with huge paper lanterns as well as massive statues of two deities.
              </p>
            </div>
          </div>
        </article>
      </div>
    </main>
    <aside className="aside-content">
      <section className="side-bar">
        <h3 className="last-news-title">Новые посты</h3>
        <section className="post-list">
          <div className="preview-picture">
            <img
              className="aside-image"
              src="https://netology-code.github.io/html-2-diploma/sources/images/2.jpg"
              alt="Идущий по линии прибоя силуэт"
            />
          </div>
          <article className="last-post-header">
            <time className="last-post-date" dateTime="2019-06-14">
              14 июня 2019{" "}
            </time>
            <h3 className="last-post-title">
              <a href="#0" className="last-post-link">
                10 мест, ради которых стоит проснуться{" "}
              </a>
            </h3>
          </article>
        </section>
        <section className="post-list">
          <div className="preview-picture">
            <img
              className="aside-image"
              src="https://netology-code.github.io/html-2-diploma/sources/images/151.jpg"
              alt="Йога дома"
            />
          </div>
          <article className="last-post-header">
            <time className="last-post-date" dateTime="2019-06-14">
              14 июня 2019{" "}
            </time>
            <h3 className="last-post-title">
              <a href="#0" className="last-post-link">
                Йога для домашних{" "}
              </a>
            </h3>
          </article>
        </section>
        <section className="post-list">
          <div className="preview-picture">
            <img
              className="aside-image"
              src="https://netology-code.github.io/html-2-diploma/sources/images/45.jpg"
              alt="Кресло"
            />
          </div>
          <article className="last-post-header">
            <time className="last-post-date" dateTime="2019-06-14">
              14 июня 2019{" "}
            </time>
            <h3 className="last-post-title">
              <a href="#0" className="last-post-link">
                как мы превратили классное место в балкон{" "}
              </a>
            </h3>
          </article>
        </section>
        <section className="post-list">
          <div className="preview-picture">
            <img
              className="aside-image"
              src="https://netology-code.github.io/html-2-diploma/sources/images/501.jpg"
              alt="Красивый обед на деревянном столе"
            />
          </div>
          <article className="last-post-header">
            <time className="last-post-date" dateTime="2019-06-14">
              14 июня 2019{" "}
            </time>
            <h3 className="last-post-title">
              <a href="#0" className="last-post-link">
                Кулинарный подход к науке{" "}
              </a>
            </h3>
          </article>
        </section>
        <section className="post-list">
          <div className="preview-picture">
            <img
              className="aside-image"
              src="https://netology-code.github.io/html-2-diploma/sources/images/7.jpg"
              alt="Длинные волосы трех девушек"
            />
          </div>
          <article className="last-post-header">
            <time className="last-post-date" dateTime="2019-06-14">
              14 июня 2019{" "}
            </time>
            <h3 className="last-post-title">
              <a href="#0" className="last-post-link">
                лучшие прически для распущенных волос{" "}
              </a>
            </h3>
          </article>
        </section>
      </section>
      <section className="search-section">
        <form className="search">
          <label className="search-group">
            <span className="visually-hidden">
               можете что-то найти? Используйте поиск!
            </span>
            <input
              className="field"
              name="query"
              placeholder="Найти..."
              required=""
            />
          </label>
          <button className="button" />
        </form>
      </section>
      <section className="send-section">
        <h3 className="send-title">Рассылка</h3>
        <form className="subscription">
          <label className="subscription-group">
            <span className="visually-hidden">
              Подпишитесь! Свежие новости, актуальные статьи!
            </span>
            <input
              className="send-field"
              placeholder="Ваш email-адрес"
              type="email"
              required=""
            />
          </label>
          <button className="send-button">Подписаться</button>
        </form>
      </section>
      <section className="aside-tags-section">
        <h3 className="aside-tag-title">Теги</h3>
        <ul className="aside-tag-list">
          <li className="aside-tag-list-title">
            <a href="#0">Fashion</a>
          </li>
          <li className="aside-tag-list-title">
            <a href="#0">Music</a>
          </li>
          <li className="aside-tag-list-title">
            <a href="#0">Lifestyle</a>
          </li>
          <li className="aside-tag-list-title">
            <a href="#0">Art</a>
          </li>
          <li className="aside-tag-list-title">
            <a href="#0">Interior</a>
          </li>
          <li className="aside-tag-list-title">
            <a href="#0">Travel</a>
          </li>
          <li className="aside-tag-list-title">
            <a href="#0">Food</a>
          </li>
          <li className="aside-tag-list-title">
            <a href="#0">Health</a>
          </li>
        </ul>
      </section>
      <section className="topics">
        <h3 className="topics-header"><br/></h3>
        <ul className="topics-list">
          <li className="topics-list-title">
            <a href="#0">
              ........<span className="numbers-of-topics"></span>
            </a>
          </li>
          
        </ul>
      </section>
    </aside>
  </div>
 
</>

    </div>
  )
}
