import './style.scss';
import { skillsList } from '../../data/skills';

const Skills = () => (
  <div className="skills">
    <ul className="skills_list">

      <h1 className="skills_list_title">Languages :</h1>
      {skillsList[0].languages.map((language) => (
        <li className="skills_list_item" key={language.id}>{language.name} {language.icon }</li>
      ))}
    </ul>
    <ul className="skills_list">
      <h1 className="skills_list_title">Frameworks :</h1>
      {skillsList[1].frameworks.map((framework) => (
        <li className="skills_list_item" key={framework.id}>{framework.name} {framework.icon }</li>
      ))}
    </ul>
  </div>
);
console.log(skillsList);

export default Skills;
