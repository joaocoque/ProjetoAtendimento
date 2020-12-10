package br.unipe.frameworks.projetoAtend;

import java.io.Serializable;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "atendimentos")
public class Atendimento implements Serializable {

    private static final long serialVersionUID = 1L;
	
	
	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name = "coordenador")
	private String coordenador;

	@Column(name = "assunto")
	private String assunto;
	
	@Column(name = "descricao")
	private String descricao;
	
	@Column(name = "data")
	private String data;
	
	public Atendimento() {
		
	}
	
	public Atendimento(String coordenador, String assunto, String descricao, String data) {
		super();
		this.coordenador = coordenador;
		this.assunto = assunto;
		this.descricao = descricao;
		this.data = data;
	}

	public long getId() {
		return id;
	}

	public void setId(long id) {
		this.id = id;
	}

	public String getCoordenador() {
		return coordenador;
	}

	public void setCoordenador(String coordenador) {
		this.coordenador = coordenador;
	}

	public String getAssunto() {
		return assunto;
	}

	public void setAssunto(String assunto) {
		this.assunto = assunto;
	}

	public String getDescricao() {
		return descricao;
	}

	public void setDescricao(String descricao) {
		this.descricao = descricao;
	}

	public String getData() {
		return data;
	}

	public void setData(String data) {
		this.data = data;
	}
}