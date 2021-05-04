package com.codesoom.demo;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

import java.io.IOException;
import java.io.OutputStream;

public class DemoHttpHandler implements HttpHandler {
    @Override
    public void handle(HttpExchange exchange) throws IOException {
        // 1. Method - GET, POST, PUT/PATCH, DELETE, ...
        // 2. Path - "/", "/tasks", "/tasks/1", ...
        // 3. Header, Body(Content)

        System.out.println(
                String.format("%s %s Something requests...",
                    exchange.getRequestMethod(),
                    exchange.getRequestURI()
                )
        );

        String method = exchange.getRequestMethod();
        String path = exchange.getRequestURI().getPath();
        String responseChars = "RESPONSE";

        if ("GET".equals(method) && "/tasks".equals(path)) responseChars = "ACCESS DENY";

        if ("POST".equals(method) && "/tasks".equals(path)) responseChars = "CREATE A NEW TASK";

        byte[] responseBytes = responseChars.getBytes();

        exchange.sendResponseHeaders(200, responseBytes.length);

        OutputStream outputStream = exchange.getResponseBody();
        outputStream.write(responseBytes);
        outputStream.flush();
        outputStream.close();

    }
}
