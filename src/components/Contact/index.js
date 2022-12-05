import './style.scss';

const Contact = () => (
  <div className="contact">
    <ul className="contact_list">
      <a className="contact_list_git" href="https://github.com/BenjaminEtchegaray"><h2 className="contact_list_git_name">Github</h2>  <img src="https://img.icons8.com/nolan/64/github.png" alt="github icon" />
      </a>
      <a className="contact_list_email" href="mailto:ben.etchegaray@gmail.com"><h2 className="contact_list_email_name">Email</h2> <img src="https://img.icons8.com/fluency/64/null/gmail-new.png" alt="gmail icon" /></a>
      <a className="contact_list_linkedin" href="https://www.linkedin.com/in/benjamin-etchegaray/"><h2 className="contact_list_linkedin_name">Linkedin</h2> <img src="https://img.icons8.com/color/64/null/linkedin-circled--v1.png" alt="linkedin icon" /></a>
    </ul>
  </div>
);

export default Contact;
