import React,{useState} from 'react'
import './Footer.css'
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import { Link } from 'react-router-dom';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));
 function Footer() {
    const [agreed, setAgreed] = useState(false);
  
    const handleAgreeChange = () => {
      setAgreed(!agreed);
    };
  
    const [open, setOpen] = React.useState(false);
  
    const handleClickOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
    const [op, setOp] = React.useState(false);
  
    const handleClickOp = () => {
      setOp(true);
    };
    const handleClos= () => {
      setOp(false);
    };

  return (
    <div>
  <meta charSet="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Responsive Footer HTML and CSS | CodingNepal</title>
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.2/css/all.min.css"
  />
  <link rel="stylesheet" href="style.css" />
  <section className="footercs">
    <div className="footer-row">
      <div className="footer-col">
        <h4>Info</h4>
        <ul className="links">
          <li>
            <a href="#aboutus">About Us</a>
          </li>
          <li>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li>
            <Link to="/guide">Contact Guides</Link>
          </li>
          <li>
            <a href="#services">Service</a>
          </li>
          <li>
            <Link to="/details">Collection</Link>
          </li>
        </ul>
      </div>
      <div className="footer-col">
        <h4>Explore</h4>
        <ul className="links">
          <li>
            <Link to="/">Free Guidence to Travel</Link>
          </li>
          <li>
            <Link to="/details">Latest Photos</Link>
          </li>
          <li>
          <Link to="/photographer">Photographers</Link>
          </li>
          
        </ul>
      </div>
      <div className="footer-col">
        <h4>Legal</h4>
        <ul className="links">
          <li>
            <Link to="/feedback">Users Feedback</Link>
          </li>
          <li>
            <a style={{textDecoration:'none'}} onClick={handleClickOp} href='#aboutus'>Terms and Conditions</a>
            <BootstrapDialog
            onClose={handleClos}
            aria-labelledby="customized-dialog-title"
            open={op}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            Terms and Conditions
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClos}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
            <h4>Information We Collect</h4>
            
            <p>We use the information collected for the following purposes:
            
            Account Creation: To create and manage user accounts for the App.
            
            Communication: To communicate with parents and legal guardians regarding the App, including updates, promotions, and important information.
            
            Customization: To personalize the App's content based on user preferences and usage patterns.
            
            Analytics: To analyze user behavior and improve the App's functionality and content.</p>
            
            <h4>Sharing of Information</h4>
            
            <p>We do not sell, trade, or share personal information with third parties for their marketing purposes. We may share information as follows:
            
            Service Providers: We may share information with third-party service providers who assist in app development, hosting, maintenance, and other related services.
            
            Compliance with Law: We may disclose information as required by law or to protect our rights, privacy, safety, or property.</p>
            
            <h4>Parental Consent</h4>
            
            <p>We require parental consent for the collection of personal information from children. Parents and legal guardians can review, update, or request the deletion of their child's information by contacting us at [contact@email.com].</p>
           <br/>
            <label>
            <input
              type="checkbox"
              checked={agreed}
              onChange={handleAgreeChange}
            />{' '}
            I Agree to the Terms and Conditions
          </label>
    
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClos}>
              
              </Button>
            </DialogActions>
          </BootstrapDialog>
    
          </li>
          <li>
            <a style={{textDecoration:'none'}} onClick={handleClickOpen} href="#aboutus">Privacy Policy</a>
            <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <DialogTitle sx={{ m: 0, p: 2 }} id="customized-dialog-title">
            PRIVACY POLICY
            </DialogTitle>
            <IconButton
              aria-label="close"
              onClick={handleClose}
              sx={{
                position: 'absolute',
                right: 8,
                top: 8,
                color: (theme) => theme.palette.grey[500],
              }}
            >
              <CloseIcon />
            </IconButton>
            <DialogContent dividers>
            <h4>Information We Collect</h4>
        
            <p>Personal Information: We may collect certain personal information when users register for an account or use certain features of the App. This information may include:
            
            Child's first name (no last names)
            Parent or legal guardian's email address
            We do not collect any personally identifiable information from children without parental consent. Parents and legal guardians are responsible for providing consent for their children to use the App.
            
            Non-Personal Information: We may also collect non-personal information such as device type, device ID, IP address, and usage data to improve the App's performance and user experience.</p>
            
            <h4>How We Use Information</h4>
            
            <p>We use the information collected for the following purposes:
            
            Account Creation: To create and manage user accounts for the App.
            
            Communication: To communicate with parents and legal guardians regarding the App, including updates, promotions, and important information.
            
            Customization: To personalize the App's content based on user preferences and usage patterns.
            
            Analytics: To analyze user behavior and improve the App's functionality and content.</p>
            
            <h4>Sharing of Information</h4>
            
            <p>We do not sell, trade, or share personal information with third parties for their marketing purposes. We may share information as follows:
            
            Service Providers: We may share information with third-party service providers who assist in app development, hosting, maintenance, and other related services.
            
            Compliance with Law: We may disclose information as required by law or to protect our rights, privacy, safety, or property.</p>
            
            <h4>Parental Consent</h4>
            
            <p>We require parental consent for the collection of personal information from children. Parents and legal guardians can review, update, or request the deletion of their child's information by contacting us at [contact@email.com].</p>
            
            <h4>Security</h4>
            
            <p>We take reasonable measures to protect the security and confidentiality of information collected through the App. However, no data transmission or storage system is 100% secure. We cannot guarantee the security of information provided to or collected by the App.</p>
            
            <h4>Changes to Privacy Policy</h4>
            
            <p>We may update this Privacy Policy from time to time to reflect changes in our practices and services. We will notify users of any material changes to this policy through the App or via email.</p>
            
            <h4>Contact Information</h4>
            
            <p>If you have any questions or concerns about this Privacy Policy, please contact us at [contact@email.com].</p>
            
            <h4>Effective Date</h4>
            
            <p>This Privacy Policy is effective as of [Effective Date].
            
            This privacy policy is provided as a general template and should be customized to fit your specific needs and legal requirements. Consulting with a legal professional is advisable to ensure compliance with applicable laws and regulations, especially those related to children's privacy protection, such as the Children's Online Privacy Protection Act (COPPA) in the United States.</p>
            <br/>
            <label>
            <input
              type="checkbox"
              checked={agreed}
              onChange={handleAgreeChange}
            />{' '}
            I Agree to the Policy
          </label>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose}>
              
              </Button>
            </DialogActions>
          </BootstrapDialog>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/profile">Create Account</Link>
          </li>
        
        </ul>
      </div>
      <div className="footer-col">
        <h4>Newsletter</h4>
        <p>
          Subscribe to our newsletter for a weekly dose of news, updates,
          helpful tips, and exclusive offers.
        </p>
        <form action="#">
          <input type="text" placeholder="Your email" required="" />
          <button type="submit">SUBSCRIBE</button>
        </form>
        <div className="icons">
          <Link to="https://www.facebook.com/"  target="_blank" rel="noreferrer"><i className="fa-brands fa-facebook-f"/></Link>
          <Link to="https://www.twitter.com/"  target="_blank" rel="noreferrer"><i className="fa-brands fa-twitter" /></Link>
          <Link to="https://www.linkedin.com/"  target="_blank" rel="noreferrer"><i className="fa-brands fa-linkedin" /></Link>
          <Link to="https://www.github.com/"  target="_blank" rel="noreferrer"><i className="fa-brands fa-github" /></Link>
        </div>
      </div>
    </div>
  </section>

    </div>
  )
}
export default Footer
