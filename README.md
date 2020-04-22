# Service Communication Sample

## Log

```bash
npm install -g @nestjs/schematics

nest new --skip-git --package-manager npm --skip-install service-users
nest new --skip-git --package-manager npm --skip-install service-movies

cd service-users
npm install
npm install @nestjs/swagger swagger-ui-express @nestjs/typeorm typeorm mysql

cd service-movies
npm install
npm install @nestjs/swagger swagger-ui-express @nestjs/typeorm typeorm mysql

```
