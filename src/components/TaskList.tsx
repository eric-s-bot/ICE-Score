import React from 'react';
import { Trash2, TrendingUp, Brain, Zap } from 'lucide-react';
import { Task } from '../types';

interface TaskListProps {
  tasks: Task[];
  onDelete: (id: number) => void;
}

const TaskList: React.FC<TaskListProps> = ({ tasks, onDelete }) => {
  const sortedTasks = [...tasks].sort((a, b) => b.iceScore - a.iceScore);

  if (tasks.length === 0) {
    return (
      <div className="text-center py-12 bg-white rounded-xl shadow-lg">
        <p className="text-gray-500">Nenhuma tarefa adicionada. Comece adicionando uma tarefa acima!</p>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-6 py-4 text-left text-sm font-medium text-gray-500">Tarefa</th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">Impacto</th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">Confiança</th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">Facilidade</th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">ICE Score</th>
              <th className="px-6 py-4 text-center text-sm font-medium text-gray-500">Ação</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {sortedTasks.map((task) => (
              <tr key={task.id} className="hover:bg-gray-50">
                <td className="px-6 py-4">
                  <span className="font-medium text-gray-900">{task.title}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-1">
                    <TrendingUp size={16} className="text-blue-500" />
                    <span>{task.impact}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-1">
                    <Brain size={16} className="text-purple-500" />
                    <span>{task.confidence}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center justify-center gap-1">
                    <Zap size={16} className="text-yellow-500" />
                    <span>{task.ease}</span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {task.iceScore.toFixed(1)}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex justify-center">
                    <button
                      onClick={() => onDelete(task.id!)}
                      className="text-red-600 hover:text-red-900 transition-colors"
                      title="Excluir tarefa"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TaskList;