/* Данные портфолио. Чтобы добавить проект, скопируйте объект в projects и поменяйте поля.
   color: sun, mint, pink, tang или cobalt. cover: путь к картинке (assets/...), необязательно. */
window.PORTFOLIO = {
  // Логин на GitHub, например "ivan-petrov". Тогда подтянутся ваши публичные репозитории с темой (topic) ниже.
  // Тему добавляют в настройках репозитория: About, значок шестерёнки, Topics.
  githubUser: "",
  githubTopic: "portfolio",

  projects: [
    {
      title: "AMT: Volume Profile и CVD",
      year: "2026",
      role: "Алгоритм и визуализация",
      text: "Профиль объёма с Value Area, узлами HVN и LVN, фильтром WMA(30) и CVD-дивергенциями. Интерактивная демонстрация на синтетических данных.",
      live: "projects/amt-volume-profile/index.html",
      repo: "",
      tags: ["JavaScript", "Canvas", "Auction Market Theory"],
      color: "sun"
    },
    {
      title: "[ПРОЕКТ 2]",
      year: "2026",
      role: "[РОЛЬ]",
      text: "Появится после загрузки на GitHub.",
      live: "",
      repo: "",
      tags: [],
      color: "mint"
    },
    {
      title: "[ПРОЕКТ 3]",
      year: "2026",
      role: "[РОЛЬ]",
      text: "Появится после загрузки на GitHub.",
      live: "",
      repo: "",
      tags: [],
      color: "pink"
    }
  ]
};
