import React, { Fragment } from 'react'
import SkillBar from './skill-bar'

export default ({ title = 'Habiletés', skills = [] }) => {
  return (
    <Fragment>
      <h1>{title}</h1>
      {skills.map(skill => (
        <SkillBar key={skill.name} name={skill.name} level={skill.level} />
      ))}
    </Fragment>
  )
}
