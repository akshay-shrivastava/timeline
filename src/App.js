import React, { useState, useEffect } from 'react'
import Timeline from 'react-calendar-timeline'
// make sure you include the timeline stylesheet or the timeline will not be styled
import 'react-calendar-timeline/lib/Timeline.css'
import moment from 'moment'
import Search from './public/search.png'
import Clear from './public/clear.png'

import './App.css'

const initGroups = [
  { id: 1, title: 'ieco session 1' },
  { id: 2, title: 'ieco session 2' },
  { id: 3, title: 'samskriti kalari' },
  { id: 4, title: 'GOY english'},
  { id: 5, title: 'GOY tamil'},
  { id: 6, title: 'Sadhguru exclusive'},
  { id: 7, title: 'Pancha bhuta kriya'},
]

const initItems = [
  {
    id: 1,
    group: 1,
    title: `${moment()} to ${moment().add(1, 'hour')}`,
    start_time: moment(),
    end_time: moment().add(1, 'hour')
  },
  {
    id: 2,
    group: 2,
    title: `${moment()} to ${moment().add(1, 'hour')}`,
    start_time: moment(),
    end_time: moment().add(1, 'hour')
  },

  {
    id: 3,
    group: 3,
    title: `${moment().add(-0.5, 'hour')} to ${moment().add(0.5, 'hour')}`,
    start_time: moment().add(-2000 , 'hour'),
    end_time: moment().add(-1990, 'hour')
  },
  {
    id: 4,
    group: 4,
    title: `${moment().add(2, 'hour')} to ${moment().add(3, 'hour')}`,
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  },
  {
    id: 5,
    group: 5,
    title: `${moment().add(2, 'hour')} to ${moment().add(3, 'hour')}`,
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  },
  {
    id: 6,
    group: 6,
    title: `${moment().add(2, 'hour')} to ${moment().add(3, 'hour')}`,
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  },
  {
    id: 7,
    group: 7,
    title: `${moment().add(2, 'hour')} to ${moment().add(3, 'hour')}`,
    start_time: moment().add(2, 'hour'),
    end_time: moment().add(3, 'hour')
  }


]

function App() {
const [filteredGroups, setFilteredGroups] = useState(initGroups)
const [items, setItems] = useState(initItems)
const [searchValue, setSearchValue] = useState('')

useEffect(() => {
  const delayDebounceFn = setTimeout(() => {
    const groupList = initGroups.filter(obj => {
      return obj.title.toLocaleLowerCase().includes(searchValue.toLocaleLowerCase())
    })
    setFilteredGroups(groupList)
  }, 500)
  return () => clearTimeout(delayDebounceFn)
}, [searchValue])
const handleIconClick = (e) => {
  if(e.target.id === 'Clear') {
    setSearchValue('')
    setFilteredGroups(initGroups)
  }
}
const RenderProgramfilter = () => {
   return (
     <div className='placeholder'>
      <input
        autoFocus="autoFocus"
        className='searchInput'
        placeholder="Search Program..."
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
      />
      { <img
          id={searchValue ? 'Clear' : 'Search'}
          src={ searchValue ? Clear : Search }
          className={searchValue ? 'imgIconClear' : 'imgIconSearch' } 
          onClick={handleIconClick}
          />
      }
     </div>
   )
}

  return (
    <>
    <RenderProgramfilter />
    <Timeline
    groups={filteredGroups}
    items={items}
    defaultTimeStart={moment().add(-12, 'hour')}
    defaultTimeEnd={moment().add(12, 'hour')}
  />
      </>

  );
}

export default App;
