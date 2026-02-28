#include <sys/socket.h>
#include <stdio.h>
#include <unistd.h>
#include <arpa/inet.h>
#include <string.h>

#define PORT 8080
#define BUFFER_SIZE 4096

int main() {
    int server_fd, client_fd;
    struct sockaddr_in address;
    char buffer[BUFFER_SIZE] = {0};

    // Create socket
    server_fd = socket(AF_INET, SOCK_STREAM, 0);
    if (server_fd < 0) { perror("socket()"); return 1; }
    printf("Socket created ✅\n");

    // Bind
    address.sin_family = AF_INET;
    address.sin_addr.s_addr = INADDR_ANY;
    address.sin_port = htons(PORT);
    if (bind(server_fd, (struct sockaddr*)&address, sizeof(address)) < 0) {
        perror("bind()"); return 1;
    }
    printf("Bind succeeded ✅\n");

    // Listen
    if (listen(server_fd, 10) < 0) { perror("listen()"); return 1; }
    printf("Listening on port %d...\n", PORT);

    while (1) {
        // Accept connection
        client_fd = accept(server_fd, NULL, NULL);
        if (client_fd < 0) { perror("accept()"); continue; }
        printf("Got connection!\n");

        // Read request
        memset(buffer, 0, BUFFER_SIZE);
        read(client_fd, buffer, BUFFER_SIZE);
        printf("Request:\n%s\n", buffer);

        // Send response
        char *response =
            "HTTP/1.1 200 OK\r\n"
            "Content-Type: text/plain\r\n"
            "Content-Length: 21\r\n"
            "\r\n"
            "Hello from C Server 🚀\n";
        write(client_fd, response, strlen(response));

        // Close client socket
        close(client_fd);
    }

    close(server_fd);
    return 0;
}