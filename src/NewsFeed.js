import React, { useState } from 'react'
import './NewsFed.css'
import LineGraph from './LineGraph'
import TimeLine from './Timeline'
import Chip from '@material-ui/core/Chip'
import { Avatar } from '@material-ui/core'

function NewsFeed() {
  const [popularTopics, setTopics] = useState([
    'Technology',
    'Top Movies',
    'Upcoming Earnings',
    'Crypto',
    'Cannabis',
    'Healthcare Supplies',
    'Index ETFs',
    'Technology',
    'China',
    'Pharma',
  ])
  return (
    <div className='newsfeed'>
      <div className='newsfeed__container'>
        <div className='newsfeed__chart__section'>
          <div className='newsfeed_price_asset'>
            <h1> $114,656,84</h1>
            <p> $142.90 (-0,12) Today </p>
          </div>
          <div className='newsfeed__chart'>
            <LineGraph />
            <TimeLine />
          </div>
        </div>
        <div className='newsfeed__buying__section'>
          <h2> Buying Power</h2>
          <h2> $4.11</h2>
        </div>
        <div className='newsfeed__market__section'>
          <div className='newsfeed__market__box'>
            <p> Markets Closed</p>
            <h1> Happy Thanksgiving</h1>
          </div>
        </div>
        <div className='newsfeed__popularlists__section'>
          <div className='newsfeed__popularlists__intro'>
            <h1>Popular lists</h1>
            <p>Show More</p>
          </div>
          <div className='newsfeed_popularlists_badges'>
            {popularTopics.map((topic) => (
              <Chip
                className='topic__badge'
                variant='outlined'
                label={topic}
                avatar={
                  <Avatar
                    src={`https://avatars.dicebear.com/api/human/${topic}.svg`}
                  />
                }
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default NewsFeed
