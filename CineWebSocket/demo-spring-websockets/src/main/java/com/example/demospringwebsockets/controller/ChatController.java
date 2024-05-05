package com.example.demospringwebsockets.controller;

import java.util.ArrayList;
import java.util.List;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;

import com.example.demospringwebsockets.entity.ChatMessage;
import com.example.demospringwebsockets.entity.ChatMessageRepository;
import com.example.demospringwebsockets.entity.MessageDto;

import org.springframework.web.bind.annotation.RestController;

@RestController
@CrossOrigin("*")
public class ChatController {

    private final ChatMessageRepository chatMessageRepository;

    public ChatController(ChatMessageRepository chatMessageRepository) {
        this.chatMessageRepository = chatMessageRepository;
    }

    @GetMapping("/api/messages")
    public List<MessageDto> getRecentMessages() {   	
        List<ChatMessage> recentMessages = chatMessageRepository.findTop10ByOrderByIdDesc();
    	List<MessageDto> listadoMensajes = new ArrayList<>();
    	
    	for (ChatMessage chatMessageHistory : recentMessages) {
        	listadoMensajes.add(new MessageDto("null", chatMessageHistory.getMessage()));
		}
        // Obtener los mensajes más recientes de la base de datos
        return listadoMensajes;
    }
}
