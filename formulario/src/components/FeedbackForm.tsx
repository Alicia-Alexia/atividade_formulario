const FeedbackForm = () => {
  return (
    <form>
      <h2>Formulário de Feedback</h2>
      
      <div className="form-group">
        <label htmlFor="name">Nome:</label>
        <input 
          type="text" 
          id="name" 
          placeholder="Digite seu nome"
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email:</label>
        <input 
          type="email" 
          id="email" 
          placeholder="Digite seu email"
        />
      </div>

      <div className="form-group">
        <label htmlFor="comment">Comentário:</label>
        <textarea 
          id="comment" 
          placeholder="Deixe seu comentário"
        />
      </div>

      <button type="submit">Enviar Feedback</button>
    </form>
  );
};

export default FeedbackForm;