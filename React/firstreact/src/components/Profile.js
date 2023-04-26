

function Profile(user)
{
    const {name, lastname} = user; 
    return (
    <h1>Name: {name} {lastname}</h1>
    )
}

export default Profile;