import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditUser = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
    },
    phone: '',
    website: '',
    company: { name: '' },
  });

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response) => response.json())
      .then((data) => setUser(data))
      .catch((error) => console.error('Error fetching user:', error));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      address: { ...user.address, [name]: value },
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate updating user data
    console.log('Updated user:', user);
    navigate('/');
  };

  return (
    <div>
      <h1>Edit User</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" />
        <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" />
        <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" />
        <input type="text" name="street" value={user.address.street} onChange={handleAddressChange} placeholder="Street" />
        <input type="text" name="suite" value={user.address.suite} onChange={handleAddressChange} placeholder="Suite" />
        <input type="text" name="city" value={user.address.city} onChange={handleAddressChange} placeholder="City" />
        <input type="text" name="zipcode" value={user.address.zipcode} onChange={handleAddressChange} placeholder="Zipcode" />
        <input type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" />
        <input type="text" name="website" value={user.website} onChange={handleChange} placeholder="Website" />
        <input type="text" name="company" value={user.company.name} onChange={(e) => setUser({ ...user, company: { name: e.target.value } })} placeholder="Company" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
};

export default EditUser;
