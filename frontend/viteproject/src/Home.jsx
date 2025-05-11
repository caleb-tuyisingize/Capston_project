
function Home(){

    return(
        <>
        <br />
        <section className="upper-main">
{/* Left */}
        <div className="left">
            <h2>Students management platform</h2>
            <h1>STUDENTSYNC
            MANAGEMENT WEB APP</h1>
            <p>
            Students for the Academic Year 2025/2026
            </p>
            <div className="navigators">
                <button>Learn More</button>
                <button>All Students</button>
            </div>
        </div>

        <div className="right">
            <img src="#" alt="" />
          
            <div className="upper-imgs">
            <img src="#" alt="" />
            <img src="#" alt="" />
            <img src="#" alt="" />
            </div>
        </div>
        </section>

    <section className="management">
        <div className="top">
            <h3>Vibrant Culture</h3>
            <h2>Kepler College Students management</h2>
        </div>
    <div className="second-cards">

    <div className="card-1">
    <div className="card-head"><i>#</i><h3>Digital transformation</h3></div>
        <p>Digital transformation empowers students with tools and skills that extend beyond technical proficiency, fostering a learning environment where ethical digital citizenship and proper online conduct become the bedrock of their  future success in an increasingly connected world.</p>
     </div>
     <div className="card-2">
     <div className="card-head"> <i>#</i><h3>Disciplined and Productive</h3></div>
        <p>Discipline in time, as well as discipline in all matters and possessions. Organized and able to manage their agenda/activities so that all their time can be valuable and beneficial.</p>
     </div>
     <div className="card-3">
        <div className="card-head"><i>#</i><h3>Race Towards Goodness</h3></div>
        <p>Competing and striving in goodness. Having speed and accuracy in doing good deeds. Trained to act swiftly in matters, completing tasks quickly and efficiently.</p>
     </div>
    </div>
    </section>

    <section className="gallery">

    <div className="top">
            <h3>Gallery</h3>
            <h2>Kepler College Students Lifestyle</h2>
        </div>

<div className="lists">
    <ul>
        <li>All</li>
        <li>Foundations period</li>
        <li>Sports Culture</li>
        <li>Projects phase</li>
    
    </ul>

</div>
<div className="gallery-imgs">
    <img src="#" alt="" />
    <img src="#" alt="" />
    <img src="#" alt="" />
</div>
    </section>
        
        </>
    );
}

export default Home