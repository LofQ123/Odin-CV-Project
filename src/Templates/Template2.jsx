import PropTypes from 'prop-types';

Title.propTypes = {
  title: PropTypes.string,
  size: PropTypes.object
}

Template2.propTypes = {
  size: PropTypes.object,
  data: PropTypes.object
}

Personal.propTypes = {
  size: PropTypes.object,
  data: PropTypes.object
}

SkillsProfile.propTypes = {
  size: PropTypes.object,
  data: PropTypes.object
}


const color1 = "#523d5e";
const color2 = "#484848";

export default function Template2({size, data}) {
  function BackgroundStripe() {
    return (
      <div style={{ 
        backgroundColor: color1, 
        width: "40%", 
        height: "100%",
        position: "absolute",
        zIndex: "-1",
      }}></div>
    )
  }

  return (
    <>
      <BackgroundStripe />
      <Personal size={size} data={data} />
      <SkillsProfile size={size} data={data} />
      <Education size={size} data={data} />
      <Experience size={size} data={data} />
      <Awards size={size} data={data} />
      <Reference size={size} data={data} />
    </>
  )
}

function Title({title, size}) {
  return (
    <div style={{ height:"3%", display: "flex", color: "white"}}>
      <div style={{width: "40%", height: "100%", backgroundColor: color1, borderTop: "4px solid white", borderBottom: "4px solid white", boxSizing: "border-box"}}></div>
      <div style={{width: "60%", height: "100%", backgroundColor: color2, display: "flex", alignItems: "center", justifyContent: "end"}}>
        <div style={{fontSize: size[18], fontWeight: "bold", lineHeight: size[18], marginRight: size[22]}}>{title}</div>
      </div>
    </div>
  )
}

function Personal({size, data}) { 
  function Name({size, data}) {
    return  (
      <div style={{
        width: "40%", 
        height: "100%", 
        color: "white", 
        margin: 0,
        padding: 0,
        display: "flex",
      }}>
        <div style={{ 
          textAlign: "right", 
          fontSize: size[32], 
          lineHeight: size[32], 
          fontWeight: "bold",
          alignSelf: "end",
          marginBottom: size[26],
          marginRight: size[16]
        }}>{`${data.personal.firstName}`.toUpperCase()} {`${data.personal.lastName}`.toUpperCase()}</div>
      </div>
    )
  }

  function Contact({size, data}) {
    return (
      <div style={{
        width: "60%", 
        height: "100%", 
        color: "black", 
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "end",
        flexDirection: "column",
        outline: "1px solid white"
      }}>
        <div style={{ 
          textAlign: "left", 
          fontSize: size[14], 
          lineHeight: size[38], 
          marginLeft: size[20],
        }}>Location: {data.personal.location}</div>
        <div style={{ 
          textAlign: "left", 
          fontSize: size[14], 
          lineHeight: size[14], 
          marginLeft: size[20],
          marginBottom: size[26],
        }}>Contact: {data.personal.contact}</div>
      </div>
    )
  }

  return (
    <>
      <div style={{display: "flex", width: "100%", height: "15%"}}>
        <Name size={size} data={data} />
        <Contact size={size} data={data} />
      </div>
    </>
  )
}

function SkillsProfile({size, data}) {
  function SkillBlock({skill, lvl, size}) {
    return (
      <>
        <p 
          style={{
            fontSize: size[12], 
            lineHeight: size[12], 
            margin: 0,
            textAlign: "right"
          }}
        >{skill}</p>
        <div style={{width: "100%", height: size[10], backgroundColor: color2, marginTop: size[8], marginBottom: size[8], boxSizing: "border-box", display: "flex", border: "3px solid white"}}>
          <div style={{backgroundColor: "white", width: `${lvl}%`, height: "100%"}}></div>
          <div></div>
        </div>
      </>
    )
  }

  function Skills({size, data}) {
    return (
      <div style={{ 
        width: "40%", 
        padding: `${size[10]} ${size[20]}`, 
        boxSizing: "border-box", 
        display: "flex", 
        flexDirection: "column", 
        justifyContent: "space-between",
        color: "white"
      }}>
        {data.skills.map(item=>(
          <SkillBlock 
            key={item.id}
            skill={item.skill}
            lvl={item.lvl}
            size={size}
          />
        ))}
      </div>
    )
  }

  function Profile({size, data}) {
    return (
      <div style={
        {width: "60%", 
        color: "black", 
        fontSize: size[12],
        lineHeight: size[12],
        textAlign: "justify",
        padding: `${size[10]} ${size[20]}`,
        boxSizing: "border-box"
      }}>{data.profile}</div>
    )
  }

  return ( 
    <>
      <Title size={size} title={"SKILLS AND PROFILE"} />
      <div style={{width: "100%", display: "flex", }}>
        <Skills size={size} data={data}/>
        <Profile size={size} data={data}/>
      </div>
    </>
  )
}

function Education({size, data}) {
  function EducationBlock({size, place, period}) {
    return(
      <div style={{width: "100%", display: "flex", fontSize: size[12], color: "white"}}>
        <div style={{ 
          width: "40%", 
          textAlign: "right", 
          padding: `${size[10]} ${size[20]} 0 ${size[20]}`, 
          boxSizing: "border-box",
          fontSize: size[12],
        }}>
          {period}
        </div>
        <div style={{ 
          width: "60%", 
          color: 'black', 
          textAlign: "left", 
          padding: `${size[10]} ${size[20]} 0 ${size[20]}`, 
          boxSizing: "border-box",
          fontSize: size[12],
        }}>
          {place}
        </div>
     </div>
    )
  }

  return (
    <>
      <Title size={size} data={data} title={"EDUCATION"} />
      <div style={{paddingBottom: size[12]}}>
        {data.education.map(item=>(
          <EducationBlock 
            place={item.place}
            period={item.period}
            size={size}
            key={item.id}
          />
      ))}
      </div>
    </>
  )
}

function Experience({size, data}) {
  function ExperienceBlock({size, position, period}) {
    return(
      <div style={{width: "100%", display: "flex", fontSize: size[12], color: "white" }}>
        <div style={{ 
          width: "40%", 
          textAlign: "right", 
          padding: `${size[10]} ${size[20]} 0 ${size[20]}`, 
          boxSizing: "border-box",
          fontSize: size[12],
        }}>
          {period}
        </div>
        <div style={{ 
          width: "60%", 
          color: 'black', 
          textAlign: "left", 
          padding: `${size[10]} ${size[20]} 0 ${size[20]}`, 
          boxSizing: "border-box",
          fontSize: size[12],
        }}>
          {position}
        </div>
     </div>
    )
  }
  
  return (
    <>
      <Title size={size} data={data} title={"EXPERIENCE"} />
      <div style={{paddingBottom: size[12]}}>
        {data.experience.map(item=>(
          <ExperienceBlock 
            key={item.id}
            size={size}
            position={item.position}
            period={item.period}
          />
        ))}
      </div>
    </>
  )
}

function Awards({size, data}) {
  function AwardBlock({size, award, date}) {
    return(
      <div style={{width: "100%", display: "flex", fontSize: size[12] }}>
        <div style={{ 
          width: "40%", 
          textAlign: "right", 
          padding: `${size[10]} ${size[20]} 0 ${size[20]}`, 
          boxSizing: "border-box",
          fontSize: size[12],
          color: "white"
        }}>
          {date}
        </div>
        <div style={{ 
          width: "60%", 
          color: 'black', 
          textAlign: "left", 
          padding: `${size[10]} ${size[20]} 0 ${size[20]}`, 
          boxSizing: "border-box",
          fontSize: size[12],
        }}>
          {award}
        </div>
     </div>
    )
  }

  return(
    <>
      <Title size={size} data={data} title={"AWARDS"} />
      <div style={{paddingBottom: size[12]}}>
        {data.awards.map(item=>(
          <AwardBlock 
            key={item.id}
            award={item.award}
            date={item.date}
            size={size}
          />
        ))}
      </div>
    </>
  )
}

function Reference({size, data}) {
  function ReferenceBlock({size, name, contact}) {
    return(
      <div style={{width: "100%", display: "flex", fontSize: size[12] }}>
        <div style={{ 
          width: "40%", 
          textAlign: "right", 
          padding: `${size[10]} ${size[20]} 0 ${size[20]}`, 
          boxSizing: "border-box",
          fontSize: size[12],
          color: "white"
        }}>
          {name}
        </div>
        <div style={{ 
          width: "60%", 
          color: 'black', 
          textAlign: "left", 
          padding: `${size[10]} ${size[20]} 0 ${size[20]}`, 
          boxSizing: "border-box",
          fontSize: size[12],
        }}>
          {contact}
        </div>
     </div>
    )
  }

  return(
    <>
      <Title size={size} data={data} title={"REFERENCE"} />
      <div style={{paddingBottom: size[12]}}>
        {data.reference.map(item=>(
          <ReferenceBlock 
            key={item.id}
            name={item.name}
            contact={item.contact}
            size={size}
          />
        ))}
      </div>
    </>
  )
}
