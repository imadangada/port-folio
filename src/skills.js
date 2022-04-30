import html from './Images/html.png'
import css from './Images/css.png'
import js from './Images/js.png'
import sql from './Images/sql.png'
import php from './Images/php.png'
import react from './Images/react.png'
import wp from './Images/wp.webp'
import boot from './Images/bootstrap.png'
import tailwind from './Images/tailwind.png'
import git from './Images/gi.png'
const Skills = () => {
    return ( 
        <div>
<section className="skills" id="skills">
 <div className="content">
   <div className="title"><span>My Skills</span></div>
   <div className="skills-details">
     <div className="text">
       <div className="topic">Skills Reflects Our Knowledge</div>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Minus natus tenetur tempora? Quasi, rem quas omnis. Porro rem aspernatur reiciendis ut praesentium minima ad, quos, officia! Illo libero, et, distinctio repellat sed nesciunt est modi quaerat placeat. Quod molestiae, alias?</p>
       <div className="experience">
         <div className="num">10</div>
         <div className="exp">Years Of <br /> Experience</div>
       </div>
     </div>
     <div className="boxes">
       <div className="box">
            <div className="flex-container">
            <div style={{flexGrow: 1}}><img src={html} className='skills-img' alt="HTML" /></div>
            <div style={{flexGrow: 10}}>HTML</div>
            </div>
       </div>
       <div className="box">
       <div className="flex-container">
            <div style={{flexGrow: 1}}><img src={css} className='skills-img' alt="HTML" /></div>
            <div style={{flexGrow: 10}}>CSS</div>
            </div>
       </div>
       <div className="box">
       <div className="flex-container">
            <div style={{flexGrow: 1}}><img src={js} className='skills-img' alt="HTML" /></div>
            <div style={{flexGrow: 10}}>JS</div>
            </div>
       </div>
       <div className="box">
       <div className="flex-container">
            <div style={{flexGrow: 1}}><img src={sql} className='skills-img' alt="HTML" /></div>
            <div style={{flexGrow: 10}}>SQL</div>
            </div>
       </div>
       <div className="box">
       <div className="flex-container">
            <div style={{flexGrow: 1}}><img src={react} className='skills-img' alt="HTML" /></div>
            <div style={{flexGrow: 10}}>ReatJs</div>
            </div>
       </div>
       <div className="box">
       <div className="flex-container">
            <div style={{flexGrow: 1}}><img src={php} className='skills-img' alt="HTML" /></div>
            <div style={{flexGrow: 10}}>PHP</div>
            </div>
       </div>
       <div className="box">
       <div className="flex-container">
            <div style={{flexGrow: 1}}><img src={boot} className='skills-img' alt="HTML" /></div>
            <div style={{flexGrow: 10}}>Bootstrap</div>
            </div>
       </div>
       <div className="box">
       <div className="flex-container">
            <div style={{flexGrow: 1}}><img src={tailwind} className='skills-img' alt="HTML" /></div>
            <div style={{flexGrow: 10}}>Tailwind</div>
            </div>
       </div>
       <div className="box">
       <div className="flex-container">
            <div style={{flexGrow: 1}}><img src={wp} className='skills-img' alt="HTML" /></div>
            <div style={{flexGrow: 10}}>Wordpress</div>
            </div>
       </div>
       <div className="box">
       <div className="flex-container">
            <div style={{flexGrow: 1}}><img src={git} className='skills-img' alt="HTML" /></div>
            <div style={{flexGrow: 10}}>Git</div>
            </div>
       </div>
     </div>
   </div>
 </div>
</section>

        </div>
     );
}
 
export default Skills;