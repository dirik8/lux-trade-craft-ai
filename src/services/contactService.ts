
// This would typically interact with a backend API
// For this example, we'll use local storage as a simple data store

export interface ContactMessage {
  id: string;
  name: string;
  email: string;
  subject: string;
  message: string;
  createdAt: string;
  status: 'new' | 'read' | 'responded';
}

// Sample data
const SAMPLE_MESSAGES: ContactMessage[] = [
  {
    id: "msg-1",
    name: "John Doe",
    email: "john@example.com",
    subject: "Membership Inquiry",
    message: "I'm interested in learning more about your premium membership options. What are the benefits and pricing?",
    createdAt: "2025-04-05T14:30:00.000Z",
    status: "new"
  },
  {
    id: "msg-2",
    name: "Sarah Miller",
    email: "sarah@example.com",
    subject: "Trading Course Question",
    message: "Hello, I've been following your blog and I'm wondering if you offer any beginner trading courses? I'd like to start learning about market analysis.",
    createdAt: "2025-04-04T09:15:00.000Z",
    status: "read"
  },
  {
    id: "msg-3",
    name: "Robert Chen",
    email: "robert@example.com",
    subject: "Technical Support",
    message: "I'm having trouble accessing the premium videos in my account. Can someone help me resolve this issue?",
    createdAt: "2025-04-03T16:45:00.000Z", 
    status: "responded"
  }
];

// Initialize local storage with sample data on first load
const initializeLocalStorage = () => {
  const existingMessages = localStorage.getItem('contactMessages');
  if (!existingMessages) {
    localStorage.setItem('contactMessages', JSON.stringify(SAMPLE_MESSAGES));
  }
};

// Get all contact messages
export const getContactMessages = (): ContactMessage[] => {
  initializeLocalStorage();
  const messages = localStorage.getItem('contactMessages');
  return messages ? JSON.parse(messages) : [];
};

// Add a new contact message
export const addContactMessage = (message: Omit<ContactMessage, 'id' | 'createdAt' | 'status'>): ContactMessage => {
  const newMessage: ContactMessage = {
    ...message,
    id: `msg-${Date.now()}`,
    createdAt: new Date().toISOString(),
    status: 'new'
  };
  
  const messages = getContactMessages();
  localStorage.setItem('contactMessages', JSON.stringify([newMessage, ...messages]));
  
  return newMessage;
};

// Update message status
export const updateMessageStatus = (id: string, status: 'new' | 'read' | 'responded'): ContactMessage | undefined => {
  const messages = getContactMessages();
  const updatedMessages = messages.map(msg => 
    msg.id === id ? { ...msg, status } : msg
  );
  
  localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
  return updatedMessages.find(msg => msg.id === id);
};

// Delete a message
export const deleteContactMessage = (id: string): void => {
  const messages = getContactMessages();
  const updatedMessages = messages.filter(msg => msg.id !== id);
  
  localStorage.setItem('contactMessages', JSON.stringify(updatedMessages));
};
