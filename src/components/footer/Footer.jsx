
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faMedium } from '@fortawesome/free-brands-svg-icons';
import './footer.css'

function Footer () {
      return (
          <footer className="footer mt-4">
            <div className="row gy-2">
              <div className="col-md-6 col-sm-12 order-xs-2 order-sm-2 order-md-1 order-lg-1">
                <p className="text-center">
                  Copyright &copy; 2024 Yuran Cumbane
                </p>
              </div>
              <div className="col-md-6 col-sm-12 order-xs-1 order-sm-1 order-md-2 order-lg-2">
                <div className="d-flex align-items-center justify-content-center">
                  <a className='social-icon'>
                    <FontAwesomeIcon icon={faGithub} className='icon' />
                  </a>
                  <a className='social-icon'>
                    <FontAwesomeIcon icon={faLinkedin} className='icon' />
                  </a>
                  <a className='social-icon'>
                    <FontAwesomeIcon icon={faMedium} className='icon' />
                  </a>
                </div>
              </div>
            </div>
          </footer>
      )
  }
  
  export default Footer
/*

      
       */