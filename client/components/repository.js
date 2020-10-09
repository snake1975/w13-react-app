import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import ReactMarkdown from 'react-markdown'

import Header2 from './header2'
// import Head from './head'

const Repository = () => {
  const { userName, repositoryName } = useParams()
  const [readmeMd, setValue] = useState()

  useEffect(() => {
    axios
      .get(`https://raw.githubusercontent.com/${userName}/${repositoryName}/master/README.md`)
      .then((it) => {
        setValue(it.data)
      })
  }, [userName, repositoryName])

  return (
    <div>
      <Header2 />
      <div>
        <div className="p-4" id="description">
          <ReactMarkdown source={readmeMd} />
        </div>
      </div>
    </div>
  )
}

Repository.propTypes = {}

export default Repository
