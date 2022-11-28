import './style.scss';
import { GitHub, Linkedin } from 'react-feather';

const Contact = () => (
  <div className="contact">
    <ul className="contact_list">
      <a className="contact_list_git" href="https://github.com/BenjaminEtchegaray">Github <GitHub className="contact_list_item_git_logo" /></a>
      <a className="contact_list_email" href="mailto:ben.etchegaray@gmail.com">Email</a>
      <a className="contact_list_linkedin" href="https://www.linkedin.com/in/benjamin-etchegaray/">Linkedin <Linkedin className="contact_list_item_linkedin_logo" /></a>
    </ul>
  </div>
);

export default Contact;
