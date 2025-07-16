import React from 'react'

function Footer() {
    const date = new Date();
    const year = date.getFullYear();
  return (
    <> 
        <div class="wave-container wave">
            <p>© {year}, Developed & Designed with ❤️ by <a className='footer_chinmaya' target='_chinmaya' href='https://github.com/udupa-chinnu/'>Chinmaya Udupa</a></p>
        </div>
    </>
  )
}

export default Footer