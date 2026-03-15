package com.example.demo.servicios;

import java.util.List;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.restclient.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import com.example.demo.models.VideojuegosDTO;

@Service
public class ServiciosVideojuegos {

    @Value("${rawg.api.key}")
    private String apiKey;

    private final RestTemplate restTemplate;

    private final String baseUrl = "https://api.rawg.io/api/games";
    
    public ServiciosVideojuegos(RestTemplateBuilder builder) {
        this.restTemplate = builder.build();
    }

    // Buscar juegos por nombre
    public List<VideojuegosDTO> obtenerVideojuegosNombre(String nombre) {
        String url = baseUrl + nombre + "key=" + apiKey;
        return restTemplate(url, VideojuegoDTO.class);
    }
}