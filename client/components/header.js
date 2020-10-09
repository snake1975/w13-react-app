import React from 'react'
import { Link, useParams } from 'react-router-dom'

const Header = () => {
  const linkToGo = useParams()
  return (
    <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
      <Link to="/">go-back</Link>
      <div>{linkToGo.userName}:</div>
    </div>
  )
}

// const Header2 = () => {
//   const linkToGo = useParams()
//   return (
//     <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
//       <Link to={`/${linkToGo.userName}`}>go-repository-list</Link>
//       <div>{linkToGo.userName}:</div>
//     </div>
//   )
// }

export default React.memo(Header)
