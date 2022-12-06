import './style.scss';
import ProgressLine from 'src/components/ProgressBar';
import { skillsList } from '../../data/skills';

const Skills = () => (
  <div className="skills">
    <section className="skills_list">
      <ul className="skills_list_languages">
        <h1 className="skills_list_languages_title">Languages :</h1>
        {skillsList[0].languages.map((language) => (
          <li className="skills_list_languages_item" key={language.id}>{language.name} {language.icon }
            <ProgressLine
              backgroundColor="grey"
              visualParts={[
                {
                  percentage: `${language.progress}%`,
                  color: `${language.color}`,
                },
              ]}
            />
            <span className="skills_list_languages_pourcentage">{language.progress}%</span>
          </li>
        ))}
      </ul>
    </section>
    <section className="skills_list">
      <ul className="skills_list_frameworks">
        <h1 className="skills_list_frameworks_title">Frameworks :</h1>
        {skillsList[1].frameworks.map((framework) => (
          <li className="skills_list_frameworks_item" key={framework.id}>{framework.name} {framework.icon }
            <ProgressLine
              backgroundColor="grey"
              visualParts={[
                {
                  percentage: `${framework.progress}%`,
                  color: `${framework.color}`,
                },
              ]}
            />
            <span className="skills_list_frameworks_pourcentage">{framework.progress}%</span>
          </li>
        ))}
      </ul>
    </section>
  </div>
);
// console.log(skillsList);

export default Skills;
