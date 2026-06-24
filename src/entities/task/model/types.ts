export type TaskPriority = 'low' | 'medium' | 'high';

export type TaskStatus = 'todo' | 'in-progress' | 'done';

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: TaskStatus;
  priority: TaskPriority;
  dueDate?: string;
  reminder?: string;
  tags?: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CreateTaskDTO {
  title: string;
  description?: string;
  status?: TaskStatus;
  priority?: TaskPriority;
  dueDate?: string;
  reminder?: string;
  tags?: string[];
}

export interface UpdateTaskDTO extends Partial<CreateTaskDTO> {
  id: string;
}