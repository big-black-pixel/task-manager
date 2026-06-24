import type { Task, CreateTaskDTO, UpdateTaskDTO } from '../../entities/task/model/types';

// Моковые данные для разработки
const mockTasks: Task[] = [
  {
    id: '1',
    title: 'Изучить TypeScript',
    description: 'Разобраться с типами и интерфейсами',
    status: 'in-progress',
    priority: 'high',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
  {
    id: '2',
    title: 'Настроить FSD',
    description: 'Перейти на Feature-Sliced Design',
    status: 'done',
    priority: 'high',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
  },
];

// Имитация API запросов
export const taskApi = {
  getAll: async (): Promise<Task[]> => {
    return new Promise((resolve) => {
      setTimeout(() => resolve(mockTasks), 500);
    });
  },

  getById: async (id: string): Promise<Task | undefined> => {
    return new Promise((resolve) => {
      setTimeout(() => {
        const task = mockTasks.find((t) => t.id === id);
        resolve(task);
      }, 300);
    });
  },

  create: async (dto: CreateTaskDTO): Promise<Task> => {
    return new Promise((resolve) => {
      const newTask: Task = {
        id: Date.now().toString(),
        ...dto,
        status: dto.status || 'todo',
        priority: dto.priority || 'medium',
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
      };
      mockTasks.push(newTask);
      setTimeout(() => resolve(newTask), 300);
    });
  },

  update: async (id: string, dto: UpdateTaskDTO): Promise<Task> => {
    return new Promise((resolve, reject) => {
      const index = mockTasks.findIndex((t) => t.id === id);
      if (index === -1) {
        reject(new Error('Task not found'));
        return;
      }
      mockTasks[index] = { ...mockTasks[index], ...dto, updatedAt: new Date().toISOString() };
      setTimeout(() => resolve(mockTasks[index]), 300);
    });
  },

  delete: async (id: string): Promise<void> => {
    return new Promise((resolve) => {
      const index = mockTasks.findIndex((t) => t.id === id);
      if (index !== -1) {
        mockTasks.splice(index, 1);
      }
      setTimeout(resolve, 300);
    });
  },
};