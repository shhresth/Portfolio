import {React,useRef} from 'react'
import '../components/mainpage.css'
import {Carousel, Col, Layout, Menu, Progress, message, theme} from 'antd';
import {Divider} from 'antd';
import { MessageFilled,ArrowDownOutlined,StarOutlined, MailFilled, InstagramOutlined, ToolFilled, FundProjectionScreenOutlined} from '@ant-design/icons';
import {ConfigProvider} from 'antd';
import banner from '../images/polyvision-banner.png'
import pv1 from '../images/pv-1.png'
import pv2 from '../images/pv-2.png'
import pv3 from '../images/pv-3.png'
import pv4 from '../images/pv-4.png'
import emailImg from '../images/email-img.jpg'
import { GithubFilled,DesktopOutlined } from '@ant-design/icons';
import emailjs from '@emailjs/browser'

const { Header, Content, Footer } = Layout;
const MainPage = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_ooayjp4', 'template_2uk1hvn', form.current, 'IfFBygp8KaMh-_zNy')
      .then((result) => {
        e.target.reset();
          console.log('Email has been send');
          message.open({
            type: 'success',
            content: 'The message has been send! 🎉',
          });
      }, (error) => {
          console.log(error.text);
      });
  };
  const scollToSkills = useRef();
  const scollToprojects = useRef();
  const scollToContact = useRef();
  const scrollToHome = useRef();
  return (
    <div className='container'>
        <Layout className="layout">
      <Header  style={{ position: 'sticky', top: 0, zIndex: 1, width: '100%' }}>
        <div className="logo" onClick={()=>{
           scrollToHome.current.scrollIntoView();
        }} >Shresth Gupta</div>
        <Menu
          theme="dark"
        
          mode="horizontal"
          defaultSelectedKeys={['2']}
          className='menus'
          onClick={(e)=>{
            if(e.key=== 'skills'){
              scollToSkills.current.scrollIntoView({behavior: "smooth"});
            }
            else if(e.key=== 'projects'){
              scollToprojects.current.scrollIntoView({behavior: "smooth"});
            }
            else{
              scollToContact.current.scrollIntoView({behavior: "smooth"});
            }
          }}
          items={[
            {
              key:'skills',
              label:'My Skills!',
              icon:<ToolFilled/>
              
            },
            {
              key:'projects',
              label:'My projects!',
              icon:<FundProjectionScreenOutlined/>
              
            },
          {
            key:'talk',
            label:'Talk to me',
            icon:  <MessageFilled></MessageFilled>
          },
    ]}
        />
      </Header>
      <Content >
        <div className="Header" ref={scrollToHome}>
            <div className="line1">
        
        <span>Web Developer</span>
       
       </div>
       <div className="line2">
   
     <span className='maintxt'>UI/UX</span><span className='subtxt'>Web Developer with two years of experience. Based in India. Looking for internship opportunity in startups and agencies. </span>

       </div>
       <div className="line3">
            <span><ArrowDownOutlined></ArrowDownOutlined></span><span className='subtxt'>Student</span>
       </div>
       <div className="projects">
        <div className="highlight-title">
          Here's what I actually do
          <Divider/>
          <Divider/>
        </div>
        <div className="highlight-main">
        <ConfigProvider
    theme={{
      algorithm: theme.darkAlgorithm,
    }}
  >
          <Carousel autoplay draggable     theme={{algorithm: theme.darkAlgorithm}} style={{'width':'80vw','margin':'auto'}}>
          <div>
      <img  className='contentStyle'  src={banner}></img>
    </div>
    <div>
      <img  className='contentStyle'  src={pv1}></img>
    </div>
     <div>
      <img  className='contentStyle'  src={pv2}></img>
    </div>
    <div>
      <img  className='contentStyle'  src={pv3}></img>
    </div>
    <div>
      <img  className='contentStyle' style={{'border':'solid red 2px red'}} src={pv4}></img>
    </div>
          </Carousel>
          </ConfigProvider>
          <div className="main-info" >
            <div className='main-info-header'><span className='main-year'><StarOutlined style={{'fontSize':'2rem'}}></StarOutlined> Highlight <StarOutlined style={{'fontSize':'2rem'}}></StarOutlined></span>
            <p className='pv-anchor'><a href={'https://'+'polyvision.tech/'} target='_blank'>Polyvision</a> </p>
            <p className='pv-info'>Polyvision is a Web Application build using MERN Stack with the aim to showcase the numerous carrer opportunities in the technical domain to the SSC passed students.  </p>
            <div className="pv-links">
            <p ref={scollToSkills}>Check it out here!</p>
            {/* here ref is used to make skills center of the screen */}
            <ul style={{'paddingLeft':'20px'}}>
          <li><span><a href={'https://'+'github.com/shhresth/polyVision'} target='_blank' rel="noreferrer"> <GithubFilled></GithubFilled> Github Repository</a></span></li>
         <li> <span ><a href={'https://'+'polyvision.tech/'} target='_blank' rel="noreferrer"> <DesktopOutlined></DesktopOutlined> Live Website</a></span></li>
          </ul>
            </div>
            </div>
          </div>
        </div>
       </div>
       <div className="skills" >
        <p>My skills</p>
        <div className="Progress-bar">
            
            <span className='progress-bar-title'>JavaScript</span>
          <Progress percent={85} strokeColor={'black'} ></Progress>
        
       
        <span className='progress-bar-title'>React.js</span>
        <Progress percent={80} rpercent={85}   strokeColor={'black'} ></Progress>

        <span className='progress-bar-title'>Next.js</span>
        <Progress percent={60} rpercent={85}   strokeColor={'black'} ></Progress>

        <span className='progress-bar-title'>Bootstrap</span>
        <Progress percent={90} rpercent={85}   strokeColor={'black'} ></Progress>
        
        <span className='progress-bar-title'>MongoDB</span>
        <Progress percent={95} rpercent={85}   strokeColor={'black'} ></Progress>

        <span className='progress-bar-title'>Photoshop</span>
        <Progress percent={75} rpercent={85}   strokeColor={'black'} ></Progress>

        <span className='progress-bar-title'>Express.js</span>
        <Progress percent={85} rpercent={85}   strokeColor={'black'} ></Progress>

        <span className='progress-bar-title'>GitHub</span>
        <Progress percent={99} rpercent={85}   strokeColor={'black'} ></Progress>

        <span className='progress-bar-title'>CSS</span>
        <Progress percent={85} rpercent={85}   strokeColor={'black'} ></Progress>

        <span className='progress-bar-title'>Node.js</span>
        <Progress percent={85} rpercent={85}   strokeColor={'black'} ></Progress>

        <span className='progress-bar-title'>SQL</span>
        <Progress percent={85} rpercent={85}   strokeColor={'black'} ></Progress>

        <span className='progress-bar-title'>Canva</span>
        <Progress percent={100} rpercent={85}   strokeColor={'black'} ></Progress>

        <span className='progress-bar-title'>Figma</span>
        <Progress percent={90} rpercent={85}   strokeColor={'black'} ></Progress>
        </div>
        
        </div>
        <div className="work-section"  ref={scollToprojects}>
          <div className="work-txt">
            <p>My Work</p>
            <span>The following are my most recent work.
              you can click and view them in production enviroment.
            </span>
          </div>
          <div className="work-projects">
           
            <div className='projects'>
            <a href={'https://'+'polyvision.tech/'}target='_blank' rel="noopener noreferrer" >
            <span>Polyvision</span>
          <img src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/96/null/external-share-user-interface-anggara-basic-outline-anggara-putra-3.png" alt='share image'  ></img>
          </a>
          </div>
          <div className='projects'>
            <a href={'https://'+'polyvision.tech/'}target='_blank' rel="noopener noreferrer" >
            <span>Kryptosite</span>
          <img src="https://img.icons8.com/external-anggara-basic-outline-anggara-putra/96/null/external-share-user-interface-anggara-basic-outline-anggara-putra-3.png" alt='share image' ></img>
          <span style={{'fontSize':'1rem'}}>(underdevlopement)</span>
          </a>
          </div>
          <div className='projects '  style={{'fontSize':'3rem'}}>
            <span id='come-txt'>More to come... :)</span>
          </div>
          </div>
        </div>
        <div className="email" ref={scollToContact}>
          <span>Want to know more?<br></br>reach out here!👇</span>
         <div className="break"></div>
          <img src={emailImg} alt='genric image'></img>
          
        </div>
        
        <div className="email-form">
        <form ref={form} onSubmit={sendEmail}>
      <input type="text" name="user_name" placeholder='Your Name' required/>
      <input type="email" name="user_email" placeholder='Your Email' required/>
      <textarea name="message" placeholder='Enter Your Message Here' required style={{'height':'10vh'}}/>
      <input type="submit" value="Submit" />
    </form>
        </div>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}> 
      <div className="footer-container">
        <div className="footer-txt">
        <div className="reach-here">
          <p>Reach out here</p>
          <span><a href={'https://'+'github.com/shhresth'} target='_blank' rel="noreferrer"><GithubFilled style={{'paddingRight':'2rem'}}/></a></span>
          <span><a href={'mailto:shresthgupta106@gmail.com'} target='_blank' rel="noreferrer"><MailFilled/></a></span>
        </div>
        </div>
      </div>
      </Footer>
    </Layout>
    </div>
  )
}

export default MainPage