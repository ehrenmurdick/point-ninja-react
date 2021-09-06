FROM node:14-alpine as base

COPY package.json /
RUN yarn

ENV NODE_ENV=production
ENV PORT=3001

EXPOSE 3001
COPY . /
CMD ["yarn", "run", "start"]
