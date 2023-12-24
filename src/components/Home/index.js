import {Component} from 'react'
import Loader from 'react-loader-spinner'
import TeamCard from '../TeamCard'

import './index.css'

class Home extends Component {
  state = {teamCardData: [], isLoading: true}

  componentDidMount() {
    this.getIplTeamcardDetails()
  }

  getIplTeamcardDetails = async () => {
    const response = await fetch('https://apis.ccbp.in/ipl')
    const data = await response.json()
    const updatedData = data.teams.map(each => ({
      id: each.id,
      teamImageUrl: each.team_image_url,
      name: each.name,
    }))
    this.setState({teamCardData: updatedData, isLoading: false})
  }

  onloader = () => (
    <div testid="loader" className="loading">
      <Loader type="Oval" color="#ffffff" height={50} />)
    </div>
  )

  onrenderHomeContaier = () => {
    const {teamCardData} = this.state
    return (
      <div>
        <div className="ipl-home-image-heading-container">
          <img
            src="https://assets.ccbp.in/frontend/react-js/ipl-logo-img.png"
            alt="ipl logo"
            className="home-logo-image"
          />
          <h1 className="home-ipl-heading">IPL Dashboard</h1>
        </div>
        <ul className="unorderd-home-data">
          {teamCardData.map(each => (
            <TeamCard key={each.id} iplTeamDetails={each} />
          ))}
        </ul>
      </div>
    )
  }

  render() {
    const {isLoading} = this.state

    return (
      <div className="ipl-app-container">
        {isLoading ? this.onloader() : this.onrenderHomeContaier()}
      </div>
    )
  }
}

export default Home
