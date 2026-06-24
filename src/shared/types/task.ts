// Приоритет задачи (строгий тип, чтобы нельзя было написать 'urgent' вместо 'high')
export type TaskPriority = 'low' | 'medium' | 'high';

// Статус задачи (для Kanban-доски)
export type TaskStatus = 'todo' | 'in-progress' | 'done';

// Основной интерфейс задачи
export interface Task {
  id: string;
  title: string;
  description?: string; // Опциональное поле
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string; // Дата выполнения (ISO формат: "2026-06-23T10:00:00Z")
  reminder?: string; // Время напоминания
  tags?: string[]; // Массив тегов
  createdAt: string; // Дата создания
  updatedAt: string; // Дата обновления
}

// Интерфейс для создания новой задачи (без id и дат, их добавит бэкенд)
export interface CreateTaskDTO {
  title: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  dueDate?: string;
  reminder?: string;
  tags?: string[];
}

// Интерфейс для обновления задачи (все поля опциональны)
export interface UpdateTaskDTO extends Partial<CreateTaskDTO> {
  id: string;
}