import React, { useState } from "react";

// Form to create a new capsule
const CapsuleForm = ({ onSubmit }) => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [unlockDate, setUnlockDate] = useState("");

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ title, desc, unlockDate });
    setTitle("");
    setDesc("");
    setUnlockDate("");
  };

  return (
    <form className="capsule-form" onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        placeholder="Title"
        onChange={e => setTitle(e.target.value)}
        required
      />
      <textarea
        value={desc}
        placeholder="Description"
        onChange={e => setDesc(e.target.value)}
        required
      />
      <input
        type="date"
        value={unlockDate}
        onChange={e => setUnlockDate(e.target.value)}
        required
      />
      <button type="submit">Create Capsule</button>
    </form>
  );
};

export default CapsuleForm;

