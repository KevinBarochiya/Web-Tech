import { useState } from 'react'
import './App.css'

function App() {
  const [profiles, setProfiles] = useState([])
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    photo: '',
    bio: '',
    location: ''
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (formData.name && formData.email) {
      setProfiles(prev => [...prev, { ...formData, id: Date.now() }])
      setFormData({
        name: '',
        email: '',
        photo: '',
        bio: '',
        location: ''
      })
    }
  }

  const handleDelete = (id) => {
    setProfiles(prev => prev.filter(profile => profile.id !== id))
  }

  return (
    <div className="container">
      <form onSubmit={handleSubmit} className="profile-form">
        <h2>Create New Profile</h2>
        <div className="form-group">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            placeholder="Name"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            placeholder="Email"
            required
          />
        </div>
        <div className="form-group">
          <input
            type="url"
            name="photo"
            value={formData.photo}
            onChange={handleInputChange}
            placeholder="Photo URL"
          />
        </div>
        <div className="form-group">
          <textarea
            name="bio"
            value={formData.bio}
            onChange={handleInputChange}
            placeholder="Bio"
          />
        </div>
        <div className="form-group">
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleInputChange}
            placeholder="Location"
          />
        </div>
        <button type="submit">Create Profile</button>
      </form>

      <div className="profiles-container">
        <h2>User Profiles</h2>
        {profiles.map(profile => (
          <div key={profile.id} className="profile-card">
            {profile.photo && (
              <img src={profile.photo} alt={profile.name} className="profile-photo" />
            )}
            <div className="profile-info">
              <h3>{profile.name}</h3>
              <p>{profile.email}</p>
              {profile.bio && <p>{profile.bio}</p>}
              {profile.location && <p>📍 {profile.location}</p>}
            </div>
            <button 
              onClick={() => handleDelete(profile.id)}
              className="delete-btn"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
export default App
