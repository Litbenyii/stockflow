# StockFlow

Sistema inteligente de gestión de inventario en tiempo real para empresas retail.

## Requisitos

- Docker Desktop instalado y corriendo
- Git

## Despliegue

```bash
git clone https://github.com/Litbenyii/stockflow.git
cd stockflow
docker compose up
```

## Acceso

Una vez levantado el proyecto:

| Servicio | URL |
|---|---|
| Frontend | http://localhost:4321/stockflow/ |
| Backend API | http://localhost:3001/ping |
| Base de datos | localhost:5434 |

## Servicios

- **Frontend** — Web de StockFlow construida con Astro (Node 22)
- **Backend** — API REST con Node.js + Express (Node 20)
- **Base de datos** — PostgreSQL 15

## Variables de entorno

Copiar el archivo de ejemplo:

```bash
cp .env.example .env
```

Las variables disponibles están en `.env.example`. El proyecto funciona con los valores por defecto sin necesidad de modificar nada.

## Estructura del proyecto

stockflow/
├── docker-compose.yml
├── .env.example
├── README.md
├── Dockerfile
├── src/
├── public/
└── backend/
└── Dockerfile
