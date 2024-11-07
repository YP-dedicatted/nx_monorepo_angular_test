import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';
import { App } from './app/app';

const isProduction = false; // <-- Переключити флаг у true перед білдом

if (isProduction) {
  // Функція для створення та рендерингу Web Component
  const createReactWebComponent = (element: HTMLElement) => {
    const root = ReactDOM.createRoot(element);
    root.render(
      <StrictMode>
        <App />
      </StrictMode>
    );

    return root; // Повертаємо root для можливого очищення
  };

// Клас Web Component
  class ReactApp extends HTMLElement {
    root: ReactDOM.Root | null = null;

    connectedCallback() {
      // Створюємо root і рендеримо компонент лише при першому підключенні
      if (!this.root) {
        this.root = createReactWebComponent(this);
      }
    }

    disconnectedCallback() {
      // Очищуємо root при відключенні компонента від DOM
      if (this.root) {
        this.root.unmount();
        this.root = null;
      }
    }
  }

// Реєструємо Web Component з іменем 'react-app'
  customElements.define('react-app', ReactApp);
} else {
  const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
  );
  root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );
}




