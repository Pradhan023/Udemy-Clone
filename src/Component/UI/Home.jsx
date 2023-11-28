import React from 'react'
import '../StyleComp/Home.css'
import { FaCirclePlay } from "react-icons/fa6";

const Home = () => {
  const data = [
    {
        id:1,
        img:"https://img-c.udemycdn.com/course/240x135/8324_fa84_13.jpg",
        heading:"Powerful Business Writing: How to Write Concisely",           
        author:"Caroline McDevitt",
        des:"A concise business writing course for punchy, professional and powerful writing – at work, at university, on your blog",
        rating:"4.7",
        price:499,
        category:"Business",
        subcat:"Communication"
    },
    {
        id:1,
        img:"https://img-c.udemycdn.com/course/240x135/8324_fa84_13.jpg",
        heading:"Powerful Business Writing: How to Write Concisely",           
        author:"Caroline McDevitt",
        des:"A concise business writing course for punchy, professional and powerful writing – at work, at university, on your blog",
        rating:"4.7",
        price:499,
        category:"Business",
        subcat:"Communication"
    },
    {
        id:1,
        img:"https://img-c.udemycdn.com/course/240x135/8324_fa84_13.jpg",
        heading:"Powerful Business Writing: How to Write Concisely",           
        author:"Caroline McDevitt",
        des:"A concise business writing course for punchy, professional and powerful writing – at work, at university, on your blog",
        rating:"4.7",
        price:499,
        category:"Business",
        subcat:"Communication"
    },
    {
        id:1,
        img:"https://img-c.udemycdn.com/course/240x135/8324_fa84_13.jpg",
        heading:"Powerful Business Writing: How to Write Concisely",           
        author:"Caroline McDevitt",
        des:"A concise business writing course for punchy, professional and powerful writing – at work, at university, on your blog",
        rating:"4.7",
        price:499,
        category:"Business",
        subcat:"Communication"
    },
    {
        id:1,
        img:"https://img-c.udemycdn.com/course/240x135/8324_fa84_13.jpg",
        heading:"Powerful Business Writing: How to Write Concisely",           
        author:"Caroline McDevitt",
        des:"A concise business writing course for punchy, professional and powerful writing – at work, at university, on your blog",
        rating:"4.7",
        price:499,
        category:"Business",
        subcat:"Communication"
    },
]

const goals = [
  {
    heading:"I am proud to say that after a few months of taking this course...I passed my exam and am now an AWS Certified Cloud Practitioner! This content was exactly what the CCP exam covered.",
    logo:"WA",
    logoname:"Will A",
    play:"[NEW] Ultimate AWS Certified Cloud Practitioner-2022"
  },
  {
    heading:"This course helped me freshen up on my product manager skills and land a job at Facebook! Thanks guys :)",
    logo:"RF",
    logoname:"Ron F",
    play:"Become a Product Manager | Learn the Skills & Get the Job"
  },
  {
    heading:"One of the best courses on management and leadership I have come across so far. The advice is practical, and examples highly relatable. ",
    logo:"PW",
    logoname:"Phillip W",
    play:"Leadership: Practical Leadership Skills"
  },
]
  return (
    <div>

      {/* top img */}
      <div className="hometop-img">
        <div className='topimg_text'>
          <h1>McLaren Racing 101</h1>
          <p>Ready to get up to speed on your McLaren Racing knowledge? Take the new course for free.</p>
          <div className='topimgbtn'>Enroll now</div>
        </div>
        <img src="https://img-c.udemycdn.com/notices/home_carousel_slide/image/5bef67d5-1f8e-4323-a648-dc4779739cd8.jpg" />
      </div>

      {/* company name */}
       <div className='homecompanysection'>
          <p>Trusted by over 15,000 companies and millions of learners around the world</p>
          <div className='homesection-1'>
            <img src="https://s.udemycdn.com/partner-logos/ou-v1/volkswagen.svg" />
            <img src="https://s.udemycdn.com/partner-logos/ou-v1/samsung.svg" />
            <img src="https://s.udemycdn.com/partner-logos/ou-v1/cisco.svg" />
            <img src="https://s.udemycdn.com/partner-logos/ou-v1/att.svg" />
            <img src="https://s.udemycdn.com/partner-logos/ou-v1/procter_gamble.svg" />
            <img src="https://s.udemycdn.com/partner-logos/ou-v1/hewlett_packard_enterprise.svg" />
            <img src="https://s.udemycdn.com/partner-logos/ou-v1/citi.svg" />
            <img src="https://s.udemycdn.com/partner-logos/ou-v1/ericsson.svg" />
          </div>
       </div>

       {/* home course section */}

       <div className="selectionCourse">
        <div className="slectioncourse-1">
          <div className='selectioninner'>
          <h1>A broad selection of courses</h1>
          <p className='slectioncourse-1P'>Choose from over 210,000 online video courses with new additions published every month</p>
          <div className="slectioncourse-2">
            <span className='span1'>Python</span>
            <span>Excel</span>
            <span>Web Development</span>
            <span>JavaScript</span>
            <span>Data Science</span>
            <span>Amazon AWS</span>
            <span>Drawing</span>
          </div>
          </div>
          {/* expand your carrer */}
          <div className='career1'>
            <h2>Expand your career opportunities with Python</h2>
            <p className='career1-p1'>Take one of Udemy's range of Python courses and learn how to code using this incredibly useful language. Its simple syntax and readability makes Python perfect for Flask, Django, data science, and machine learning. Youll learn how to build everything from games to sites to apps. Choose from a range of courses that will appeal to...</p>
            <div className='explore-btn'>Explore Python</div>

            <div className='carrerCard'>
              {/* explore course */}

              {
                data.map((item,index)=>{
                  return(
                    <div className='carrercard1' key={index}>
                      <img src={item.img} />
                      <h3>{item.heading}</h3>
                      <p>{item.author}</p>
                      <h4>{item.rating}<span>⭐⭐⭐⭐⭐ (486,637)</span></h4>
                      <h3>{`₹${item.price}`}</h3>
                    </div>
                  )
                })
              }

            </div>
          </div>

          
        </div>
       </div>

       {/* how learners */}

       <div className='learnsection'>
          <h1>How Learners like you are achieving their goals</h1>
          <div className='learnsection1'>
              {
                goals.map((item,index)=>{
                  return(
                    <div className='goalsinner' key={index}>
                      <img src="	https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg" />
                      <p className='goalheading'>{item.heading}</p>
                      <div className='logo'>
                        <span>{item.logo}</span>
                        <p>{item.logoname}</p>
                      </div>
                      <hr/>
                      <div className='playiconcontainer'>
                        <FaCirclePlay className='playicon'/><span>{item.play}</span>
                      </div>
                    </div>
                  )
                })
              }
          </div>
        </div>

        {/* learners are viewing */}
        
        <div className="learnerview-section">
          <h1>Learners are viewing</h1>
          {/* card */}
          <div className='learnerSection'>
            {
              data.map((item,index)=>{
                return(
                  <div key={index} className='learnerCard'>
                    <img src={item.img} />
                    <h3>{item.heading}</h3>
                    <p>{item.author}</p>
                    <h4>{item.rating}<span>⭐⭐⭐⭐⭐ (339,085)</span></h4>
                    <h3>{`₹${item.price}`}</h3>
                  </div>
                )
              })
            }
          </div>
        </div>

        {/* Top categories */}

        <div className="topcategories-section">
          <div className='topinnercategories'>
            <h1>Top categories</h1>
            {/* top categories photo */}
            <div className='categorysection1'>
              <div className='categorysection2'><img src='https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg' /><p>Design</p></div>
              <div className='categorysection2'><img src='https://s.udemycdn.com/home/top-categories/lohp-category-development-v2.jpg' /><p>Development</p></div>
              <div className='categorysection2'><img src='https://s.udemycdn.com/home/top-categories/lohp-category-marketing-v2.jpg' /><p>Marketing</p></div>
              <div className='categorysection2'><img src='https://s.udemycdn.com/home/top-categories/lohp-category-it-and-software-v2.jpg' /><p>IT and Software</p></div>
              <div className='categorysection2'><img src='https://s.udemycdn.com/home/top-categories/lohp-category-personal-development-v2.jpg' /><p>Personal Development</p></div>
              <div className='categorysection2'><img src='https://s.udemycdn.com/home/top-categories/lohp-category-business-v2.jpg' /><p>Business</p></div>
              <div className='categorysection2'><img src='https://s.udemycdn.com/home/top-categories/lohp-category-photography-v2.jpg' /><p>Photography</p></div>
              <div className='categorysection2'><img src='https://s.udemycdn.com/home/top-categories/lohp-category-music-v2.jpg' /><p>Music</p></div>
            </div>
          </div>
        </div>

        {/* feature topics */}

        <div className='featureTopicsMain'>
          <div className='featureTopicsMain1'>
            <h2>Featured topics by category</h2>
            <div>
              {/* heading */}
              <div className='featureinner'>
                <div className='featurecol'>
                  <h2>Development</h2>
                  <div className='featurecol1'>
                    <p>Python</p>
                    <span>36,354,994 learners</span>
                  </div>
                  <div className='featurecol1'>
                  <p>Web Development</p>
                  <span>11,415,615 learners</span>
                  </div>
                  <div className='featurecol1'>
                    <p>Machine Learning</p>
                  <span>7,070,015 learners</span>
                  </div>
                </div>
                <div className='featurecol'>
                  <h2>Business</h2>
                  <div className='featurecol1'>
                    <p>Financial Analysis</p>
                  <span>1,195,282 learners</span>
                  </div>
                  <div className='featurecol1'>
                    <p>SQL</p>
                  <span>5,977,561 learners</span>
                  </div>
                  <div className='featurecol1'>
                    <p>PMP</p>
                  <span>1,733,398 learners</span>
                  </div>
                </div>
                <div className='featurecol'>
                  <h2>IT and Software</h2>
                  <div className='featurecol1'>
                    <p>Amazon AWS</p>
                  <span>6,123,456 learners</span>
                  </div>
                  <div className='featurecol1'>
                    <p>Ethical Hacking</p>
                  <span>10,931,066 learners</span>
                  </div>
                  <div className='featurecol1'>
                    <p>Cyber Security</p>
                  <span>3,998,037 learners</span>
                  </div>
                </div>
                <div className='featurecol'>
                  <h2>Design</h2>
                  <div className='featurecol1'>
                    <p>Photoshop</p>
                  <span>10,909,736 learners</span>
                  </div> 
                  <div className='featurecol1'>
                    <p>Graphic Design</p>
                  <span>3,381,052 learners</span>
                  </div>
                  <div className='featurecol1'>
                    <p>Drawing</p>
                  <span>2,410,849 learners</span>
                  </div>
                </div>
              </div>
          </div>
          <div className='explorebtn'>
            <p>Explore more Topics</p>
          </div>
        </div>
       </div>

       {/* udemy bussiness section */}

       <div className='businesssecton'>
          <div className='businesssecton1'>
            {/* col 1 */}
            <div className="businesscol1">
              <img src="https://www.udemy.com/staticx/udemy/images/v7/logo-ub.svg" />
              <h1>Upskill your team with Udemy Business</h1>
              <ul>
                <li><p>Unlimited access to 25,000+ top Udemy courses, anytime, anywhere</p></li>
                <li><p>International course collection in 14 languages</p></li>
                <li><p>Top certifications in tech and business</p></li>
              </ul>
              {/* col btn */}
              <div className='colbtn'>
                <p className='colbtn1'>Get Udemy Business</p>
                <p className='colbtn2'>Learn more</p>
              </div>
            </div>
            {/* col2 */}
            <div className="businesscol2">
              <img src="	https://s.udemycdn.com/home/non-student-cta/UB_Promo_800x800.jpg"  />
            </div>
          </div>
        </div>

        {/* cuatomer stories */}

        <div className="customerCardSection">
          <div className="customerCard">
            <div className="customercol1">
              <img src='https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg' />
              <p>Thanks to Udemy Business, Booz Allen has armed our workforce, specifically its <b>data scientists, with highly relevant and in-demand tech skills</b> that are enabling consultants to stay ahead of big data trends and raise the bar on proficiency, skills, and competencies to meet client demand.</p>
              <p className='fullstory'>Read full Story</p>
            </div>
            <div className="customercol2">
              <img src='https://s.udemycdn.com/home/ub-case-studies/James_Hemgen.jpeg' />
              <p><b>Jim Hemgen</b></p>
              <p>Principal</p>
              <p>Booz Allen Hamilton</p>
            </div>
          </div>
        </div>

        {/* end card home instructor */}
        
        <div className='instructorsection'>
          <div className='instructorsection1'>
            <img src='https://s.udemycdn.com/home/non-student-cta/instructor-1x-v3.jpg' />
          </div>
          <div className='instructorsection2'>
            <h1>Become an instructor</h1>
            <p>Instructors from around the world teach millions of learners on Udemy. We provide the tools and skills to teach what you love.</p>
            <div className='instrBtn'>Start teaching today</div>
          </div>
        </div>

    </div>
  )
}

export default Home