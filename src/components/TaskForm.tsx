import React from 'react';
import { Plus } from 'lucide-react';
import { Task } from '../types';

interface TaskFormProps {
  onSubmit: (task: Task) => void;
}

const TaskForm: React.FC<TaskFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    title: '',
    impact: 5,
    confidence: 5,
    ease: 5,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const iceScore = (formData.impact * formData.confidence * formData.ease) / 10;
    onSubmit({
      ...formData,
      iceScore,
    });
    setFormData({ title: '', impact: 5, confidence: 5, ease: 5 });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'title' ? value : Number(value),
    }));
  };

  const getFieldLabel = (field: string) => {
    const labels: { [key: string]: string } = {
      impact: 'Impacto',
      confidence: 'Confiança',
      ease: 'Facilidade'
    };
    return labels[field] || field;
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">Adicionar Nova Tarefa</h2>
      
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Título da Tarefa
        </label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          required
          placeholder="Digite o título da tarefa"
        />
      </div>

      {['impact', 'confidence', 'ease'].map((field) => (
        <div key={field}>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            {getFieldLabel(field)} (1-10)
          </label>
          <div className="flex items-center gap-4">
            <input
              type="range"
              name={field}
              min="1"
              max="10"
              value={formData[field as keyof typeof formData]}
              onChange={handleChange}
              className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer"
            />
            <span className="w-12 text-center font-medium">
              {formData[field as keyof typeof formData]}
            </span>
          </div>
        </div>
      ))}

      <button
        type="submit"
        className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
      >
        <Plus size={20} />
        Adicionar Tarefa
      </button>
    </form>
  );
};

export default TaskForm;