import './index.css';
const Card  = ({children, title, className, Images}) => {
    return ( 
        <div>
        <section className="services" id="services"  style={{
            backgroundColor: '#f1f2f3'
        }}>
   <div className="content">
     <div className="title"><span>Some Of My Projects</span></div>
     <div className="boxes">
       <div className="box">
         {Images}
       <div className="topic">{title}</div>
       <p>{children}</p>
     </div>
       <div className="box">
         <div className="icon">
           <i className="fas fa-paint-brush"></i>
       </div>
       <div className="topic">Graphic Design</div>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?</p>
     </div>
       <div className="box">
         <div className="icon">
           <i className="fas fa-chart-line"></i>
       </div>
       <div className="topic">Digital Marketing</div>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?</p>
     </div>
       <div className="box">
         <div className="icon">
           <i className="fab fa-android"></i>
       </div>
       <div className="topic">Icon Design</div>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?</p>
     </div>
       <div className="box">
         <div className="icon">
           <i className="fas fa-camera-retro"></i>
       </div>
       <div className="topic">Photography</div>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?</p>
     </div>
       <div className="box">
         <div className="icon">
           <i className="fas fa-tablet-alt"></i>
       </div>
       <div className="topic">Apps Devlopment</div>
       <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia autem quam odio, qui voluptatem eligendi?</p>
     </div>
   </div>
   </div>
 </section>
        </div>
     );
}
 
export default Card;