import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import { createServer, Model } from "miragejs";

createServer({

    models: {
        transactions: Model,
    },

    seeds(server) {
        server.db.loadData({
            transactions: []
        })
    },

    routes() {
        this.namespace = 'api';
        this.get('/transactions', () => {
            return this.schema.all('transactions')
        })

        this.post('/transactions', (schema, request) => {
            const data = JSON.parse(request.requestBody);
            return schema.create('transactions', data)
        })
    }
})



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

