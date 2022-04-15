FROM python:3.8.5-alpine3.12

WORKDIR /app

COPY pyproject.toml pyproject.toml

RUN apk add --update-cache \
	font-noto \
  gcc \
  graphviz \
  libffi-dev \
  musl-dev

RUN pip install --upgrade pip
RUN pip install poetry
RUN poetry install

CMD [ "poetry", "run", "python", "./src/architecture.py" ]
