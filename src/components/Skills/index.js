import './style.scss';
import { Line } from 'rc-progress';
import { skillsList } from '../../data/skills';

const Skills = () => (
  <div className="skills">
    <section className="skills_list">
      <ul className="skills_list_languages">
        <h1 className="skills_list_languages_title">Languages :</h1>
        {skillsList[0].languages.map((language) => (
          <li className="skills_list_languages_item" key={language.id}>{language.name} {language.icon } <Line percent={language.progress} strokeWidth={1} strokeColor={language.color} /></li>
        ))}
      </ul>
    </section>
    <section className="skills_list">
      <ul className="skills_list_frameworks">
        <h1 className="skills_list_frameworks_title">Frameworks :</h1>
        {skillsList[1].frameworks.map((framework) => (
          <li className="skills_list_frameworks_item" key={framework.id}>{framework.name} {framework.icon } <Line percent={framework.progress} strokeWidth={1} strokeColor={framework.color} /></li>
        ))}
      </ul>
    </section>
  </div>
);
// console.log(skillsList);

export default Skills;
