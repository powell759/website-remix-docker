ARG airtableAPIKey
ARG airtableBase
FROM node:16-alpine
WORKDIR /usr/server/app
EXPOSE 3000

COPY ./package.json ./package-lock.json ./
RUN npm install
COPY ./ .
RUN npm run build
ENV NODE_ENV=production
ENV AIRTABLE_API_KEY=${airtableAPIKey}
ENV AIRTABLE_BASE=${airtableBase}
CMD ["npm", "run" ,"start"]
