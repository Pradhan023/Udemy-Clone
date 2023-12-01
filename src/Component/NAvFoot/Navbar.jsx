import React, { useState } from 'react'
import logo from '../../assets/Udemy_logo.svg.png'
import { CiSearch } from "react-icons/ci";
import { MdOutlineShoppingCart } from "react-icons/md";
import { IoGlobeOutline } from "react-icons/io5";
import { IoMdMenu } from "react-icons/io";
import { LiaGreaterThanSolid } from "react-icons/lia";
import { IoMdClose } from "react-icons/io";
import '../StyleComp/Navbar.css'
import { NavLink, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const category = ["Business","Finance & Accounting","IT & Software","Design","Marketing","Life Style","Photography & Video","Music & Arts","Health & Fitness","Teaching & Academic"]
  const subcategory = [
    {
      category:"Business",
      content:["Communication","Managements","Business Strategy","Operations","Human Resources"]
    },
    {
      category:"Finance & Accounting",
      content:["Accounting & Bookkeeping","Compliance","Economic","Finance","Taxes"]
    },
    {
      category:"IT & Software",
      content:["IT Certification","Network & Security","Hardware","Operating system & Servers","Other IT & Software"]
    },
    {
      category:"Design",
      content:["Web Design","Game Design","3D & Animation","Fashion Design","Other Design"]
    },
    {
      category:"Marketing",
      content:["Digital Marketing","Social Media Marketing","Public Relationship","Content Marketing","Product Marketing"]
    },
    {
      category:"Life Style",
      content:["Arts & Crafts","Beauty & Makeup","Food & Beverage","Pet Care & Training","Travel"]
    },
    {
      category:"Photography & Video",
      content:["Digital Photography","Photography","Video Design","Commercial Photography","Photography Tools"]
    },
    {
      category:"Music & Arts",
      content:["Instruments","Music Production","Vocal","Music Software","Music Techniques"]
    },
    {
      category:"Health & Fitness",
      content:["Fitness","Sport","Yoga","Menatl Health","Dance"]
    },
    {
      category:"Teaching & Academic",
      content:["Engineering","Math","Science","Socal Science","Teacher Training"]
    }
  ]

  const[val,setVal]=useState(true)
  const[side,setSide] =useState(true)

  const handleclick = ()=>{
    setVal(!val)
  }

  const sideclick = ()=>{
    setSide(!side)
  }

  const Nav = useNavigate();


  return (
    <div className='Navhead'>

      <div onClick={handleclick} className='menuicon'>
        <IoMdMenu/>
      </div>

      {/*logo col  */}
      <div onClick={()=>Nav('/')} className='logo' >
      <img src={logo} alt='Loading...' />
      </div>
      
      {/* category col */}
      <div className='category'>
      <p>Categories</p>
        <div className='categoryList'>
          <div className='innercategoryconatiner'>
          {
            category.map((item,index)=>{
              // if(item === subcategory.category)
              return(
                <div key={index} className='subcategorylist'>
                <p className='sublist'>
                  <NavLink to={`/course/${item}`} state={subcategory}>
                  {item}
                  </NavLink>
                </p>
                <LiaGreaterThanSolid className='greatericon'/>
                <div className='subcategory-InnerList'>
                  {
                    subcategory[index].content.map((item,subindex)=>{
                      return(
                        <p key={subindex}>
                          <NavLink to={`/course/${subcategory[index].category}/${item}`} state={subcategory} >
                            {item}
                          </NavLink>
                        </p>
                      )
                    })
                  }
                </div>
                </div>
              )
            })
          }
          </div>
        </div>
      </div>

      {/* search bar col */}
      <div className='Navsearch'>
        <label htmlFor='serchbtn' className='navlabel'><CiSearch className='searchicon'/></label>
        <input id='serchbtn' type='text' placeholder='Search for anything' />
      </div>
      
      {/* tech col */}
      <div className='navflex tech'>
      <div className='udemybussiness'>
        <p>Udemy Business</p>
        <div className='hang'></div>
        {/* hover block1 */}
        <div className='hoverBlock1' >
          <p>Get your team access to over 25,000 top Udemy courses, anytime, anywhere.</p>
          <div className='hoverBlock1-btn1'>Try Udemy Business</div>
        </div>

      </div>
      <div className='udemytech'>
        <p onClick={()=>Nav("/techudemy")}>Tech on Udemy</p>
        <div className='hang1'></div>
        {/* hover block2 */}
        <div className='hoverBlock2'>
          <p>Turn what you know into an opportunity and reach millions around the world.</p>
          <div className='hoverBlock1-btn1' onClick={()=>Nav("/techudemy")}>Learn More</div>
        </div>
      </div>
      </div>


      {/* cart */}
      <div className='cart'>
        <MdOutlineShoppingCart className='cartlogo'/><span className='cartnumber'>1</span>
      </div>

       {/* login sign col */}
      <div className='navflex navbtn'>
        <div className='navbtn signin'>
          <p onClick={()=>Nav('/login')}>Log in</p>
        </div>
        <div className='navbtn singup'>
          <p onClick={()=>Nav('signup')}>Sign up</p>
        </div>
        <div className='globebtn'>
          <IoGlobeOutline style={{fontSize:"23px",marginTop:"3px"}}/>
        </div>
      </div>




      {/* sidebar mobile view */}

        {
          val ? " " 
          : 
            <div className="backgrounblur">

            <div className='sidebar'>
                {/* /close */}
                <div onClick={handleclick} className='close'>
                  <IoMdClose style={{fontSize:"25px"}}/>
                </div>

              {/* btn */}
                <div className='sidebar-btn'>
                  <p>Log in</p>
                  <p>Sign up</p>
                </div>


                {/* all category */}

                <div className='sidebar-allcategory-container'>
                  <h3>All Categories</h3>
                      <div className='category-content-list'>
                        {
                          category.map((item,index)=>{
                            // if(item === subcategory.category)
                            return(
                              <div key={index}  >
                              <div className='side-cat-outter'onClick={sideclick}>
                              <p className='' >
                                {item}
                              </p>
                              <LiaGreaterThanSolid className='arrow'/>
                              </div>

                              {
                                side ? " "
                                :
                                <div className='side-cat-inner'>
                                {
                                  subcategory[index].content.map((item)=>{
                                    return(
                                      <p>
                                        {item}
                                      </p>
                                    )
                                  })
                                }
                              </div>
                              }
                              </div>
                            )
                          })
                        }
                      </div>
                </div>

                <div className='side-tech'>
                  <p className='side-tech-head'>More from Udemy</p>
                  <div className='side-conent'>
                    <p>Udemy Business</p>
                  </div>
                  <div className='side-conent'>
                    <p>Tech on Udemy</p>
                  </div>
                </div>

              </div>

            </div>
        }  


    </div>
  )
}

export default Navbar