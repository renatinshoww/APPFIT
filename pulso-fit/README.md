# Pulso Fit

App de diário de treino feito em React Native (Expo) para a primeira submissão da disciplina.
Todos os dados são locais (mock): não há backend nem consumo de APIs externas.

## Como rodar
1. Instale o Node.js (versão LTS) e o app **Expo Go** no celular.
2. No terminal, dentro da pasta do projeto:
   ```bash
   npm install
   npx expo install --fix   # alinha as versões das dependências com o seu Expo
   npx expo start
   ```
3. Escaneie o QR code com o Expo Go (ou pressione `a` para Android / `w` para web).

## Telas
| Tela | Função |
|---|---|
| Início | Saudação, frase motivacional aleatória, meta semanal e próximo treino |
| Treinos | Lista de treinos e botão + para criar |
| Detalhe do treino | Exercícios, contador de descanso e botão "Concluir treino" |
| Novo treino | Formulário com nome, dia da semana e exercícios (com validação) |
| Progresso | Meta da semana, nome, peso e tema claro/escuro |

## Navegação
- Abas inferiores: Início, Treinos e Progresso.
- Dentro de Treinos, uma pilha: Lista → Detalhe → Novo treino.
- A tela Início abre o Detalhe de um treino navegando entre a aba e a pilha.

## Estrutura
```
App.js                      entrada do app (Provider + navegação)
src/
  context/AppContext.js     estado global (treinos, meta, perfil, tema)
  data/mock.js              dados locais e frases
  navigation/AppNavigator.js  abas + pilha
  screens/                  as 5 telas
  components/               ProgressBar e WorkoutCard
  theme.js                  cores claro/escuro e medidas
```

## Diferenciais
- Barra de progresso da meta semanal, atualizada ao concluir treinos.
- Contador de descanso (30/60/90 s) na tela de detalhe.
- Frase motivacional aleatória na tela inicial.
- Tema claro/escuro.
