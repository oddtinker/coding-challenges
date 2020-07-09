#include <stdio.h>
#include <stdlib.h>

#include <sys/socket.h>
#include <sys/types.h>

#include <netinet/in.h>

int main() {
	char server_message[256] = "You have reached the server";
	// create socket
	int server_socket;
	// same as client side: first arg is internet socket, second TCP socket, third protocol
	server_socket = socket(AF_INET, SOCK_STREAM, 0);
	
	// define address structure
	struct sockaddr_in server_address;
	server_address.sin_family = AF_INET;
	server_address.sin_port = htons(9002);
	server_address.sin_addr.s_addr = INADDR_ANY;

	// bind the socket to specified IP and port
	bind(server_socket, (struct sockaddr*) &server_address, sizeof(server_address));
	// listen to socket and backlog, or how many connections can be waiting for this socket, as second arg
	listen(server_socket, 5);
	int client_socket;
	// accept args: the accepting socket; struct with address of client connection; size for client address; useful for figuring out where the client is
	client_socket = accept(server_socket, NULL, NULL);

	// send: where to; what data, size of it; optional flag
	send(client_socket, server_message, sizeof(server_message), 0);

	close(server_socket);

	return 0;
}
