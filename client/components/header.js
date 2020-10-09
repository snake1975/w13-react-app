import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const linkToGo = useParams()
  return (
    <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
      <Link to="/" id="go-back">
        Go Back
      </Link>
      <div id="repository-name">{linkToGo.userName}:</div>
    </div>
  )
}

export default React.memo(Header)
