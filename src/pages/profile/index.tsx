import ProfileTemplate from 'templates/Profile'

export default function Profile() {
  const name = 'Ianka Karúzia'
  const email = 'ianka@email.com'
  const bio = 'Some silly bio here!'
  const photoUrl = 'https://github.com/iankakaruzia.png'

  return <ProfileTemplate {...{ name, email, bio, photoUrl }} />
}
