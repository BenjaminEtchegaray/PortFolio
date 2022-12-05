import './style.scss';
import ProgressBar from 'src/utils/components/ProgressBar';
import ProgressLine from 'src/components/ProgressBar';
import { skillsList } from '../../data/skills';

const Skills = () => (
  <div className="skills">
    <section className="skills_list">
      <ul className="skills_list_languages">
        <h1 className="skills_list_languages_title">Languages :</h1>
        {skillsList[0].languages.map((language) => (
          <li className="skills_list_languages_item" key={language.id}>{language.name} {language.icon }
            <ProgressBar
              classnameWrapper="skills_list_languages_progressbarWrapper progressbarWrapper"
              classnameInternal="skills_list_languages_progressbarWrapper_progressbar progressbarWrapper_progressbar"
              bgcolor={language.color}
              completed={language.progress}
            />
          </li>
        ))}
      </ul>
    </section>
    <section className="skills_list">
      <ul className="skills_list_frameworks">
        <h1 className="skills_list_frameworks_title">Frameworks :</h1>
        {skillsList[1].frameworks.map((framework) => (
          <li className="skills_list_frameworks_item" key={framework.id}>{framework.name} {framework.icon }
            <ProgressBar
              classnameWrapper="skills_list_frameworks_progressbarWrapper progressbarWrapper"
              classnameInternal="skills_list_frameworks_progressbarWrapper_progressbar progressbarWrapper_progressbar"
              bgcolor={framework.color}
              completed={framework.progress}
            />
            <ProgressLine
              backgroundColor="grey"
              completed={framework.progress}
              visualParts={[
                {
                  percentage: `${framework.progress}%`,
                  color: `${framework.color}`,
                },
              ]}
            />
          </li>
        ))}
      </ul>
    </section>
  </div>
);
// console.log(skillsList);

export default Skills;
