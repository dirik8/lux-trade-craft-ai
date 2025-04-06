
import React, { useState, useEffect } from "react";
import { 
  Table, 
  TableBody, 
  TableCell, 
  TableHead, 
  TableHeader, 
  TableRow 
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Edit, Trash2, Plus, RefreshCw } from "lucide-react";
import { toast } from "@/hooks/use-toast";

// This would normally come from a proper service
// For simplicity, we'll just simulate data display for now
const AdminBlog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [blogPosts, setBlogPosts] = useState([
    {
      id: 1,
      title: "Understanding Crypto Market Cycles",
      category: "Market Analysis",
      author: "Alexander Thompson",
      date: "2025-03-28",
      featured: true,
      status: "Published"
    },
    {
      id: 2,
      title: "5 Essential Risk Management Strategies",
      category: "Trading Strategies",
      author: "David Patel",
      date: "2025-03-22", 
      featured: false,
      status: "Published"
    },
    {
      id: 3,
      title: "Technical Analysis 101: Essential Indicators",
      category: "Technical Analysis",
      author: "Sophia Rodriguez",
      date: "2025-03-15",
      featured: false,
      status: "Published"
    },
    {
      id: 4,
      title: "Bitcoin Price Prediction 2025",
      category: "Market Analysis",
      author: "Michael Chen",
      date: "2025-04-01",
      featured: false,
      status: "Draft"
    }
  ]);

  // Format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    }).format(date);
  };

  // Delete post
  const handleDelete = (id: number) => {
    if (window.confirm("Are you sure you want to delete this blog post?")) {
      setBlogPosts(blogPosts.filter(post => post.id !== id));
      toast({
        title: "Post deleted",
        description: "The blog post has been permanently deleted.",
      });
    }
  };

  // Add new post
  const handleAddNew = () => {
    toast({
      title: "Feature not implemented",
      description: "Blog post creation functionality is coming soon.",
    });
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold">Blog Management</h1>
        <div className="flex space-x-2">
          <Button 
            variant="outline" 
            className="border-blkr-gold/30 text-blkr-gold hover:bg-blkr-gold/10"
          >
            <RefreshCw size={16} className="mr-2" />
            Refresh
          </Button>
          <Button 
            onClick={handleAddNew}
            className="bg-blkr-gold text-blkr-black hover:bg-blkr-goldLight"
          >
            <Plus size={16} className="mr-2" />
            New Post
          </Button>
        </div>
      </div>
      
      <div className="mb-6">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-blkr-offWhite/50" size={18} />
          <Input
            className="pl-10 bg-blkr-blackLight border-blkr-gold/20 text-blkr-offWhite"
            placeholder="Search blog posts..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="bg-blkr-blackLight rounded-lg border border-blkr-gold/20 overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow className="border-b border-blkr-gold/20">
              <TableHead className="text-blkr-gold">Title</TableHead>
              <TableHead className="text-blkr-gold">Category</TableHead>
              <TableHead className="text-blkr-gold">Author</TableHead>
              <TableHead className="text-blkr-gold">Date</TableHead>
              <TableHead className="text-blkr-gold">Status</TableHead>
              <TableHead className="text-blkr-gold">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {blogPosts.map((post) => (
              <TableRow 
                key={post.id}
                className="border-b border-blkr-gold/10"
              >
                <TableCell>
                  <div className="font-medium">{post.title}</div>
                  {post.featured && (
                    <div className="text-xs bg-blkr-gold/20 text-blkr-gold rounded-full px-2 py-0.5 mt-1 inline-block">Featured</div>
                  )}
                </TableCell>
                <TableCell>{post.category}</TableCell>
                <TableCell>{post.author}</TableCell>
                <TableCell>{formatDate(post.date)}</TableCell>
                <TableCell>
                  <span className={`text-xs rounded-full px-2 py-1 ${
                    post.status === 'Published' 
                      ? 'bg-green-900/30 text-green-500' 
                      : 'bg-yellow-900/30 text-yellow-500'
                  }`}>
                    {post.status}
                  </span>
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      className="text-blkr-gold hover:text-blkr-goldLight hover:bg-blkr-gold/10"
                    >
                      <Edit size={16} />
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleDelete(post.id)}
                      className="text-red-500 hover:text-red-400 hover:bg-red-500/10"
                    >
                      <Trash2 size={16} />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      
      <div className="mt-6 text-center text-blkr-offWhite/70">
        <p>Note: This is a simplified blog management interface. A complete CMS implementation would require backend integration.</p>
      </div>
    </div>
  );
};

export default AdminBlog;
