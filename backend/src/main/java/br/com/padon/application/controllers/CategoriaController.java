package br.com.padon.application.controllers;

import br.com.padon.application.models.Categoria;
import br.com.padon.application.repositorys.CategoriaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
public class CategoriaController {

    @Autowired
    private CategoriaRepository categoria;

    @PostMapping("/categoria/create")
    public void createCategoria(@RequestParam(name = "name") String name, @RequestParam(name = "description") String description) {
        categoria.save(new Categoria(name, description));
    }

}
