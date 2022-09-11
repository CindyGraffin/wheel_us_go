import './conversation.css';

const Conversation: React.FC<unknown> = () => {
	return (
        <div className='conversation'>
            <img className='conversation-img' src="https://images.unsplash.com/photo-1613318286980-4b3dd8475772?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
            <span className="conversation-name"> Cindy Graffin</span>
        </div>
    );
};

export default Conversation;
