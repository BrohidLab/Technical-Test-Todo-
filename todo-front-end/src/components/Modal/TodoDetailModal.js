'use client';

import { ChatBubbleOvalLeftEllipsisIcon, ChatBubbleOvalLeftIcon } from '@heroicons/react/24/outline';
import { useEffect, useState } from 'react';

export default function DetailTodoModal({ isOpen, onClose, todo, onAskAI }) {
  const [loading, setLoading] = useState(false);
  const [aiResult, setAiResult] = useState(null);

  useEffect(() => {
    if (!isOpen) {
      setAiResult(null);
    }
  }, [isOpen]);


  if (!isOpen || !todo) return null;

  const handleAskAI = async () => {
    if (!onAskAI) return;
    setLoading(true);

    try {
      const result = await onAskAI(todo);
      setAiResult(result);
    } catch (err) {
      setAiResult('Gagal mendapatkan rekomendasi AI.');
    } finally {
      setLoading(false);
    }
  };


  const statusColors = {
    created: 'bg-gray-300 text-gray-800',
    on_going: 'bg-teal-100 text-teal-800',
    completed: 'bg-green-100 text-green-800',
    problem: 'bg-red-100 text-red-800',
  };

  return (
    <>
      <div
        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-40"
        onClick={onClose}
      />

      <div
        className="fixed inset-0 flex items-center justify-center p-6 z-50"
        onClick={onClose}
      >
        <div
          className="bg-white rounded-xl max-w-md w-full p-6 shadow-lg relative"
          onClick={(e) => e.stopPropagation()}
        >
          <button
            onClick={onClose}
            aria-label="Close"
            className="absolute top-4 right-4 p-2 rounded hover:bg-gray-100 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-gray-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          <div className="mb-1">
            <span
              className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                statusColors[todo.status] || 'bg-gray-300 text-gray-800'
              }`}
            >
              {todo.status.replace('_', ' ').toUpperCase()}
            </span>
          </div>

          <h2 className="text-xl font-semibold mb-4 text-gray-900">{todo.title}</h2>

          {todo.problem_desc && (
            <>
              <p className='text-gray-500 mb-1 text-sm font-bold'>Deskripsi Problem</p>
              <p className="mb-6 text-gray-700 text-md whitespace-pre-wrap">{todo.problem_desc}</p>
            </>
          )}

          {aiResult && (
            <div className="mt-4 mb-3 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm font-semibold text-blue-700 mb-1">
                Rekomendasi AI
              </p>
              <p className="text-gray-700 whitespace-pre-wrap text-sm">
                {aiResult}
              </p>
            </div>
          )}

          {todo.status === 'problem' && (
            <div className='flex items-center justify-end'>
              <button
                onClick={handleAskAI}
                disabled={loading}
                className="flex items-center gap-2 px-10 py-2 rounded-md bg-blue-500 text-sm text-white font-semibold hover:bg-blue-200 cursor-pointer active:scale-95 transition"
              >
                {loading ? 'Processing...' :
                  <> 
                    <ChatBubbleOvalLeftEllipsisIcon className="w-5 h-5" />
                    Rekomendasi AI
                  </>
                }
              </button>
            </div>

          )}
        </div>
      </div>
    </>
  );
}
