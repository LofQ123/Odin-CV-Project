import PropTypes from 'prop-types';

Template1.propTypes = {
  data: PropTypes.object,
  size: PropTypes.object
}

Personal.propTypes = {
  data: PropTypes.object,
  size: PropTypes.object
}

Profile.propTypes = {
  data: PropTypes.object,
  size: PropTypes.object
}

Experience.propTypes = {
  data: PropTypes.object,
  size: PropTypes.object
}

ExperienceBlock.propTypes = {
  position: PropTypes.string,
  period: PropTypes.string,
  size: PropTypes.object
}

Awards.propTypes = {
  data: PropTypes.object,
  size: PropTypes.object
}

AwardBlock.propTypes = {
  award: PropTypes.string,
  date: PropTypes.string,
  size: PropTypes.object
}

Education.propTypes = {
  data: PropTypes.object,
  size: PropTypes.object
}

EducationBlock.propTypes = {
  place: PropTypes.string,
  period: PropTypes.string,
  size: PropTypes.object
}

Skills.propTypes = {
  data: PropTypes.object,
  size: PropTypes.object
}

SkillBlock.propTypes = {
  skill: PropTypes.string,
  lvl: PropTypes.string,
  size: PropTypes.object
}

Reference.propTypes = {
  data: PropTypes.object,
  size: PropTypes.object
}

ReferenceBlock.propTypes = {
  contact: PropTypes.string,
  name: PropTypes.string,
  size: PropTypes.object
}

const color1 = "#333e50";
const color2 = "#c65911";

export default function Template1({size, data}) {
  return (
    <>
      <Personal data={data} size={size}/>
      <div style={{ 
        height: "80%", 
        color: "black", 
        fontWeight: "500", 
        textAlign: "justify",
        padding: `${size[16]} ${size[30]}`
      }}>
        <Profile data={data} size={size}/>
        <div style={{ display: "flex" }}>
          <div style={{
            borderRight: "4px solid rgba(2, 2, 2, 0.27)",
            width: "65%"
          }}>
            <Experience data={data} size={size} />
          </div>
          <div style={{
            //border: "1px solid black",
            width: "35%",
          }}>
            <Awards data={data} size={size} />
            <Education data={data} size={size} />
            <Skills data={data} size={size} />
            <Reference data={data}  size={size} />
          </div>
        </div>
      </div>
    </>
  )
}

function Personal({data, size}) {
  return(
    <div style={{ 
      backgroundColor: color1, 
      height: "20%", 
      display: "flex", 
      flexDirection: "column",
      justifyContent: "center"
    }}>
      <div style={{ fontSize: size[32], fontWeight: "bold", color: "white" }}>
        <span style={{ color: color2 }}>{data.personal.firstName}</span> {data.personal.lastName}
      </div>
      <p style={{ margin: 0, fontSize: size[16], color: "white" }}>{data.personal.location}</p>
      <p style={{ margin: 0, fontSize: size[16], color: "white" }}>{data.personal.contact}</p>
    </div>
  )
}

function Profile({data, size}) {
  return(
    <div style={{borderBottom: "4px solid rgba(2, 2, 2, 0.27)", paddingBottom: size[14], fontSize: size[12] }}>{data.profile}</div>
  )
}

function Experience({data, size}) {
  return (
    <>
      <div style={{ fontSize: size[20], fontWeight: "bold", color: color2, marginTop: size[8]}}>Experience</div>
      {data.experience.map(item=>(
        <ExperienceBlock 
          key={item.id}
          position={item.position}
          period={item.period}
          size={size} 
        />
      ))}
    </>
  )
}

function ExperienceBlock({position, period, size}) {
  return (
    <>
      <p style={{ textAlign: "right", margin: 0, marginRight: size[8], fontWeight: "bold", fontSize: size[12] }}>{period}</p>
      <p style={{ padding: 0, margin: 0, marginBottom: size[16], fontSize: size[12] }}>{position}</p>
    </>
  )
}

function Awards({data, size}) {
  return (
    <>
      <div style={{ fontSize: size[20], fontWeight: "bold", color: color2, marginLeft: size[10], marginTop: size[8]}}>Awards</div>
      {data.awards.map(item => (
        <AwardBlock 
          key={item.id}
          award={item.award}
          date={item.date}
          size={size}
        />
      ))}
    </>
  )
}

function AwardBlock({award, date, size}) {
  return (
    <div style={{ textAlign: "left", fontSize: size[12], marginLeft: size[10]}}>&#x2022; &nbsp; {award} ({date})</div>
  )
}

function Education({data, size}) {
  return (
    <>
      <div style={{ fontSize: size[20], fontWeight: "bold", color: color2, marginLeft: size[10], marginTop: size[10]}}>Education</div>
      {data.education.map(item => (
        <EducationBlock 
          key={item.id}
          place={item.place}
          period={item.period}
          size={size}
        />
      ))}
    </>
  )
}

function EducationBlock({place, period, size}) {
  return (
    <div style={{ textAlign: "left", fontSize: size[12], marginLeft: size[10]}}>&#x2022; &nbsp; {place} ({period})</div>
  )
}

function Skills({data, size}) {
  return (
    <>
      <div style={{ fontSize: size[20], fontWeight: "bold", color: color2, marginLeft: size[10], marginTop: size[10]}}>Skills</div>
        {data.skills.map(item => (
          <SkillBlock 
            key={item.id}
            skill={item.skill}
            lvl={item.lvl}
            size={size}
          />
      ))}
    </>
  )
}

function SkillBlock ({skill, lvl, size}) {
  return (
    <>
      <div style={{ textAlign: "left", fontSize: size[12], marginLeft: size[10]}}>&#x2022; &nbsp; {skill} ({lvl}/100)</div>
    </>
  )
}

function Reference ({data, size}) {
  return (
    <>
      <div style={{ fontSize: size[20], fontWeight: "bold", color: color2, marginLeft: size[10], marginTop: size[10]}}>Reference</div>
        {data.reference.map(item => (
          <ReferenceBlock 
            key={item.id}
            name={item.name}
            contact={item.contact}
            size={size}
          />
      ))}
    </>
  )
}

function ReferenceBlock({name, contact, size}) {
  return (
    <>
      <div style={{ textAlign: "left", fontSize: size[12], marginLeft: size[10]}}>&#x2022; &nbsp; {name} ({contact})</div>
    </>
  )
}