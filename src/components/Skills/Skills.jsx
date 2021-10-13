import Skill from '../Skill/Skill';
import arduino from '../../assets/img/arduino.svg';
import php from '../../assets/img/php.png';
import javascript from '../../assets/img/js.png';
import docker from '../../assets/img/docker.png';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      image: javascript,
      name: "Javascript"
    },
    {
      image: php,
      name: "PHP"
    },
    {
      image: docker,
      name: "Docker"
    },
    {
      image: arduino,
      name: "Arduino"
    },
  ];

  return (
    <section>
      { skills.map((skill, index) => <Skill key={index} image={skill.image} name={skill.name} />) }
    </section>
  );
}

export default Skills;
