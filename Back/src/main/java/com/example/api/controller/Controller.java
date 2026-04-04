package com.example.api.controller;

import com.example.domain.model.Oferta;
import com.example.domain.repository.OfertaRepository;
import com.example.external.cheapshark.CheapSharkMapper;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.example.external.cheapshark.CheapSharkClient;
import com.example.external.steam.SteamClient;

@RestController
@RequestMapping("/api")
public class Controller {


    private final SteamClient steamClient;
    private final CheapSharkClient cheapsharkClient;
    private final OfertaRepository ofertaRepository;
    
    public Controller(SteamClient servicioSteam, CheapSharkClient servicioCheapShark, OfertaRepository ofertaRepository) {
		this.steamClient = servicioSteam;
		this.cheapsharkClient = servicioCheapShark;
        this.ofertaRepository = ofertaRepository;
    }

    //todo esto deberia ser con la bbdd
	@GetMapping("/{id}")
    public ResponseEntity<?> getJuego(@PathVariable(name = "id") long id) {
		return ResponseEntity.ok(steamClient.getGame(id));
    }
    
    @GetMapping("/deals") //usamos ? dentro de ResponseEntity para decir que es cualquier cosa
    public ResponseEntity<?> gamedeals(){
        return ResponseEntity.ok(cheapsharkClient.FetchAllDeals());
    }
    
    @GetMapping("/tiendas")
    public ResponseEntity<?> getTiendasUpdate() {
    	return ResponseEntity.ok(cheapsharkClient.getStores());
    }


    @GetMapping("/oferta")
    public ResponseEntity<?> getOfertaUpdate() {
       Oferta pepe = CheapSharkMapper.toEntity(cheapsharkClient.obtenerOferta());
        ofertaRepository.save(pepe);
        return ResponseEntity.ok(" ");
    }

    
    /*@GetMapping("/top10") //usamos ? dentro de ResponseEntity para decir que es cualquier cosa
    public ResponseEntity<?> top10Gamedeals(@RequestParam(required = false,defaultValue = "DealRating",name = "type") String type){
    	try {
            SortBy sort = SortBy.valueOf(type);
            return ResponseEntity.ok(cheapsharkClient.top10Deals(sort));
        } catch (IllegalArgumentException e) {
            return ResponseEntity.badRequest().body("Invalid sortBy value: " + type);
        }    	
    }*/
    
    /*
    @GetMapping("/generos")
    public String getGeneros() {
        //return rawg.getStores();
    }*/
}