#include <stdio.h>
#include <stdlib.h>

#include <sys/types.h>
#include <sys/socket.h>

#include <netinet/in.h>

int main() {
	// create a socket
	int network_socket;
	network_socket = socket(AF_INET, SOCK_STREAM, 0);

	// specify an address, or port, to connect to
	struct sockaddr_in server_address;
	server_address.sin_family = AF_INET;
	// // htons() converts port number to appropriate data format
	server_address.sin_port = htons(9002);
	// // INADDR_ANY is a shortcut to local port 0.0.0.0...
	server_address.sin_addr.s_addr = INADDR_ANY;

	// connect to another socket
	int connection_status = connect(network_socket, (struct sockaddr *) &server_address, sizeof(server_address));	
	if (connection_status == -1) {
		printf("something went wrong\n");
	}
	
	// having established a connection, either send or receive data
	char server_response[256];
	recv(network_socket, &server_response, sizeof(server_response), 0);
	
	printf("Server response: %s\n", server_response);
	
	// close the socket
	close(network_socket);

	return 0;
}
