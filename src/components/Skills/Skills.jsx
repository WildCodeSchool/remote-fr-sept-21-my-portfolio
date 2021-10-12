import Skill from '../Skill/Skill';
import './Skills.css';

const Skills = () => {
  const skills = [
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/99/Unofficial_JavaScript_logo_2.svg/1200px-Unofficial_JavaScript_logo_2.svg.png",
      name: "Javascript"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/2/27/PHP-logo.svg",
      name: "PHP"
    },
    {
      image: "https://d31ezp3r8jwmks.cloudfront.net/P4LMkQbCoYdT6NiE8ZjETEbw",
      name: "Docker"
    },
    {
      image: "https://upload.wikimedia.org/wikipedia/commons/8/87/Arduino_Logo.svg",
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
