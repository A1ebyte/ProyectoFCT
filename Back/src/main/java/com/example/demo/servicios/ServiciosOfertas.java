package com.example.demo;

import org.springframework.boot.restclient.RestTemplateBuilder;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

@Service
public class Servicios {

    private final RestTemplate restTemplate;

    public Servicios(RestTemplateBuilder builder) {
        this.restTemplate = builder.build();
    }

    public Pokemon getPokemon(String name) {
        String url = "https://pokeapi.co/api/v2/pokemon/" + name;
        return restTemplate.getForObject(url, Pokemon.class);
    }
}

