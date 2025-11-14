import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import CapsuleForm from "../components/CapsuleForm";
import CapsuleList from "../components/CapsuleList";
import { capsulesAPI } from "../utils/api";

// Capsule browsing/creation
const Capsules = () => {
  const [capsules, setCapsules] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    loadCapsules();
  }, []);

  const loadCapsules = async () => {
    try {
      setLoading(true);
      const data = await capsulesAPI.getAll();
      setCapsules(data.data || data || []);
      setError(null);
    } catch (err) {
      console.error('Failed to load capsules:', err);
      setError('Failed to load capsules. Using demo data.');
      // Fallback to demo data if API fails
      setCapsules([
        {
          id: 1,
          title: "Future Me",
          desc: "A message to my future self",
          unlockDate: "2026-01-01",
          createdAt: new Date().toISOString()
        }
      ]);
    } finally {
      setLoading(false);
    }
  };

  const handleAddCapsule = async (capsule) => {
    try {
      const newCapsule = await capsulesAPI.create(capsule);
      setCapsules([...capsules, newCapsule.data || newCapsule]);
    } catch (err) {
      // Fallback to local state if API fails
      setCapsules([...capsules, { ...capsule, id: Date.now(), createdAt: new Date().toISOString() }]);
    }
  };

  const handleUnlock = async (id) => {
    try {
      await capsulesAPI.unlock(id);
      loadCapsules();
    } catch (err) {
      alert(`Capsule ${id} unlocked!`);
    }
  };

  const handleDelete = async (id) => {
    try {
      await capsulesAPI.delete(id);
      setCapsules(capsules.filter(c => c.id !== id));
    } catch (err) {
      setCapsules(capsules.filter(c => c.id !== id));
    }
  };

  return (
    <div className="capsules">
      <Navbar />
      <div className="page-header">
        <h1>Time Capsules</h1>
        <p>Create time capsules that unlock in the future</p>
      </div>
      
      {error && (
        <div className="notification notification-warning" style={{ position: 'relative', top: 'auto', right: 'auto', margin: '1rem 0' }}>
          {error}
        </div>
      )}
      
      <CapsuleForm onSubmit={handleAddCapsule} />
      
      {loading ? (
        <div className="loader">Loading capsules...</div>
      ) : (
        <CapsuleList capsules={capsules} onUnlock={handleUnlock} onDelete={handleDelete} />
      )}
    </div>
  );
};

export default Capsules;

