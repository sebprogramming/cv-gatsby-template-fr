import React, { Fragment } from 'react'

export default ({ title = 'À propos', text = 'À propos' }) => {
  return (
    <Fragment>
      <h1>À propos</h1>
      <p dangerouslySetInnerHTML={{ __html: text }}></p>
    </Fragment>
  )
}
