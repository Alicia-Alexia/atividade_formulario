import React, { useState, type ChangeEvent, type FormEvent } from 'react'; 
import './FeedbackForm.css';

const FeedbackForm = () => {
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [comment, setComment] = useState<string>('');

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleCommentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setComment(e.target.value);
  };

  // 2. A lógica de envio
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Impede o refresh da página

    // Validação Simples (Best Practice: Fail Fast)
    if (!name || !email || !comment) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    // Exibindo os dados (Simulando um envio para API)
    alert(`
      Feedback Enviado com Sucesso!
      Nome: ${name}
      Email: ${email}
      Comentário: ${comment}
    `);

    // Limpar o formulário após envio (Boa UX)
    setName('');
    setEmail('');
    setComment('');
  };

  return (
    // 3. Conectando a função no onSubmit
    <form onSubmit={handleSubmit} className="feedback-form"> 
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