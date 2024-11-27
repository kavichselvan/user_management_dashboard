import React, { useState, useEffect } from 'react';

const UserForm = ({ onSubmit, userData }) => {
  const [user, setUser] = useState({
    name: '',
    username: '',
    email: '',
    address: { street: '', suite: '', city: '', zipcode: '' },
    phone: '',
    website: '',
    company: { name: '' },
  });

  useEffect(() => {
    if (userData) setUser(userData);
  }, [userData]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const handleAddressChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, address: { ...user.address, [name]: value } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(user);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" value={user.name} onChange={handleChange} placeholder="Name" required />
      <input type="text" name="username" value={user.username} onChange={handleChange} placeholder="Username" required />
      <input type="email" name="email" value={user.email} onChange={handleChange} placeholder="Email" required />
      <input type="text" name="street" value={user.address.street} onChange={handleAddressChange} placeholder="Street" />
      <input type="text" name="suite" value={user.address.suite} onChange={handleAddressChange} placeholder="Suite" />
      <input type="text" name="city" value={user.address.city} onChange={handleAddressChange} placeholder="City" />
      <input type="text" name="zipcode" value={user.address.zipcode} onChange={handleAddressChange} placeholder="Zipcode" />
      <input type="text" name="phone" value={user.phone} onChange={handleChange} placeholder="Phone" required />
      <input type="text" name="website" value={user.website} onChange={handleChange} placeholder="Website" />
      <input
        type="text"
        name="company"
        value={user.company.name}
        onChange={(e) => setUser({ ...user, company: { name: e.target.value } })}
        placeholder="Company"
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default UserForm;
