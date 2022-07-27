package me.kickscar.emailllist.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import me.kickscar.emailllist.dto.JsonResult;
import me.kickscar.emailllist.repository.EmaillistRepository;
import me.kickscar.emailllist.vo.EmaillistVo;


@RestController
public class ApiController {
	
	@Autowired
	private EmaillistRepository emaillistRepository;
	
	@GetMapping("/api")
	public ResponseEntity<JsonResult> read(@RequestParam(value="kw", required=true, defaultValue="") String keyword) {
		
		System.out.println("Request[GET /api]");
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(emaillistRepository.findAll(keyword)));
	}
	
	@PostMapping("/api")
	public ResponseEntity<JsonResult> create(@RequestBody EmaillistVo vo) {
		emaillistRepository.insert(vo);
		
		return ResponseEntity
				.status(HttpStatus.OK)
				.body(JsonResult.success(vo));
	}
}
