import facebookIcon from '../images/facebook.png';
import tiktokIcon from '../images/tik-tok.png';
import instagramIcon from '../images/instagram.png';
import "./SocialIcons.css"

function SocialIcons() {
  return (
    <div className='icons-container'>
      <a href="#" target='_blanck'><img src={facebookIcon} alt="facebook-icon" /></a>
      <a href="#" target='_blanck'><img src={tiktokIcon} alt="Tiktok-icon" /></a>
      <a href="#" target='_blanck'><img src={instagramIcon} alt="instagram-icon" /></a>
    </div>
  );
}

export default SocialIcons;