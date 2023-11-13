import React from 'react'

function Skill({ imgSrc, altText}) {
  return (
    <img className="skills" src={imgSrc} alt={altText} />
  )
}

export default Skill