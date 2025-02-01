import PropTypes from 'prop-types';
import Personal from "./Form/Personal"
import Profile from "./Form/Profile"
import Experience from "./Form/Experience"
import Awards from "./Form/Awards"
import Education from "./Form/Education"
import Skills from "./Form/Skills"
import Reference from './Form/References';

Form.propTypes = {
  data: PropTypes.object,
  setData: PropTypes.func
}

export default function Form({
  data,
  setData,
}) {
  return (
    <>
      <div id="form">
        <form>
          <Personal data={data} setData={setData} />
          <Profile data={data} setData={setData} />
          <Experience data={data} setData={setData} />
          <Awards data={data} setData={setData} />
          <Education data={data} setData={setData} />
          <Skills data={data} setData={setData} />
          <Reference data={data} setData={setData} />
        </form>
      </div>
    </>
  )
}