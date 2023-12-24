import {Link} from 'react-router-dom'

import './index.css'

const TeamCard = props => {
  const {iplTeamDetails} = props
  const {id, name, teamImageUrl} = iplTeamDetails

  return (
    <Link to={`/team-matches/${id}`}>
      <li className="teamcard-list-container">
        <img src={teamImageUrl} alt={name} className="teamcard-images" />
        <p className="team-card-heading">{name}</p>
      </li>
    </Link>
  )
}

export default TeamCard
