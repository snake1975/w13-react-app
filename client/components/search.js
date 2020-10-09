import React, { useState } from 'react'
// import { Switch, Route } from 'react-router-dom'
// import Header from './header'
import { history } from '../redux'

const Search = () => {
  const [value, setValue] = useState('')
  const onChange = (e) => {
    setValue(e.target.value)
  }
  const onClick = () => {
    history.push(`/${value}`)
  }

  return (
    <div>
      {/* <Header /> */}
      <div className="flex items-center justify-center">
        <form className="w-full max-w-sm">
          <div className="flex items-center border-b border-indigo-800 py-2">
            <input
              className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
              id="input-field"
              type="text"
              placeholder="Search"
              aria-label="Search"
              value={value}
              onChange={onChange}
            />
            <button
              className="flex-shrink-0 bg-indigo-800 hover:indigo-600 border-indigo-800 hover:border-indigo-600 text-sm border-4 text-white py-1 px-2 rounded"
              id="search-button"
              type="button"
              onClick={onClick}
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

Search.propTypes = {}

export default React.memo(Search)
