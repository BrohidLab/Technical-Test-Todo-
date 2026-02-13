'use client';

import { useState, useEffect } from 'react';

export default function TodoModal({ isOpen, onClose, onSave }) {
  const [title, setTitle] = useState('');
  const [status, setStatus] = useState('created');
  const [problemDesc, setProblemDesc] = useState('');

  const statuses = [
    { value: 'created', label: 'Created', color: 'bg-gray-500' },
    { value: 'on_going', label: 'On Going', color: 'bg-teal-500' },
    { value: 'completed', label: 'Completed', color: 'bg-green-500' },
    { value: 'problem', label: 'Problem', color: 'bg-red-500' },
  ];

  useEffect(() => {
    if (status !== 'problem') setProblemDesc('');
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim()) return;
    onSave({ title, status, problem_desc: problemDesc });
    setTitle('');
    setStatus('created');
    setProblemDesc('');
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/40 flex items-center justify-center z-50"
      onClick={onClose}
    >
      <div
        className="bg-white rounded-2xl shadow-lg w-full max-w-md p-6 animate-fadeIn relative"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-xl font-semibold mb-4 text-gray-800">Add Todo</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Todo Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-emerald-500 focus:outline-none transition"
            autoFocus
            required
          />
          <div className="flex gap-2 mt-2 flex-wrap">
            {statuses.map((s) => (
              <button
                key={s.value}
                type="button"
                onClick={() => setStatus(s.value)}
                className={`px-3 py-1 rounded-full text-white text-sm transition ${
                  status === s.value
                    ? `${s.color} shadow`
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {s.label}
              </button>
            ))}
          </div>
          {status === 'problem' && (
            <textarea
              placeholder="Describe the problem"
              value={problemDesc}
              onChange={(e) => setProblemDesc(e.target.value)}
              className="border border-gray-200 rounded-lg px-4 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none transition"
              rows={3}
              required
            />
          )}
          <div className="flex justify-end gap-3 mt-2">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 rounded-full text-gray-700 bg-gray-100 hover:bg-gray-200 transition"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 rounded-full text-white bg-emerald-600 hover:bg-emerald-700 transition"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
