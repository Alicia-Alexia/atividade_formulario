import React, { useState, type ChangeEvent } from 'react';

const FeedbackForm = () => {
  // O TypeScript infere que é string, mas ser explícito ajuda na leitura
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  // Dica PRO: Tipando o evento inline corretamente
  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  return (
    <form>
      <h2>Formulário de Feedback</h2>
      
      <div className="form-group">
        <label htmlFor="name">Nome:</label>
        <input 
          type="text" 
          id="name" 
          placeholder="Digite seu nome"
          value={name}
          onChange={handleNameChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Digite seu email"
          value={email}
          onChange={handleEmailChange}
        />
      </div>

      <div className="form-group">
        <label htmlFor="comment">Comentário:</label>
        <textarea 
          id="comment" 
          placeholder="Deixe seu comentário"
          rows={4} 
          value={comment}
          onChange={handleCommentChange}
        />
      </div>

      <button type="submit">Enviar Feedback</button>
    </form>
  );
};

export default FeedbackForm;