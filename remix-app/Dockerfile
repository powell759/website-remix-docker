FROM node:16-alpine
WORKDIR /usr/server/app
EXPOSE 3000

COPY ./package.json ./package-lock.json ./
RUN npm install
COPY ./ .
RUN npm run build
ENV NODE_ENV=production
ARG key
ARG base
ENV AIRTABLE_API_KEY=$key
ENV AIRTABLE_BASE=$base
CMD ["npm", "run" ,"start"]
