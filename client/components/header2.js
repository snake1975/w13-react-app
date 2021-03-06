import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header2 = () => {
  const linkToGo = useParams()
  return (
    <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
      <Link to={`/${linkToGo.userName}`} id="go-repository-list">
        Back to Repository List
      </Link>
      <div>{linkToGo.userName}:</div>
    </div>
  )
}

export default React.memo(Header2)
