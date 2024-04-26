import React, {useState} from 'react'
import "./Naveen.css"
const Latestnews = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, for example, you can send the email to a server
    console.log("Submitted email:", email);
  };

  const handleChange = (event) => {
    setEmail(event.target.value);
  };
  return (
    <div className="card">
    <h1>Latest News</h1>
    <div className="card-content">
      <h2 className="card-title">Subscribe to Our Newsletter</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Enter your email"
            required
            className="form-input"
          />
        </div>
        <button type="submit" className="card-button">Subscribe</button>
      </form>
    </div>
  </div>
  )
}

export default Latestnews