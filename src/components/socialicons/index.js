import "./index.scss";

export const SocialIcons = () => {
    return (
        <div className="social-icons">   
            <a className="icon-foo whatsapp" href="https://wa.me/996501100215" target='_blank' rel='noreferrer'>
              <i className="fab fa-whatsapp"></i>
            </a> 
            <a className="icon-foo instagram" href="https://www.instagram.com/osma.group/" target='_blank' rel='noreferrer'>
              <i className="fab fa-instagram" />
            </a>
            <a className="icon-foo telegram" href="https://t.me/stroyblog_kg" target='_blank' rel='noreferrer'>
              <i className="fab fa-telegram-plane"></i>
            </a>     
            <a className="icon-foo linkedin" href="https://www.linkedin.com/company/osma-group/" target='_blank' rel='noreferrer'>
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a className="icon-foo youtube" href="https://www.youtube.com/channel/UCgondn3ZGIsjIqU3jjILBTg/featured" target='_blank' rel='noreferrer'>
              <i className="fab fa-youtube" />
            </a>    
            <a className="icon-foo envelope" href="mailto:osma.groupkg@gmail.com" title="osma.groupkg@gmail.com">
              <i className="far fa-envelope" />
            </a>
        </div>
          
    )
}

