import { useState } from 'react';

const ProfileForm = () => {
  const [profilePic, setProfilePic] = useState(null);
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [cleanFrequency, setCleanFrequency] = useState('');
  const [smoking, setSmoking] = useState(false);
  const [pets, setPets] = useState(false);
  const [alcohol, setAlcohol] = useState(false);
  const [sleepingHabit, setSleepingHabit] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    // For example, you can send the form data to a server or perform validation

    // Reset the form fields
    setProfilePic(null);
    setName('');
    setJob('');
    setCleanFrequency('');
    setSmoking(false);
    setPets(false);
    setAlcohol(false);
    setSleepingHabit('');
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h2>Profile Information</h2>
      <div>
        <label htmlFor="profilePic">Profile Picture:</label>
        <input
          type="file"
          id="profilePic"
          accept="image/*"
          onChange={(e) => setProfilePic(e.target.files[0])}
        />
      </div>

      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="job">Job:</label>
        <input
          type="text"
          id="job"
          value={job}
          onChange={(e) => setJob(e.target.value)}
        />
      </div>

      <div>
        <label htmlFor="cleanFrequency">Clean Room Frequency:</label>
        <select
          id="cleanFrequency"
          value={cleanFrequency}
          onChange={(e) => setCleanFrequency(e.target.value)}
        >
          <option value="">Select frequency</option>
          <option value="1">1 day per week</option>
          <option value="2">2 days per week</option>
          <option value="3">3 days per week</option>
          <option value="4">4 days per week</option>
          <option value="5">5 days per week</option>
          <option value="6">6 days per week</option>
          <option value="7">Every day</option>
        </select>
      </div>

      <div>
        <label htmlFor="smoking">Smoking:</label>
        <input
          type="checkbox"
          id="smoking"
          checked={smoking}
          onChange={(e) => setSmoking(e.target.checked)}
        />
      </div>

      <div>
        <label htmlFor="pets">Pets:</label>
        <input
          type="checkbox"
          id="pets"
          checked={pets}
          onChange={(e) => setPets(e.target.checked)}
        />
      </div>

      <div>
        <label htmlFor="alcohol">Alcohol:</label>
        <input
          type="checkbox"
          id="alcohol"
          checked={alcohol}
          onChange={(e) => setAlcohol(e.target.checked)}
        />
      </div>

      <div>
        <label>Sleeping Habits:</label>
        <div>
          <label htmlFor="earlyBird">
            Early Bird
            <input
              type="radio"
              id="earlyBird"
              name="sleepingHabit"
              value="earlyBird"
              checked={sleepingHabit === 'earlyBird'}
              onChange={(e) => setSleepingHabit(e.target.value)}
            />
          </label>
        </div>
        <div>
          <label htmlFor="lateOwl">
            Late Owl
            <input
              type="radio"
              id="lateOwl"
              name="sleepingHabit"
              value="lateOwl"
              checked={sleepingHabit === 'lateOwl'}
              onChange={(e) => setSleepingHabit(e.target.value)}
            />
          </label>
        </div>
      </div>

      <button type="submit">Submit</button>
    </form>
  );
};

export default ProfileForm;