import './Skill.css'

const Skill = ({ image, name }) => (
  <div className="Skill-card">
    <img src={image} />
    <p>{name}</p>
  </div>
)

export default Skill;
