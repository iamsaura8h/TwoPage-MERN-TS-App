import React, { useState, useEffect } from "react";
import axios from "axios";

interface IUser {
  _id: string;
  name: string;
  age: number;
  about: string;
}

const OneFile: React.FC = () => {
  const [users, setUsers] = useState<IUser[]>([]);
  const [name, setName] = useState("");
  const [age, setAge] = useState<number | "">("");
  const [about, setAbout] = useState("");
  const [editingId, setEditingId] = useState<string | null>(null);

  const api = axios.create({ baseURL: "http://localhost:5000" });

  const fetchUsers = async () => {
    const res = await api.get("/users");
    setUsers(res.data.users);
  };

  useEffect(() => { fetchUsers(); }, []);

  const handleSubmit = async () => {
    if (!name || !age || !about) return alert("Fill all fields");
    if (editingId) {
      await api.put(`/users/${editingId}`, { name, age: Number(age), about });
      setEditingId(null);
    } else {
      await api.post("/users", { name, age: Number(age), about });
    }
    setName(""); setAge(""); setAbout("");
    fetchUsers();
  };

  const handleEdit = (user: IUser) => {
    setName(user.name); setAge(user.age); setAbout(user.about); setEditingId(user._id);
  };

  const handleDelete = async (id: string) => {
    await api.delete(`/users/${id}`);
    fetchUsers();
  };

  return (
    <div style={{ padding: 20 }}>
      <h2>{editingId ? "Edit User" : "Create User"}</h2>
      <input placeholder="Name" value={name} onChange={e => setName(e.target.value)} />
      <input placeholder="Age" type="number" value={age} onChange={e => setAge(e.target.value ? Number(e.target.value) : "")} />
      <input placeholder="About" value={about} onChange={e => setAbout(e.target.value)} />
      <button onClick={handleSubmit}>{editingId ? "Update" : "Create"}</button>

      <h2>All Users</h2>
      <ul>
        {users.map(u => (
          <li key={u._id}>
            {u.name} ({u.age}) - {u.about}{" "}
            <button onClick={() => handleEdit(u)}>Edit</button>
            <button onClick={() => handleDelete(u._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OneFile;
