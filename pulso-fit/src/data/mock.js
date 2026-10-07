// Dados locais (mock). Nenhum backend ou API externa é usado.
export const DAYS = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

export const initialWorkouts = [
  {
    id: '1',
    name: 'Peito e tríceps',
    day: 'Seg',
    exercises: [
      { id: 'e1', name: 'Supino reto', sets: 4, reps: 10 },
      { id: 'e2', name: 'Crucifixo inclinado', sets: 3, reps: 12 },
      { id: 'e3', name: 'Tríceps testa', sets: 3, reps: 12 },
    ],
  },
  {
    id: '2',
    name: 'Costas e bíceps',
    day: 'Qua',
    exercises: [
      { id: 'e4', name: 'Puxada frontal', sets: 4, reps: 10 },
      { id: 'e5', name: 'Remada curvada', sets: 3, reps: 10 },
      { id: 'e6', name: 'Rosca direta', sets: 3, reps: 12 },
    ],
  },
  {
    id: '3',
    name: 'Pernas',
    day: 'Sex',
    exercises: [
      { id: 'e7', name: 'Agachamento livre', sets: 4, reps: 8 },
      { id: 'e8', name: 'Leg press', sets: 4, reps: 12 },
      { id: 'e9', name: 'Panturrilha em pé', sets: 4, reps: 15 },
    ],
  },
];

export const quotes = [
  'Constância vence intensidade.',
  'O treino de hoje é a energia de amanhã.',
  'Comece leve, termine orgulhoso.',
  'Um treino curto ainda é um treino.',
  'Você não precisa ser perfeito, só aparecer.',
];
