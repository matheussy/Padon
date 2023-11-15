package br.com.padon.application.controllers;

import br.com.padon.application.dtos.ProdutoVendaDto;
import br.com.padon.application.dtos.RelatorioDto;
import br.com.padon.application.models.Pertence;
import br.com.padon.application.models.Venda;
import br.com.padon.application.repositorys.PertenceRepository;
import br.com.padon.application.repositorys.ProdutoRepository;
import br.com.padon.application.repositorys.VendaRepository;
import com.fasterxml.jackson.databind.JsonNode;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/relatorio")
public class RelatorioController {

	@Autowired
	private VendaRepository venda;
	@Autowired
	private PertenceRepository pertence;
	@Autowired
	private ProdutoRepository produto;
	private final SimpleDateFormat parser = new SimpleDateFormat("dd/MM/yyyy");

	@PostMapping("/bydate")
	private List<Venda> getVendasByDate(@RequestBody JsonNode node) throws ParseException {
		return venda.getByDate(parser.parse(node.get("dtinicial").asText()), parser.parse(node.get("dtfinal").asText()));
	}

	@PostMapping("/produtos")
	private List<RelatorioDto> getProdutos(@RequestBody JsonNode node) throws ParseException {
		List<Venda> vendas = venda.getByDate(parser.parse(node.get("dtinicial").asText()), parser.parse(node.get("dtfinal").asText()));
		return vendas.stream().map(v -> new RelatorioDto(
				v.getVendaId(),
				v.getDataVenda(),
				v.getStatusVenda(),
				v.getValorTotal(),
				v.getComanda(),
				produto.getProdutosFromVenda(v.getVendaId()).stream().map(p -> {
					Pertence pertenceModel = pertence.getPertence(p.getProdutoId(), v.getVendaId());
					return new ProdutoVendaDto(
							p.getProdutoId(),
							p.getNome(),
							p.getFabricante(),
							p.getImage(),
							p.getCodigoDeBarras(),
							p.isBloqueado(),
							p.getPrecoPorQuilo(),
							p.getPrecoPorUnidade(),
							p.isPorQuilo(),
							pertenceModel.getPrecoTotal(),
							pertenceModel.getQuantidade(),
							pertenceModel.getPrecoAtual()
					);
				}).toList()
		)).toList();
	}
}
