'use client';

import { useState, useEffect } from 'react';
import { api } from '@/lib/api';
import { EyeIcon, PencilSquareIcon } from '@heroicons/react/24/outline';
import TodoModal from '@/components/Modal/AddTodoModal';
import EditTodoModal from '@/components/Modal/UpdateStatusModal';
import DetailTodoModal from '@/components/Modal/TodoDetailModal';


export default function Home() {
  const [todos, setTodos] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDetailModalOpen, setIsDetailModalOpen] = useState(false);
  const [selectedTodo, setSelectedTodo] = useState(null);

  const fetchTodos = async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.get(`/todo?search=${search}`);
      setTodos(res.data);
    } catch (err) {
      setError('Error loading todos');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [search]);

  const handleOpenModal = () => setIsModalOpen(true);
  const handleCloseModal = () => setIsModalOpen(false);

  const handleSaveTodo = async ({ title, status, problem_desc }) => {
    try {
      setLoading(true);
      await api.post('/todo', { title, status, problem_desc });
      setIsModalOpen(false);
      fetchTodos();
    } catch (err) {
      setError('Error adding todo');
    } finally {
      setLoading(false);
    }
  };

  const handleEditClick = (todo) => {
    setSelectedTodo(todo);
    setIsEditModalOpen(true);
  };

  const handleSaveEdit = async ({ id, title, status, problem_desc }) => {
    try {
      setLoading(true);
      await api.patch(`/todo/${id}`, { title, status, problem_desc });
      setIsEditModalOpen(false);
      fetchTodos();
    } catch (err) {
      setError('Error updating todo');
    } finally {
      setLoading(false);
    }
  };

  const handleViewDetail = (todo) => {
    setSelectedTodo(todo);
    setIsDetailModalOpen(true);
  };

  const handleAskAI = async (todo) => {
    try {
      const res = await api.post(
        `/todo/${todo.id}/ai-recommendation`,
        {
          problem_desc: todo.problem_desc,
        }
      );

      return res.data.recommendation;
    } catch (err) {
      console.error(err);
      throw new Error('Failed to get AI recommendation');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 py-14">
      <div className="container mx-auto px-6 max-w-6xl">
        <h1 className="text-2xl font-semibold text-gray-800 text-left">
          Todo List
        </h1>
        <div className="mt-5 bg-white border border-gray-100 rounded-2xl shadow-sm">
          <div className="p-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div className="relative w-full md:w-80">
              <input
                type="text"
                placeholder="Search todo..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-gray-100 text-sm px-4 py-2.5 rounded-full outline-none focus:ring-2 focus:ring-blue-400 focus:bg-white transition-all duration-200"
              />
            </div>

            <button
              onClick={handleOpenModal}
              className="inline-flex items-center gap-2 bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-full hover:bg-emerald-700 active:scale-95 transition-all duration-200 shadow-sm"
            >
              <span className="text-lg leading-none">+</span>
              Add Todo
            </button>
          </div>
          <div className="border-t border-gray-100" />

          {loading && <p className="p-6 text-sm text-gray-500">Loading...</p>}
          {error && <p className="p-6 text-sm text-red-500">{error}</p>}

          <div className="overflow-x-auto">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-50 text-gray-600">
                <tr>
                  <th className="px-6 py-3 w-16 text-left font-medium">#</th>
                  <th className="px-6 py-3 text-left font-medium">Title</th>
                  <th className="px-6 py-3 w-100 text-left font-medium">Status</th>
                  <th className="px-6 py-3 w-50 text-left font-medium">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {todos.map((todo, idx) => (
                  <tr key={todo.id} className="hover:bg-gray-50 transition">
                    <td className="px-6 py-4">{idx + 1}</td>
                    <td className="px-6 py-4 text-gray-800">{todo.title}</td>
                    <td className="px-6 py-4">
                      <span
                        className={`px-3 py-1 text-xs rounded-full text-white ${
                          todo.status === 'problem'
                            ? 'bg-red-500'
                            : todo.status === 'completed'
                            ? 'bg-green-500'
                            : todo.status === 'created'
                            ? 'bg-gray-500'
                            : 'bg-teal-500'
                        }`}
                      >
                        {todo.status}
                      </span>
                    </td>
                    <td>
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => handleViewDetail(todo)}
                          className="p-2 rounded-full text-gray-500 hover:bg-gray-100 hover:text-gray-800 transition-all duration-200"
                        >
                          <EyeIcon className="w-5 h-5" />
                        </button>

                        {todo.status !== 'completed' && (
                          <button
                            onClick={() => handleEditClick(todo)}
                            className="p-2 rounded-full text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 transition-all duration-200"
                          >
                            <PencilSquareIcon className="w-5 h-5" />
                          </button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
                {todos.length === 0 && !loading && (
                  <tr>
                    <td colSpan="4" className="px-6 py-8 text-center text-gray-400">
                      No todos found
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <TodoModal
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveTodo}
      />

      <EditTodoModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        todo={selectedTodo}
        onSave={handleSaveEdit}
      />

      <DetailTodoModal
        isOpen={isDetailModalOpen}
        onClose={() => setIsDetailModalOpen(false)}
        todo={selectedTodo}
        onAskAI={handleAskAI}
      />

    </div>
  );
}
