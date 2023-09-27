import React from 'react'
import './home.scss'
import Image from 'next/image'
import { Badge } from 'antd'
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
const items = [
  {
    label: <a href="https://www.antgroup.com">1st menu item</a>,
    key: '0',
  },
  {
    label: <a href="https://www.aliyun.com">2nd menu item</a>,
    key: '1',
  },
  {
    type: 'divider',
  },
  {
    label: '3rd menu item',
    key: '3',
  },
];
function Home() {
  return (
    <div className='homePage'>
      <div className='userDetail'>
        <div>
          <h3>Hi, Sheeraz Ahmed</h3>
          <p>Welcome To The World Of Ai.</p>
        </div>
        <div className='toolTipUser'>
          <div className='tools'><Image
            src="/Imagaes/DarkModeIcon.svg"
            priority
            width={25}
            height={25}
          /></div>
          <div className='tools'>
            <Badge count={5}>
              <Image
                src="/Imagaes/BellIcon.svg"
                priority
                width={25}
                height={25}
              />
            </Badge>
          </div>
          <div className='profilePic'>
            <Image
              src="/Imagaes/profile.jpg"
              priority
              width={35}
              height={35}
            />
            <div className='onlineStatus'>

            </div>
          </div>
          <div className='tools'>
            <Dropdown
              menu={{
                items,
              }}
              trigger={['click']}
            >
              <div>
                <Space>
                  <DownOutlined />
                </Space>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
      <div className='chatBox'>
        <div className='content'>
          <div className='welComeChatGPT'>
            <Image src='/Imagaes/chatGPT.png'
              width={100}
              height={100}
            />
            <h2>Welcome To ChatGPT</h2>
          </div>
          <div className='tips'>
            <div className='tipBox'>
              <Image src='/Imagaes/Bulb.svg'
                width={25}
                height={25}
              />
              <p className='tipHead'>
                Example
              </p>
              {[1,2,3].map((a,i)=>{
                return(

                
              <div className='tipExample'>
                <p>"Explain Quantumn computing in simple terms"</p>
              </div>
              )
            })}
            </div>

            <div className='tipBox'><Image src='/Imagaes/energy.svg'
              width={25}
              height={25}
            />
              <p className='tipHead'>
                Capability
              </p>
              {[1,2,3].map((a,i)=>{
                return(

                
              <div className='tipExample'>
                <p>"Explain Quantumn computing in simple terms"</p>
              </div>
              )
            })}
            </div>

            <div className='tipBox'>
              <Image src='/Imagaes/warning.svg'
                width={25}
                height={25}
              />
              <p className='tipHead'>
                Limitations
              </p>
              {[1,2,3].map((a,i)=>{
                return(

                
              <div className='tipExample'>
                <p>"Explain Quantumn computing in simple terms"</p>
              </div>
              )
            })}
            </div>

          </div>
          <div className='inputDiv'>
            <input placeholder="Search for anything"/>
            <button> <Image src='/Imagaes/sendIcon.svg'
                width={20}
                height={20}
              /></button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home