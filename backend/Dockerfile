FROM golang:1.22

# Install git
RUN apt-get update && apt-get install -y git

WORKDIR /app

COPY go.mod go.sum ./
RUN go mod download

COPY . .
RUN go build -o main .

CMD ["/app/main"]