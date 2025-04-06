
import React, { useState, useEffect } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { 
  Dialog, 
  DialogContent, 
  DialogDescription, 
  DialogHeader, 
  DialogTitle 
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  getContactMessages, 
  updateMessageStatus, 
  deleteContactMessage, 
  ContactMessage 
} from "@/services/contactService";
import { Search, Eye, Trash2, Mail, Send, RefreshCw } from "lucide-react";
import { toast } from "@/hooks/use-toast";

const AdminContacts = () => {
  const [messages, setMessages] = useState<ContactMessage[]>([]);
  const [filteredMessages, setFilteredMessages] = useState<ContactMessage[]>([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMessage, setSelectedMessage] = useState<ContactMessage | null>(null);
  const [replyContent, setReplyContent] = useState("");
  const [isReplying, setIsReplying] = useState(false);

  // Load messages
  useEffect(() => {
    refreshMessages();
  }, []);

  const refreshMessages = () => {
    const allMessages = getContactMessages();
    setMessages(allMessages);
    setFilteredMessages(allMessages);
  };

  // Filter messages based on search query
  useEffect(() => {
    if (searchQuery.trim() === "") {
      setFilteredMessages(messages);
    } else {
      const query = searchQuery.toLowerCase();
      setFilteredMessages(
        messages.filter(
          (msg) =>
            msg.name.toLowerCase().includes(query) ||
            msg.email.toLowerCase().includes(query) ||
            msg.subject.toLowerCase().includes(query) ||
            msg.message.toLowerCase().includes(query)
        )
      );
    }
  }, [searchQuery, messages]);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    }).format(date);
  };

  // View message details
  const viewMessage = (message: ContactMessage) => {
    setSelectedMessage(message);
    if (message.status === 'new') {
      const updated = updateMessageStatus(message.id, 'read');
      if (updated) {
        refreshMessages();
      }
    }
  };

  // Delete message
  const handleDelete = (id: string) => {
    if (window.confirm("Are you sure you want to delete this message?")) {
      deleteContactMessage(id);
      refreshMessages();
      if (selectedMessage?.id === id) {
        setSelectedMessage(null);
      }
      toast({
        title: "Message deleted",
        description: "The message has been permanently deleted.",
      });
    }
  };

  // Send reply
  const sendReply = () => {
    if (!selectedMessage) return;
    
    setIsReplying(true);
    
    // Simulate sending email
    setTimeout(() => {
      const updated = updateMessageStatus(selectedMessage.id, 'responded');
      if (updated) {
        refreshMessages();
        setSelectedMessage({
          ...selectedMessage,
          status: 'responded'
        });
      }
      
      setIsReplying(false);
      setReplyContent("");
      
      toast({
        title: "Reply sent",
        description: `Your reply to ${selectedMessage.name} has been sent successfully.`,
      });
    }, 1500);
  };

  // Status badge color
  const getStatusBadge = (status: 'new' | 'read' | 'responded') => {
    switch (status) {
      case 'new':
        return <Badge className="bg-blue-500">New</Badge>;
      case 'read':
        return <Badge className="bg-yellow-600">Read</Badge>;
      case 'responded':
        return <Badge className="bg-green-600">Responded</Badge>;
      default:
        return null;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Contact Messages</h1>
        <Button 
          onClick={refreshMessages}
          variant="outline" 
          className="border-blkr-gold/30 text-blkr-gold hover:bg-blkr-gold/10"
        >
          <RefreshCw size={16} className="mr-2" />
          Refresh
        </Button>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blkr-offWhite/50" size={18} />
          <Input
            className="pl-10 bg-blkr-blackLight border-blkr-gold/20 text-blkr-offWhite"
            placeholder="Search messages..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="bg-blkr-blackLight rounded-lg border border-blkr-gold/20 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-blkr-gold/20">
              <TableHead className="text-blkr-gold">Status</TableHead>
              <TableHead className="text-blkr-gold">Name</TableHead>
              <TableHead className="text-blkr-gold">Subject</TableHead>
              <TableHead className="text-blkr-gold">Date</TableHead>
              <TableHead className="text-blkr-gold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredMessages.length === 0 ? (
              <TableRow>
                <TableCell colSpan={5} className="text-center py-8 text-blkr-offWhite/50">
                  No messages found
                </TableCell>
              </TableRow>
            ) : (
              filteredMessages.map((message) => (
                <TableRow 
                  key={message.id}
                  className={`border-b border-blkr-gold/10 ${
                    message.status === 'new' ? 'bg-blkr-gold/5' : ''
                  }`}
                >
                  <TableCell>{getStatusBadge(message.status)}</TableCell>
                  <TableCell>
                    <div className="font-medium">{message.name}</div>
                    <div className="text-sm text-blkr-offWhite/60">{message.email}</div>
                  </TableCell>
                  <TableCell className="max-w-[200px] truncate">{message.subject}</TableCell>
                  <TableCell>
                    <div className="text-sm text-blkr-offWhite/60">{formatDate(message.createdAt)}</div>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => viewMessage(message)}
                        className="text-blkr-gold hover:text-blkr-goldLight hover:bg-blkr-gold/10"
                      >
                        <Eye size={16} />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(message.id)}
                        className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
                      >
                        <Trash2 size={16} />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
      
      {/* Message Dialog */}
      <Dialog open={!!selectedMessage} onOpenChange={(open) => !open && setSelectedMessage(null)}>
        <DialogContent className="bg-blkr-blackLight border border-blkr-gold/20 text-blkr-offWhite max-w-2xl">
          {selectedMessage && (
            <>
              <DialogHeader>
                <DialogTitle className="text-blkr-gold text-xl">{selectedMessage.subject}</DialogTitle>
                <DialogDescription className="text-blkr-offWhite/70">
                  From {selectedMessage.name} ({selectedMessage.email})
                </DialogDescription>
              </DialogHeader>
              
              <div className="mt-4 p-4 bg-blkr-black rounded-md border border-blkr-gold/10 whitespace-pre-wrap">
                {selectedMessage.message}
              </div>
              
              <div className="mt-4">
                <div className="flex justify-between items-center mb-2">
                  <h4 className="font-medium flex items-center">
                    <Mail size={16} className="mr-2 text-blkr-gold" />
                    Reply to this message
                  </h4>
                  <div className="text-xs text-blkr-offWhite/50">
                    Received: {formatDate(selectedMessage.createdAt)}
                  </div>
                </div>
                <Textarea
                  placeholder="Type your reply here..."
                  value={replyContent}
                  onChange={(e) => setReplyContent(e.target.value)}
                  rows={5}
                  className="bg-blkr-black border-blkr-gold/20 resize-none"
                />
                <div className="mt-4 flex justify-end space-x-2">
                  <Button
                    variant="outline"
                    onClick={() => setSelectedMessage(null)}
                    className="border-blkr-gold/30 text-blkr-gold hover:bg-blkr-gold/10"
                  >
                    Cancel
                  </Button>
                  <Button
                    onClick={sendReply}
                    disabled={!replyContent.trim() || isReplying}
                    className="bg-blkr-gold text-blkr-black hover:bg-blkr-goldLight"
                  >
                    {isReplying ? (
                      <>
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send size={16} className="mr-2" />
                        Send Reply
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default AdminContacts;
