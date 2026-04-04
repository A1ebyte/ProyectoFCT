package com.example.domain.model;

import jakarta.persistence.Entity;

@Entity
public class Tienda {
    private Long id_tienda;
    private String nombre;//storeName
    private Boolean enSeguimiento;//isActive
    private String logo;
    private String banner;
    private String icon;


    public Tienda() {
    }

    public Long getId_tienda() {
        return id_tienda;
    }

    public void setId_tienda(Long id_tienda) {
        this.id_tienda = id_tienda;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public Boolean getEnSeguimiento() {
        return enSeguimiento;
    }

    public void setEnSeguimiento(Boolean enSeguimiento) {
        this.enSeguimiento = enSeguimiento;
    }

    public String getLogo() {
        return logo;
    }

    public void setLogo(String logo) {
        this.logo = logo;
    }

    public String getBanner() {
        return banner;
    }

    public void setBanner(String banner) {
        this.banner = banner;
    }

    public String getIcon() {
        return icon;
    }

    public void setIcon(String icon) {
        this.icon = icon;
    }
}
