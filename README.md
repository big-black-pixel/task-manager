# 📋 Task Manager

Современный менеджер задач на **React 19 + TypeScript + Vite** с архитектурой **Feature-Sliced Design (FSD)**.

---

## 📦 Стек технологий

### Frontend
- **Vite 8** — сборщик
- **React 19** — UI библиотека
- **TypeScript 6** — типизация
- **SCSS (Sass)** — стилизация
- **TanStack Query 5** — серверное состояние
- **Zustand 5** — локальное состояние
- **React Router 7** — маршрутизация
- **DnD Kit** — drag-and-drop
- **Axios** — HTTP клиент

### Backend (в разработке)
- **NestJS** — Node.js фреймворк
- **PostgreSQL** — база данных
- **Prisma** — ORM
- **Redis** — кэширование
- **WebSocket** — real-time

---

## 📂 Структура проекта

## 📁 Feature-Sliced Design (FSD)

```text
src/
├── app/                              # 🎯 Инициализация приложения
│   ├── providers/                    # Провайдеры приложения
│   ├── styles/                       # Глобальные стили
│   └── index.tsx                     # Корневой компонент
│
├── pages/                            # 📄 Страницы приложения
│   ├── landing/                      # Приветственная страница
│   ├── dashboard/                    # Рабочая область (Task Manager)
│   ├── login/                        # Авторизация
│   ├── register/                     # Регистрация
│   ├── profile/                      # Профиль пользователя
│   └── not-found/                    # Страница 404
│
├── widgets/                          # 🧩 Крупные независимые UI-блоки
│   ├── header/                       # Верхняя панель
│   ├── sidebar/                      # Боковая навигация
│   ├── task-board/                   # Kanban-доска
│   └── statistics/                   # Статистика
│
├── features/                         # ⚡ Пользовательские сценарии
│   ├── task-create/
│   │   ├── model/
│   │   ├── ui/
│   │   ├── lib/
│   │   └── index.ts
│   │
│   ├── task-edit/
│   │   ├── model/
│   │   ├── ui/
│   │   ├── lib/
│   │   └── index.ts
│   │
│   ├── task-delete/
│   │   ├── model/
│   │   ├── ui/
│   │   ├── lib/
│   │   └── index.ts
│   │
│   └── task-drag/
│       ├── model/
│       ├── ui/
│       ├── lib/
│       └── index.ts
│
├── entities/                         # 📦 Бизнес-сущности
│   ├── task/
│   │   ├── api/
│   │   ├── model/
│   │   ├── ui/
│   │   └── index.ts
│   │
│   ├── user/
│   │   ├── api/
│   │   ├── model/
│   │   ├── ui/
│   │   └── index.ts
│   │
│   ├── project/
│   │   ├── api/
│   │   ├── model/
│   │   ├── ui/
│   │   └── index.ts
│   │
│   ├── comment/
│   │   ├── api/
│   │   ├── model/
│   │   ├── ui/
│   │   └── index.ts
│   │
│   └── history/
│       ├── api/
│       ├── model/
│       ├── ui/
│       └── index.ts
│
├── shared/                           # 🔧 Общие ресурсы
│   ├── api/                          # Axios и API-клиенты
│   ├── assets/                       # Изображения, шрифты, иконки
│   ├── config/                       # Конфигурация приложения
│   ├── constants/                    # Константы
│   ├── hooks/                        # Общие React-хуки
│   ├── lib/                          # Вспомогательные функции
│   ├── types/                        # Общие типы TypeScript
│   ├── ui/                           # Общие UI-компоненты
│   └── utils/                        # Утилиты
│
└── main.tsx                          # Точка входа приложения
```

## 🧭 Правила импортов (FSD)

Слои могут импортировать только из нижних слоёв:

```
app → pages → widgets → features → entities → shared
```

### ✅ Правильно:

```typescript
// pages/tasks/ui/TasksPage.tsx
import { TaskCard } from '@/entities/task'
import { TaskBoard } from '@/widgets/task-board'
```

### ❌ Неправильно:

```typescript
// entities/task/ui/TaskCard.tsx
import { TasksPage } from '@/pages/tasks' // ❌ Нельзя!
```

---

## 📝 Примеры кода

### Entity (типы)

```typescript
// src/entities/task/model/types.ts
export type TaskPriority = 'low' | 'medium' | 'high'
export type TaskStatus = 'todo' | 'in-progress' | 'done'

export interface Task {
  id: string
  title: string
  description?: string
  status: TaskStatus
  priority: TaskPriority
  dueDate?: string
  createdAt: string
  updatedAt: string
}
```

### Entity (публичный API)

```typescript
// src/entities/task/index.ts
export type { Task, TaskPriority, TaskStatus } from './model/types'
```

### Shared (API)

```typescript
// src/shared/api/taskApi.ts
import type { Task, CreateTaskDTO } from '@/entities/task'

export const taskApi = {
  getAll: async (): Promise<Task[]> => {
    // Временные моки, потом заменим на axios.get('/api/tasks')
    return []
  },
  create: async (dto: CreateTaskDTO): Promise<Task> => {
    // Временные моки, потом заменим на axios.post('/api/tasks', dto)
    return {} as Task
  }
}
```

### Feature (хук)

```typescript
// src/features/task-create/model/useCreateTask.ts
import { useMutation, useQueryClient } from '@tanstack/react-query'
import { taskApi } from '@/shared/api/taskApi'
import type { CreateTaskDTO } from '@/entities/task'

export const useCreateTask = () => {
  const queryClient = useQueryClient()

  return useMutation({
    mutationFn: (dto: CreateTaskDTO) => taskApi.create(dto),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['tasks'] })
    }
  })
}
```

### Page (страница)

```typescript
// src/pages/tasks/ui/TasksPage.tsx
import { useQuery } from '@tanstack/react-query'
import { taskApi } from '@/shared/api/taskApi'
import { TaskBoard } from '@/widgets/task-board'

export const TasksPage = () => {
  const { data: tasks, isLoading } = useQuery({
    queryKey: ['tasks'],
    queryFn: taskApi.getAll
  })

  if (isLoading) return <div>Загрузка...</div>
  return <TaskBoard tasks={tasks || []} />
}
```

---

## 🚀 Команды

```bash
npm install          # Установка зависимостей
npm run dev          # Запуск dev сервера (http://localhost:5173)
npm run build        # Сборка продакшена
npm run preview      # Предпросмотр продакшен сборки
npm run lint         # Линтинг кода
```

---

## 🌿 Git workflow

### Структура веток

```
main                    ← Стабильная версия (продакшен)
  └── develop           ← Основная ветка разработки
       ├── feature/task-drag
       ├── feature/dark-theme
       └── fix/api-error
```

### Команды

```bash
# Создать ветку для фичи
git checkout -b feature/task-create

# Коммит (Conventional Commits)
git commit -m "feat(task): add create task form"
git commit -m "fix(api): correct task update endpoint"
git commit -m "style(header): update navigation"
git commit -m "refactor(entities): extract validation"

# Отправка на GitHub
git push origin feature/task-create
```

### Типы коммитов

- `feat` — новая фича
- `fix` — исправление ошибки
- `style` — изменения стилей (без логики)
- `refactor` — рефакторинг кода
- `docs` — документация
- `chore` — настройка, конфиги

---

## 📚 Полезные ссылки

- [Feature-Sliced Design](https://feature-sliced.design/)
- [TanStack Query](https://tanstack.com/query/latest)
- [Zustand](https://docs.pmnd.rs/zustand)
- [React Router](https://reactrouter.com/)
- [DnD Kit](https://dndkit.com/)
- [NestJS](https://docs.nestjs.com/)

---

## 👨‍💻 Автор

**Магомед** — Frontend Developer

- GitHub: [@big-black-pixel](https://github.com/big-black-pixel)
- Email: hasamovmohmad@gmail.com