# 🐳 Docker - Instrucciones de Uso

## Requisitos Previos
- Docker Desktop instalado
- Docker Compose instalado (incluido en Docker Desktop)

## 🚀 Opción 1: Usando Docker Compose (Recomendado)

### Construir y ejecutar
```bash
docker-compose up --build
```

### Ejecutar en segundo plano
```bash
docker-compose up -d
```

### Ver logs
```bash
docker-compose logs -f
```

### Detener la aplicación
```bash
docker-compose down
```

## 🔧 Opción 2: Usando Docker directamente

### Construir la imagen
```bash
docker build -t portfolio-app .
```

### Ejecutar el contenedor
```bash
docker run -p 3000:3000 --name portfolio portfolio-app
```

### Detener el contenedor
```bash
docker stop portfolio
```

### Eliminar el contenedor
```bash
docker rm portfolio
```

## 🌐 Acceder a la aplicación

Una vez que el contenedor esté corriendo, abre tu navegador en:
```
http://localhost:3000
```

## 📝 Notas

- El Dockerfile usa un build multi-stage para optimizar el tamaño de la imagen final
- Se utiliza `pnpm` como gestor de paquetes
- La aplicación corre en modo producción dentro del contenedor
- El puerto 3000 está expuesto por defecto

## 🔍 Troubleshooting

### Si el puerto 3000 está ocupado
Cambia el puerto en el `docker-compose.yml`:
```yaml
ports:
  - "8080:3000"  # Usa el puerto 8080 en lugar de 3000
```

### Reconstruir la imagen después de cambios
```bash
docker-compose up --build --force-recreate
```

### Limpiar todo (imágenes, contenedores, volúmenes)
```bash
docker-compose down -v
docker system prune -a
```
