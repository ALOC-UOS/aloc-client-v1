# 1단계: Build Stage
FROM node:20 AS builder

WORKDIR /app

# 먼저 패키지 설치 (캐시 최적화)
COPY package.json yarn.lock ./
RUN yarn install

# 소스 복사 및 빌드
COPY . . 
RUN yarn build

# 2단계: Nginx Serve Stage
FROM nginx:alpine

# 빌드 산출물 복사
COPY --from=builder /app/dist /usr/share/nginx/html

# Nginx 설정 복사
COPY nginx.conf /etc/nginx/conf.d/default.conf

# 포트 오픈
EXPOSE 80

# Nginx 실행
CMD ["nginx", "-g", "daemon off;"]