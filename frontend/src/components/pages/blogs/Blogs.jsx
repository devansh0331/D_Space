import React from 'react'
import BCard from './BCard'

import "./Blogs.css"

function Blogs() {
    return (
        <div className='blogs'>
            <span className='animate__animated animate__fadeInDown heading'>Blogs</span>
            <div className='p-left'>
                <div className='animate__animated animate__backInLeft p-left-detail'>
                    <span className='sub-heading'>Errors</span>
                    <div className='animate__animated animate__backInLeft  p-cards b-cards'>
                        <div>
                            <div className='l-div'>

                           <span>BLOG:1</span>
                            <a rel="noreferrer" target='_blank' href="https://devverse.hashnode.dev/when-wwwyoutubecom-refuses-to-connect-in-react-troubleshooting-the-iframe-issue"><BCard title="When www.youtube.com Refuses to Connect in React: Troubleshooting the iframe Issue"/></a>
                            </div>
                        </div>
                        <div>
                            <div className='l-div'>
                                <span>BLOG:2</span>
                            <a rel="noreferrer" target='_blank' href="https://devverse.hashnode.dev/error-connect-econnrefused-127001578-or-error-getaddrinfo-enotfound-smptgmailcom"><BCard title="BLOG:2 -> Error: connect ECONNREFUSED 127.0.0.1:578 or Error: getaddrinfo ENOTFOUND smpt.gmail.com"/></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Blogs
