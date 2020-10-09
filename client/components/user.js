import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

import Header from './header'
import Head from './head'

const User = () => {
  const { userName } = useParams()
  const [value, setValue] = useState([])

  useEffect(() => {
    axios.get(`https://api.github.com/users/${userName}/repos`).then((it) => {
      const repoName = it.data.map((item) => item.name)
      setValue(repoName)
    })
  }, [userName])

  return (
    <div>
      <Header />
      <Head title="Repository list" />
      <div>
        <div className="bg-indigo-800 text-white font-bold rounded-lg border shadow-lg p-10">
          <ul>
            {value.map((item) => {
              return (
                <li key={item}>
                  <Link to={`${userName}/${item}`}>{item}</Link>
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </div>
  )
}

User.propTypes = {}

export default User
