import React from 'react';
import { ClipboardList, TrendingUp, Brain, Zap, Plus, Trash2 } from 'lucide-react';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import { Task } from './types';

function App() {
  const [tasks, setTasks] = React.useState<Task[]>([]);

  const addTask = (task: Task) => {
    setTasks([...tasks, { ...task, id: Date.now() }]);
  };

  const deleteTask = (id: number) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-50">
      <div className="container mx-auto px-4 py-8">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Calculadora ICE Score
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Priorize suas tarefas usando o framework ICE: Impacto, Confiança e Facilidade.
            Pontuações mais altas indicam tarefas de maior prioridade.
          </p>
        </header>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-xl shadow-lg p-6">
            <TaskForm onSubmit={addTask} />
          </div>

          <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="mb-6">
              <h2 className="text-2xl font-semibold text-gray-800 mb-4">Guia de Pontuação</h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <TrendingUp className="text-blue-500" />
                  <div>
                    <h3 className="font-medium">Impacto (1-10)</h3>
                    <p className="text-sm text-gray-600">Quanto valor isso irá trazer?</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Brain className="text-purple-500" />
                  <div>
                    <h3 className="font-medium">Confiança (1-10)</h3>
                    <p className="text-sm text-gray-600">Qual sua certeza sobre o impacto?</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Zap className="text-yellow-500" />
                  <div>
                    <h3 className="font-medium">Facilidade (1-10)</h3>
                    <p className="text-sm text-gray-600">Qual a facilidade de implementação?</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8">
          <TaskList tasks={tasks} onDelete={deleteTask} />
        </div>
      </div>
    </div>
  );
}

export default App;