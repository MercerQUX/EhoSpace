const ProfileCard = (props) =>{
    return (
        <div>
          <img src="" alt="avatar" />
          <div>
            <strong>{props.profile.fullName}</strong>
          </div>
          <div>
            <strong>{props.profile.country}</strong>
            <strong>{props.profile.city}</strong>
          </div>
        </div>
    )
}

export default ProfileCard;