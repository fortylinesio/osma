import "./index.scss";

export const SocialIcons = () => {
    return (
        <div className="social-icons">   
            <a className="icon-foo envelope" href="" target='_blank' rel='noreferrer'>
              <i className="far fa-envelope" />
            </a>
            <a className="icon-foo youtube" href="https://youtube.com" target='_blank' rel='noreferrer'>
              <i className="fab fa-youtube" />
            </a>    
            <a className="icon-foo linkedin" href="https://www.linkedin.com" target='_blank' rel='noreferrer'>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="icon-foo telegram" href="https://telegram.org" target='_blank' rel='noreferrer'>
              <i className="fab fa-telegram-plane"></i>
            </a>     
            <a className="icon-foo instagram" href="https://instagram.com" target='_blank' rel='noreferrer'>
              <i className="fab fa-instagram" />
            </a>
            <a className="icon-foo whatsapp" href="https://www.whatsapp.com/" target='_blank' rel='noreferrer'>
              <i className="fab fa-whatsapp"></i>
            </a> 
        </div>
          
    )
}

