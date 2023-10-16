import React from 'react'
import "./Details.css"
import Menu from '../Home/Menu'
export default function GuideDetails() {
  return (
   <div><Menu/>
   <br/>
   <br/>
   <br/>
   
   <div className="projects-main-content">
   <div className='projects-welcome'>
     <h1>Algeria Travel Guide</h1><br/>
    <p><br/>Algeria is overlooked by many travellers, but if you do intend to visit, 
    know that there are a great number of opportunities in this relatively unexplored country. 
    From the bustling markets of Algiers and the Mediterranean coast to the Sahara desert, 
    there is something for everyone to explore. 
    Algeria is a place that will leave a lasting impression on your heart and mind!
  
    <h2><br/>Algeria Interesting Facts<br/></h2>
<h3 className='things'>**The Things You Should Know About Algeria</h3>
Algeria is easily one of North Africa’s friendliest and fascinating countries. From the vast and wild Sahara and gorgeous coastline; to the incredible array of cultural and historical sites; to the bustling cities filled to the brim with culture, there’s certainly a lot to love. Whether you’re planning to visit Algeria or are just brushing up on some Algerian trivia, some of these are sure to surprise you. Here are some of the most interesting facts about Algeria.</p>

   </div>
   <div className='projects-projects'>
     <div className="projects-project-card">
       <img src="https://cdn.enjoytravel.com/img/travel-news/algeria-is-the-largest-african-nation.jpg" alt="Project 1" />
       <h3><br/>African nation</h3><br/>
       <p>Spread across more than 2 million square kilometres bordering Mali, Niger, Libya, Tunisia, Morocco and Mauritania, Algeria is the largest country on the continent.
       </p>
     </div>

     <div className="projects-project-card">
       <img src="https://cdn.enjoytravel.com/img/travel-news/algeria-boasts-seven-unesco-sites.jpg" alt="Project 2" />
       <h3><br/> UNESCO Sites</h3><br/>
       <p>From the ancient Roman city of Timgad to the ancient villages of the M’Zab Valley, Algeria is home to some truly incredible UNESCO World Heritage Sites.</p>
     </div>
     <div className="projects-project-card">
       <img src="https://cdn.enjoytravel.com/img/travel-news/the-sahara-desert-takes-up-quite-a-bit-of-space.jpg" alt="Project 3" />
       <h3><br/>Sahara desert</h3><br/>
       <p>Algeria is home to the largest swath of the Sahara Desert which doubles as the largest hot desert in the world.
    Moreover, around 80% of Algeria is the Sahara Desert accounting for a total area of 1,905,392 km2.</p>
     </div>
     <div className="projects-project-card">
       <img src="https://cdn.enjoytravel.com/img/travel-news/algerians-are-extremely-hospitable.jpg" alt="Project 4" />
       <h3><br/>extremely hospitable</h3><br/>
       <p>Algerians are famous for their warm and friendly demeanour, especially toward guests. In fact, it’s customary for Algerians to invite visitors or friends into their home for a few cups of tea and good company.</p>
     </div>

   </div>
   <div className='projects-welcome'>
     <h1 ><br/>Root Maps Of Algeria</h1><br/>
    <p><br/>
    <br/>
     <img src='https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Situation_R%C3%A9seau_Autoroutier_Alg%C3%A9rier_-_Mai_2015_-_V.03.png/800px-Situation_R%C3%A9seau_Autoroutier_Alg%C3%A9rier_-_Mai_2015_-_V.03.png' 
     height="85%" width='100%'  alt='imgmap' />
    </p>
    <br/>
    <br/>
     </div>
     
 </div>
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
