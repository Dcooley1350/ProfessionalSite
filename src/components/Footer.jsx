import React from 'react'


function Footer (){
    var footerStyles = {
        position: 'fixed',
        width: '100%',
        bottom: '0'
    }
    var footerHeight = {
        height: '100%'
    }
    return(
        <footer style={footerStyles} className="page-footer">
          <div style={footerHeight}className="footer-copyright">
            <div className="container">
            © 2014 Copyright Text
            <a className="grey-text text-lighten-4 right" href="#!">More Links</a>
            </div>
          </div>
        </footer>
    )
}

export default Footer;

