установка всего нужного для проекта реакт:
1)npm init vite@latest
2)npm install
3)npm install @reduxjs/toolkit react-redux
4)npm i react-router
5)npm install -D sass-embedded

Архитектура  
/src
/components // Переиспользуемые UI-компоненты
/layouts // Общие макеты страниц(футер с картами)
/pages // Страницы приложения
/features // Функциональные модули (фичи), для самостоятельных блоков
/store // RTK
App.tsx
index.tsx
routes.tsx
