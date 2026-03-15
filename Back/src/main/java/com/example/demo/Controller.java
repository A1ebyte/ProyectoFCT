package com.example.demo;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.Pokemon;

@RestController
public class Controller {

    private final Servicios servicio;

    public Controller(Servicios service) {
        this.servicio = service;
    }

    @GetMapping("/pokemon/{name}")
    public Pokemon getPokemon(@PathVariable("name") String name) {
        return servicio.getPokemon(name);
    }
}