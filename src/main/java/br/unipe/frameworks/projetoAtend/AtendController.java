package br.unipe.frameworks.projetoAtend;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/")
public class AtendController {

	@Autowired
	private AtendRepository atendRepository;
	
	
	@GetMapping("/atendimentos")
	public List<Atendimento> getAllAtendimentos(){
		return atendRepository.findAll();
	}		
	
	
	@PostMapping("/atendimentos")
	public Atendimento createAtendimento(@RequestBody Atendimento atendimento) {
		return atendRepository.save(atendimento);
	}
	
	
	@GetMapping("/atendimentos/{id}")
	public ResponseEntity<Atendimento> getAtendimentoById(@PathVariable Long id) {
		Atendimento atendimento = atendRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Atendimento com id" + id + "não cadastrado."));
		return ResponseEntity.ok(atendimento);
	}
	
	
	
	@PutMapping("/atendimentos/{id}")
	public ResponseEntity<Atendimento> updateAtendimento(@PathVariable Long id, @RequestBody Atendimento atendimentoDetails){
		Atendimento atendimento = atendRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Atendimento com id" + id + "não cadastrado."));
		
		atendimento.setCoordenador(atendimentoDetails.getCoordenador());
		atendimento.setAssunto(atendimentoDetails.getAssunto());
		atendimento.setDescricao(atendimentoDetails.getDescricao());
		atendimento.setData(atendimentoDetails.getData());
		
		Atendimento updatedAtendimento = atendRepository.save(atendimento);
		return ResponseEntity.ok(updatedAtendimento);
	}
	
	
	@DeleteMapping("/atendimentos/{id}")
	public ResponseEntity<Map<String, Boolean>> deleteAtendimento(@PathVariable Long id){
		Atendimento atendimento = atendRepository.findById(id)
				.orElseThrow(() -> new ResourceNotFoundException("Atendimento com id" + id + "não cadastrado."));
		
		atendRepository.delete(atendimento);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);
	}
	
	
}
