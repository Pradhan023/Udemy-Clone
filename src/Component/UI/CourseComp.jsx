import React from 'react'
import '../StyleComp/CourseComp.css'
import { Link, useLocation, useParams } from 'react-router-dom'
import { IoIosInformationCircle } from "react-icons/io";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown } from "react-icons/io";
import ss from '../../assets/Screenshot.png'

const CourseComp = () => {
    const params = useParams()
    // console.log(params.category);
    const loc = useLocation()
    const sub = loc.state
    const filter = sub.filter(item=> params.category === item.category) 
    const content = filter[0].content

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

    const businessPopular_Topics = ["PMI Project Management Professional(PMP)","Project Management","Data Modeling","Business Analysis","Real Estate Investing","Microsoft Power BI","SQl","PMI PMBOK","Data Analysis","Product Management"];

    const businessPopular_instutor = [
        {
            img:"https://img-c.udemycdn.com/user/75x75/4897424_a25c_11.jpg",
            heading:"TIA Education, Andrew Ramdayal",
            des:"PMI Project Management Professional (PMP), PMI PMBOK",
            rating:4.7,
            stuNum:"310,635",
            courseNo:18
        },
        {
            img:"	https://img-c.udemycdn.com/user/75x75/75004102_f8b0_2.jpg",
            heading:"Maven Analytics",
            des:"Business Intelligence, Microsoft Power BI",
            rating:4.7,
            stuNum:"1,121,614",
            courseNo:38
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/8280056_7887_3.jpg",
            heading:"365 Careers",
            des:"Data Analysis, Agile",
            rating:4.7,
            stuNum:"2,623,082",
            courseNo:106
        },
        {
            img:"https://img-c.udemycdn.com/user/75x75/8912846_1a61.jpg",
            heading:"Joseph Phillips",
            des:"PMI PMBOK, PMI Project Management Professional (PMP)",
            rating:4.7,
            stuNum:"766,529",
            courseNo:38
        }
    ]


  return (
    <div>

        {/* subroutes */}

        <div className='navCourse'>
            <h3>{params.category}</h3><span></span>
            {/* category list */}
            <div className='courseComp-flex'>
                {
                    content.map((item,index)=>{
                        return(
                            <p key={index}>
                                <Link className='link' to={`/course/${params.category}/${item}`} state={sub}>
                                {item}
                                </Link>
                            </p>
                        )
                    })
                }
            </div>
        </div>

        {/* content  */}

        <div className="main-outter-parent-container">

        <div className="contant-comp">
            
            <h1 className='course-heading'>{`${params.category} Courses`}</h1>

            <h2>Courses to get you started</h2>

            {/* content most popular */}
            <div className="popular-parent">
            <div className='popularhead'>
            <p className='mpopular'>Most popular</p>
            </div>
            <div className='card-conatiner'>
            {/* cards */}
            {
                data.map((item,index)=>{
                    return(
                        <div key={index} className='cardmain'>
                            <img src={item.img} />
                            <h3>{item.heading}</h3>
                            <p>{item.author}</p>
                            <p>{`${item.rating} ⭐⭐⭐⭐⭐`}</p>
                            <h3>{`₹${item.price}`}</h3>
                        </div>
                    )
                })
            }
            </div>
            </div>

            {/* popular topics */}
            <h2>Popular Topics</h2>
            <div className='popularTopics'>
                {
                    businessPopular_Topics.map((item,index)=>{
                        return(
                            <div key={index} className='pt-inner'>
                                <p>{item}</p>
                            </div>
                        )
                    })
                }
            </div>

            {/* Popular instutor */}

            <h2>Popular Instructor</h2>
            <div className="popular-inst">
                {
                    businessPopular_instutor.map((item,index)=>{
                        return(
                            <div className='inst-inner'>
                                <img src={item.img} />
                                <div className='inst-row'>
                                    <h3>{item.heading}</h3>
                                    <p className='p1'>{item.des}</p>
                                    <p className='p2'><span>{item.rating}</span> ⭐ Instructor Rating</p>
                                    <h4>{item.stuNum} <span>students</span></h4>
                                    <h4>{item.courseNo} <span>courses</span></h4>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

            {/* all business courses */}

            <h2>{`All ${params.category} courses`}</h2>

            {/* info */}
            <div className='info'>
                <IoIosInformationCircle className='infoicon'/><h3>Not sure? All courses have a 30-day money-back guarantee</h3>
            </div>

            {/* filter */}

            <div className="filterstatic">
                <div className='filterbtn'>
                    <IoFilter/><span>Filter</span>
                </div>
                <div className='sort'>
                    <div className='inner-sort'>
                    <span>Sort by</span>
                    <p>Most Popular</p>
                    </div>
                    <IoIosArrowDown className='arrowdown'/>
                </div>
            </div>

            {/* main contents */}

            <div className='mainContentParent'>

                {/* rating */}

                <div className='rating'>
                    <h3>Ratings</h3>
                    <span className='ratingspan'>
                        <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (1,231)<br/>
                        <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (2,281)<br/>
                        <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (2,631)<br/>
                        <input type='radio' name='rate' />⭐⭐⭐⭐⭐ 4.5 & up (2,831)<br/>
                    </span>
                </div>

                {/* content card */}

                <div>
                    <img className='maincontentimg' src={ss} />
                    {
                        data.map((item,index)=>{
                            return(
                                <div key={index} className='maincontentcard'>
                                    <img src={item.img} />
                                    <div>
                                        <h3>{item.heading}</h3>
                                        <p className='maindes'>{item.des}</p>
                                        <p className='mainauthor'>{item.author}</p>
                                        <h3>{`${item.rating} ⭐⭐⭐⭐⭐`}</h3>
                                        <p className='maincourseDesc'>8 total .84 lectures .All Levels</p>
                                    </div>
                                    <h3>{"₹"+item.price}</h3>
                                </div>
                            )
                        })
                    }
                </div>


            </div>

         </div>
            
        </div> 

    </div>
  )
}

export default CourseComp